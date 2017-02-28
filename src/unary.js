var _curry1 = require('./internal/_curry1');
var nAry = require('./nAry');


/**
 * 将任意元（包括零元）函数封装成一元函数。任何额外的参数都不会传递给被封装的函数。
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn 待封装的函数
 * @return {Function} 封装后的函数`fn`，只接收一个参数
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // 只有一个参数能被传递到函数当中
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});
