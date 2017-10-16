import _arity from './internal/_arity';
import _curry1 from './internal/_curry1';


/**
 * 创建一个只能调用一次的函数。
 *
 * 将给定函数 `fn` 封装到新函数`fn'`中，`fn'` 确保 `fn` 只能调用一次。重复调用`fn'` ，只会返回第一次执行时的结果。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
var once = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
export default once;
