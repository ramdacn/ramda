import _arity from './internal/_arity';
import _curry1 from './internal/_curry1';
import _curry2 from './internal/_curry2';
import _curryN from './internal/_curryN';


/**
 * 对函数进行柯里化，并限制柯里化函数的元数。柯里化函数有两个很好的特性：
 *
 * 1. 参数不需要一次只传入一个。假设 `g` 由 `R.curryN(3, f)` 生成，则下列写法是等价的：
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * 2. 占位符值 [`R.__`](#__) 可用于标记暂未传入参数的位置，允许部分应用于任何参数组合，而无需关心它们的位置和顺序。 假设 `g` 定义如前所示，`_` 代表 [`R.__`](#__) ，则下列写法是等价的：
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});
export default curryN;
