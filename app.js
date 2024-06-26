// 1) Given this Function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }
//Convert to es2015:

//ES2015

function filterOutOdds(...nums) {
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//or

// const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

// 2) Write a function called findMin that accepts a variable number
// of arguments and returns the smallest argument.
// Make sure to do this using the rest and spread operator.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...nums) => Math.min(...nums);
// //or could use:
// function findMin(...nums) {
//   return Math.min(...nums);
// }

//3) Merge Objects:
// Write a function called mergeObjects that accepts two objects and returns
// a new object which contains all the keys and values of the first object and
// second object.

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//4) Write a function called doubleAndReturnArgs which accepts an array and a variable
// number of arguments. The function should return a new array with the original
// array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr.map((num) => num * 2),
  ...args.map((num) => num * 2),
];

//5) Slice and Dice: For this section, write the following functions using rest,
// spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying
// the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  ({ [key]: undefined, ...obj } = obj);
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  return { ...obj, [key]: val };
}
