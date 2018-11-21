import _arity from './internal/_arity';
import _curry2 from './internal/_curry2';
import _has from './internal/_has';


/**
 * [`R.memoize`](＃memoize) 的可定制版本。`memoizeWith` 需要一个额外的函数，该函数接受一个参数集，用于创建缓存的键值，在该缓存中会存储被缓存函数的结果。注意，生成缓存键值时，要避免可能会错误地覆盖之前已缓存键值对的冲突。 
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
 *      const factorial = R.memoizeWith(R.identity, n => {
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
