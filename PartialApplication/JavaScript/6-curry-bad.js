'use strict';

const curry = (fn) => (...args) => (
  fn.length > args.length ? curry(
    ((fn, ...args1) => (...args2) => (
      fn(...args1.concat(args2))
    ))(fn, ...args)
  ) : fn(...args)
);

const sum4 = (a, b, c, d) => (a + b + c + d);

// Исправленные версиии
const curryWithoutBind = (fn, length = null) => (...args) => {
  length = length ?? fn.length;
  return length > args.length ? curryWithoutBind(
    (...args2) => fn(...args.concat(args2))
    , length - args.length
  ) : fn(...args);
};

const curryWithBind = (fn) => (...args) => (
  fn.length > args.length ? curryWithBind(fn.bind(null, ...args)) : fn(...args)
);

const curriedWithoutBind = curryWithoutBind(sum4);
const yNoBind = curriedWithoutBind(1)(2)(3)(4);
console.log(yNoBind);

const curriedWithBind = curryWithBind(sum4);
const yWithBind = curriedWithBind(1)(2)(3)(4);
console.log(yWithBind);

// Usage

const f = curry(sum4);
const y1 = sum4(1, 2, 3, 4);
const y2 = f(1, 2, 3, 4);
const y3 = f(1, 2, 3)(4);
//const y4 = f(1, 2)(3)(4);
//const y5 = f(1)(2)(3)(4);
const y6 = f(1)(2, 3, 4);
//const y7 = f(1)(2)(3, 4);
const y8 = f(1, 2)(3, 4);
console.log(y1, y2, y3, y6, y8);
