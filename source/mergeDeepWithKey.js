import _curry3 from './internal/_curry3';
import _isObject from './internal/_isObject';
import mergeWithKey from './mergeWithKey';


/**
 * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
 *
 * - 并且两个关联的值都是对象，则继续递归合并这两个值。
 * - 否则，使用给定函数对该 key 和对应的两个值进行处理，并将返回值作为该 key 的新值。
 *
 * 如果某 key 只存在于一个对象中，该键值对将作为结果对象的键值对。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
export default mergeDeepWithKey;
