var _curry1 = require('./internal/_curry1');
var _identity = require('./internal/_identity');


/**
 * 一个不做任何事情而只是把给定参数原封不动返回的方法。适合用作默认或者占位方法。
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
module.exports = _curry1(_identity);
