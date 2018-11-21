import _curry1 from './internal/_curry1';


/**
 * 取反操作。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
var negate = _curry1(function negate(n) { return -n; });
export default negate;
