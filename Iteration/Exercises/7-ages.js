'use strict';

const ages = (persons) => {
  const result = {};

  for (const name in persons) {
    result[name] = persons[name].died - persons[name].born;
  }

  return result;

};

module.exports = { ages };
