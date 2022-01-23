import _curry3 from './internal/_curry3.js';


/**
 * 接受一个 predicate ，transform function 和 初始值，返回一个与初始值相同类型的值。对输入值进行 transform ，直到 transform 的结果满足 predicate，此时返回这个满足 predicate 的值。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
var until = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
export default until;
