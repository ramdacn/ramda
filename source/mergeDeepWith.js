import _curry3 from './internal/_curry3';
import mergeDeepWithKey from './mergeDeepWithKey';


/**
 * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
 *
 * - 并且两个关联的值都是对象，则继续递归合并这两个值。
 * - 否则，使用给定函数对两个值进行处理，并将返回值作为该 key 的新值。
 *
 * 如果某 key 只存在于一个对象中，该键值对将作为结果对象的键值对。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
var mergeDeepWith = _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
export default mergeDeepWith;
