/**
 * Terse JavasScript type checking functions
 * Charles Szilagyi
 * 2013.10.03. https://github.com/thekarel
 */

var types = {};
types.STRING = 'a string',
types.INT = 1,
types.FLOAT = 1.1,
types.BOOLEAN = true,
types.NULL = null,
types.UNDEFINED = undefined,
types.NAN = NaN,
types.ARRAY = [1,2,3],
types.OBJECT = {a: 1},
types.FUNCTION = function(){};

exports.type = types;

exports.isString = function(v) {
  return (typeof v === 'string');
}

exports.isInteger = function(v) {
  return (parseInt(v) === v)
}

exports.isFloat = function(v) {
  return ((v % 1) > 0)
}

exports.isBoolean = function(v) {
  return (typeof v === 'boolean')
}

exports.isNull = function(v) {
  return (v === null)
}

exports.isUndefined = function(v) {
  return (typeof v === 'undefined')
}

exports.isNan = function(v) {
  return (isNaN(v) && typeof v === 'number')
}

exports.isArray = function(v) {
  return (v !== null && typeof v === 'object' && typeof v.length === 'number')
}

exports.isObject = function(v) {
  return (v !== null && typeof v === 'object' && v.length === undefined)
}

exports.isFunction = function(v) {
  return (typeof v === 'function')
}

/*
Typeof results:

Type of STRING is string
Type of INT is number
Type of FLOAT is number
Type of BOOLEAN is boolean
Type of NULL is object*
Type of UNDEFINED is undefined
Type of NAN is number*
Type of ARRAY is object*
Type of OBJECT is object*
Type of FUNCTION is function

Resources:
https://github.com/lodash/lodash/blob/master/lodash.js
 */