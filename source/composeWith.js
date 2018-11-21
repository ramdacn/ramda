import _curry2 from './internal/_curry2';
import pipeWith from './pipeWith';
import reverse from './reverse';


/**
 * 利用转换函数从右往左执行函数组合。最右侧函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
 *
 * **注意：**compose 输出的函数不会自动进行柯里化。
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.compose, R.pipeWith
 * @example
 *
 *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 *
 *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> null
 *
 * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, f(i, ...args)))
 */
var composeWith = _curry2(function composeWith(xf, list) {
  return pipeWith.apply(this, [xf, reverse(list)]);
});
export default composeWith;
