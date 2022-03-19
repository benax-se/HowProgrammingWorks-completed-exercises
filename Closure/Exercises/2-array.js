'use strict';

const array = () => {
  const arrayData = [];
  const get = (i) => arrayData[i];
  get.push = (val) => arrayData.push(val);
  get.pop = () => arrayData.pop();

  return get;
};

module.exports = { array };
