import _curry2 from './internal/_curry2.js';
import _isArray from './internal/_isArray.js';
import _map from './internal/_map.js';
import _assoc from './internal/_assoc.js';

/**
 * 如果指定属性的值为数组，其结果为相同顺序的对象数组，对象里指定属性的值被数组对应元素替换，其余属性和原对象属性一致。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig String -> {k: [v]} -> [{k: v}]
 * @param {String} key The key to determine which property of the object should be unwind
 * @param {Object} object The object containing list under property named as key which is to unwind
 * @return {List} A new list of object containing the value of input key having list replaced by each element in the object.
 * @example
 *
 * R.unwind('hobbies', {
 *   name: 'alice',
 *   hobbies: ['Golf', 'Hacking'],
 *   colors: ['red', 'green'],
 * });
 * // [
 * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
 * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
 * // ]
 */

var unwind = _curry2(function(key, object) {
  // If key is not in object or key is not as a list in object
  if (!(key in object && _isArray(object[key]))) {
    return [object];
  }
  // Map over object[key] which is a list and assoc each element with key
  return _map(function(item) {
    return _assoc(key, item, object);
  }, object[key]);
});

export default unwind;
