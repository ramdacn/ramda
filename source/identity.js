import _curry1 from './internal/_curry1';
import _identity from './internal/_identity';


/**
 * 将输入值原样返回。适合用作默认或占位函数。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
var identity = _curry1(_identity);
export default identity;
