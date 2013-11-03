/**
 * Terse JavasScript type checking functions - tests
 * Charles Szilagyi
 * 2013.10.03. https://github.com/thekarel
 */

var types = require('./types');

describe('The following types can be tested in JavaScript', function() {
  it('string', function() {
    expect(types.isString(types.type.STRING)).toBe(true);
    expect(types.isString(types.type.INT)).toBe(false);
    expect(types.isString(types.type.FLOAT)).toBe(false);
    expect(types.isString(types.type.BOOLEAN)).toBe(false);
    expect(types.isString(types.type.UNDEFINED)).toBe(false);
    expect(types.isString(types.type.NAN)).toBe(false);
    expect(types.isString(types.type.ARRAY)).toBe(false);
    expect(types.isString(types.type.OBJECT)).toBe(false);
    expect(types.isString(types.type.FUNCTION)).toBe(false);
  });

  it('integer', function() {
    expect(types.isInteger(types.type.STRING)).toBe(false);
    expect(types.isInteger(types.type.INT)).toBe(true);
    expect(types.isInteger(types.type.FLOAT)).toBe(false);
    expect(types.isInteger(types.type.BOOLEAN)).toBe(false);
    expect(types.isInteger(types.type.UNDEFINED)).toBe(false);
    expect(types.isInteger(types.type.NAN)).toBe(false);
    expect(types.isInteger(types.type.ARRAY)).toBe(false);
    expect(types.isInteger(types.type.OBJECT)).toBe(false);
    expect(types.isInteger(types.type.FUNCTION)).toBe(false);
  });

  it('float', function() {
    expect(types.isFloat(types.type.STRING)).toBe(false);
    expect(types.isFloat(types.type.INT)).toBe(false);
    expect(types.isFloat(types.type.FLOAT)).toBe(true);
    expect(types.isFloat(types.type.BOOLEAN)).toBe(false);
    expect(types.isFloat(types.type.UNDEFINED)).toBe(false);
    expect(types.isFloat(types.type.NAN)).toBe(false);
    expect(types.isFloat(types.type.ARRAY)).toBe(false);
    expect(types.isFloat(types.type.OBJECT)).toBe(false);
    expect(types.isFloat(types.type.FUNCTION)).toBe(false);
  });

  it('boolean', function() {
    expect(types.isBoolean(types.type.STRING)).toBe(false);
    expect(types.isBoolean(types.type.INT)).toBe(false);
    expect(types.isBoolean(types.type.FLOAT)).toBe(false);
    expect(types.isBoolean(types.type.BOOLEAN)).toBe(true);
    expect(types.isBoolean(types.type.NULL)).toBe(false);
    expect(types.isBoolean(types.type.UNDEFINED)).toBe(false);
    expect(types.isBoolean(types.type.NAN)).toBe(false);
    expect(types.isBoolean(types.type.ARRAY)).toBe(false);
    expect(types.isBoolean(types.type.OBJECT)).toBe(false);
    expect(types.isBoolean(types.type.FUNCTION)).toBe(false);
  });

  it('null', function() {
    expect(types.isNull(types.type.STRING)).toBe(false);
    expect(types.isNull(types.type.INT)).toBe(false);
    expect(types.isNull(types.type.FLOAT)).toBe(false);
    expect(types.isNull(types.type.BOOLEAN)).toBe(false);
    expect(types.isNull(types.type.NULL)).toBe(true);
    expect(types.isNull(types.type.UNDEFINED)).toBe(false);
    expect(types.isNull(types.type.NAN)).toBe(false);
    expect(types.isNull(types.type.ARRAY)).toBe(false);
    expect(types.isNull(types.type.OBJECT)).toBe(false);
    expect(types.isNull(types.type.FUNCTION)).toBe(false);
  });

  it('undefined', function() {
    expect(types.isUndefined(types.type.STRING)).toBe(false);
    expect(types.isUndefined(types.type.INT)).toBe(false);
    expect(types.isUndefined(types.type.FLOAT)).toBe(false);
    expect(types.isUndefined(types.type.BOOLEAN)).toBe(false);
    expect(types.isUndefined(types.type.NULL)).toBe(false);
    expect(types.isUndefined(types.type.UNDEFINED)).toBe(true);
    expect(types.isUndefined(types.type.NAN)).toBe(false);
    expect(types.isUndefined(types.type.ARRAY)).toBe(false);
    expect(types.isUndefined(types.type.OBJECT)).toBe(false);
    expect(types.isUndefined(types.type.FUNCTION)).toBe(false);
  });

  it('NaN', function() {
    expect(types.isNan(types.type.STRING)).toBe(false);
    expect(types.isNan(types.type.INT)).toBe(false);
    expect(types.isNan(types.type.FLOAT)).toBe(false);
    expect(types.isNan(types.type.BOOLEAN)).toBe(false);
    expect(types.isNan(types.type.NULL)).toBe(false);
    expect(types.isNan(types.type.UNDEFINED)).toBe(false);
    expect(types.isNan(types.type.NAN)).toBe(true);
    expect(types.isNan(types.type.ARRAY)).toBe(false);
    expect(types.isNan(types.type.OBJECT)).toBe(false);
    expect(types.isNan(types.type.FUNCTION)).toBe(false);
  });

  it('array', function() {
    expect(types.isArray(types.type.STRING)).toBe(false);
    expect(types.isArray(types.type.INT)).toBe(false);
    expect(types.isArray(types.type.FLOAT)).toBe(false);
    expect(types.isArray(types.type.BOOLEAN)).toBe(false);
    expect(types.isArray(types.type.NULL)).toBe(false);
    expect(types.isArray(types.type.UNDEFINED)).toBe(false);
    expect(types.isArray(types.type.NAN)).toBe(false);
    expect(types.isArray(types.type.ARRAY)).toBe(true);
    expect(types.isArray(types.type.OBJECT)).toBe(false);
    expect(types.isArray(types.type.FUNCTION)).toBe(false);
  });

  it('object, ie. {...}', function() {
    expect(types.isObject(types.type.STRING)).toBe(false);
    expect(types.isObject(types.type.INT)).toBe(false);
    expect(types.isObject(types.type.FLOAT)).toBe(false);
    expect(types.isObject(types.type.BOOLEAN)).toBe(false);
    expect(types.isObject(types.type.NULL)).toBe(false);
    expect(types.isObject(types.type.UNDEFINED)).toBe(false);
    expect(types.isObject(types.type.NAN)).toBe(false);
    expect(types.isObject(types.type.ARRAY)).toBe(false);
    expect(types.isObject(types.type.OBJECT)).toBe(true);
    expect(types.isObject(types.type.FUNCTION)).toBe(false);
  });

  it('function', function() {
    expect(types.isFunction(types.type.STRING)).toBe(false);
    expect(types.isFunction(types.type.INT)).toBe(false);
    expect(types.isFunction(types.type.FLOAT)).toBe(false);
    expect(types.isFunction(types.type.BOOLEAN)).toBe(false);
    expect(types.isFunction(types.type.NULL)).toBe(false);
    expect(types.isFunction(types.type.UNDEFINED)).toBe(false);
    expect(types.isFunction(types.type.NAN)).toBe(false);
    expect(types.isFunction(types.type.ARRAY)).toBe(false);
    expect(types.isFunction(types.type.OBJECT)).toBe(false);
    expect(types.isFunction(types.type.FUNCTION)).toBe(true);
  });


})