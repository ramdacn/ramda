import _curry2 from './internal/_curry2.js';

/**
 * 异或操作。
 *
 * 如果其中一个参数为真，另一个参数为假，则返回`true` ；否则返回`false`。
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {Any} a
 * @param {Any} b
 * @return {Boolean} true if one of the arguments is truthy and the other is falsy
 * @see R.or, R.and
 * @example
 *
 *      R.xor(true, true); //=> false
 *      R.xor(true, false); //=> true
 *      R.xor(false, true); //=> true
 *      R.xor(false, false); //=> false
 */
var xor = _curry2(function xor(a, b) {
  return Boolean(!a ^ !b);
});
export default xor;
