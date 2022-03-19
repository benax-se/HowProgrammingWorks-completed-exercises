'use strict';

const phonebook = [
  { name: '1', phone: 2 },
  { name: '3', phone: 2 },
];

const findPhoneByName = (name) => {
  for (const rec of phonebook) {
    if (rec.name === name) return rec.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
