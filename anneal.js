const R = require('ramda');

const Pacc = T => (cOld, cNew) => Math.exp((cOld - cNew) / T);

const anneal = R.curry(function(T, alpha, iter, cost, neighbor, solution){
    let oldCost = cost(solution);
    const tMin = 0.00001;
    let bestSolution = solution;
    let t = T;
    while (t > tMin) {
        for(let i = 0; i < iter; i++){
            const newSolution = neighbor(solution);
            const newCost = cost(newSolution);
            const ap = Pacc(T)(oldCost, newCost);
            if(ap > Math.random()){
                bestSolution = newSolution;
                oldCost = newCost;
            }
        }
        t = t*alpha;
    }
    return {solution, oldCost};
});