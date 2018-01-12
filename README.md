# AnnealJs
Simulated Annealing in Pure JavaScript

Import anneal function from anneal.js.

The function accepts the following paarmeters:

T: T is the temperature and usually starts at 1
##
alpha: a constant between 0 and 1 that the temperature is multiplied with (decreases the temperature)
##
iter: the number of iterations (can be anywhere from 500 to 10000 and beyond)
##
cost: a cost function which measures hos costly the new solution is (this cost is compared to the cost of the previous solution)
##
neighbor: a function to generate a new neigboring solution and is called with the previous solution
##
solution: the initial solution

Algorithm adapted from this fantastic article where the algorithm is implemented in Python:
http://katrinaeg.com/simulated-annealing.html
