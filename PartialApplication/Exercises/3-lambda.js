'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;

// Define function tagDate that prepends current date to the string.
// E.g. tagDate('My String') === '[2019-11-14] My String'
// Use function tagged to implement tagDate.

const tagDate = (tag) => {
  const curentDate = new Date();
  const formattedCurentDate = curentDate.toISOString().slice(0, 10);

  return tagged(formattedCurentDate, tag);
};

module.exports = { tagDate };
