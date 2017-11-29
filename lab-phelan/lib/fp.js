'use strict';

//map, filter, reduce, slice

const Fp = module.exports = {};

//Map:
//Callback must be a function, Collection must be an array. Error otherwise.
Fp.map = (callback, collection) => {
  if (typeof callback !== 'function') {throw new TypeError(`Argument 'callback' is not a function.`);}
  if (!Array.isArray(collection)) {throw new TypeError(`Argument 'collection' is not an array.`);}
  return Array.prototype.map.call(collection, callback);
};

//Filter:
//Callback must be a function, Collection must be an array. Error otherwise.
Fp.filter = (callback, collection) => {
  if (typeof callback !== 'function') {throw new TypeError(`Argument 'callback' is not a function.`);}
  if (!Array.isArray(collection)) {throw new TypeError(`Argument 'collection' is not an array.`);}
  return Array.prototype.filter.call(collection, callback);
};

//Reduce:
//Callback must be a function, Collection must be an array. If Collection is empty, initialValue must have a value. Error otherwise.
Fp.reduce = (callback, initialState, collection) => {
  if (typeof callback !== 'function') {throw new TypeError(`Argument 'callback' is not a function.`);}
  if (!Array.isArray(collection)) {throw new TypeError(`Argument 'collection' is not an array.`);}
  if (collection.length===0 && !initialState) {throw new Error('In Array.prototype.reduce, initialValue cannot be falsy if collection is empty.');}
  return Array.prototype.reduce.call(collection, callback, initialState);
};

//Slice:
//Collection must be an Array, Begin and End must be integers. Error otherwise.
Fp.slice = (begin, end, collection) => {
  if (!Array.isArray(collection)) {throw new TypeError(`Argument 'collection' is not an array.`);}

  let legalTypes = ['undefined', 'number'];

  if (!legalTypes.includes(typeof begin) || !legalTypes.includes(typeof end) ) {throw new Error(`In Array.prototype.slice, input values for indexes can only be nonexistent (omitted), or a number. Arguments were '${begin}' and '${end}'`);}
  return Array.prototype.slice.call(collection, begin, end);
};

module.exports = Fp;
