'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const def = types[i];

    const defTypeName = def.name.toLowerCase();

    if (typeof arg !== defTypeName) {
      throw new Error(`Argument type ${defTypeName} expected`);
    }
  }

  const res = fn(...args);
  const resType = types[types.length - 1];
  const resTypeName = resType.name.toLowerCase();

  if (typeof res !== resTypeName) {
    throw new TypeError(`Result type ${name} expected`);
  }

  return res;
};

module.exports = { contract };
