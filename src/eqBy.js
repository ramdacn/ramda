var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * 接受一个函数和两个值，通过传入函数对两个值进行相等性判断。如果两个值的计算结果相等，则返回 `true` ；否则返回 `false` 。
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});
