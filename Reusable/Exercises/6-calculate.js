'use strict';

const square = (a) => a * a;

const cube = (a) => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const arr = new Array(10);

  for (let i = 0; i <= 9; i++) {
    arr[i] = average(square(i), cube(i));
  }

  return arr;
};

module.exports = { square, cube, average, calculate };
