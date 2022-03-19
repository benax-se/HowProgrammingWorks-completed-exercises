'use strict';

const power = (exp, n) => Math.pow(n, exp);

const square = (x) => power(2, x);

const cube = power.bind(null, 3);

module.exports = { power, square, cube };
