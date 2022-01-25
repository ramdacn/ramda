import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xtap from './internal/_xtap.js';


/**
 * 对输入的值执行给定的函数，然后返回输入的值。
 *
 * 若传入的是 transfomer，则当前函数用作 transducer，对传入的 transformer 进行封装。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      const sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
var tap = _curry2(_dispatchable([], _xtap, function tap(fn, x) {
  fn(x);
  return x;
}));
export default tap;
