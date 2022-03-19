'use strict';

const iterate = (obj, callback) => {
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    callback(key, value, obj);
  }
};

module.exports = { iterate };
