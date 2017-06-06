var _curry3 = require('./internal/_curry3');


/**
 * 接受一个 predicate ，transform function 和 初始值，返回一个与初始值相同类型的值。对输入值进行 transform ，直到 transform 的结果满足 predicate，此时返回这个满足 predicate 的值。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred 条件函数
 * @param {Function} fn 迭代函数
 * @param {*} init 初始值
 * @return {*} 满足条件函数的终止值
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
