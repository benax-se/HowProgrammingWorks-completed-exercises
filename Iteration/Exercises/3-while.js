'use strict';

const sum = (...args) => {
  let i = 0;
  let value = 0;
  while (i < args.length) {
    value += args[i];
    i++;
  }

  return value;
};

module.exports = { sum };
