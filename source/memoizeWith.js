import _arity from './internal/_arity.js';
import _curry2 from './internal/_curry2.js';
import _has from './internal/_has.js';


/**
 * 创建一个新函数，当调用时，会执行原函数，输出结果；并且缓存本次的输入参数及其对应的结果。
 * 后续，若用相同的参数对缓存函数进行调用，不会再执行原函数，而是直接返回该参数对应的缓存值。
 *
 * `memoizeWith` 接受两个函数，第一个会将输入参数序列化为缓存键值对的“键值”，第二个是需要缓存的函数。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(Number, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
var memoizeWith = _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
export default memoizeWith;
