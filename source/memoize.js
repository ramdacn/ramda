import memoizeWith from './memoizeWith';
import toString from './toString';


/**
 * `memoize` 方法可以缓存函数的计算结果。
 *
 * 创建一个新函数，被调用时，缓存特定参数对应的经 `fn` 计算的结果，并将结果返回。此后如果用相同的参数调用缓存的 `fn` 时，直接返回该参数对应的缓存结果，不必再调用 `fn`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @deprecated since v0.25.0
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoize = memoizeWith(function() {
  return toString(arguments);
});
export default memoize;
