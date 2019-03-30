import _curry1 from './internal/_curry1';


/**
 * 输入一个只接收单个数组作为参数的函数，返回一个新函数：
 *
 *   - 接收任意个参数；
 *   - 将参数组成数组传递给 `fn` ；
 *   - 返回执行结果。
 *
 * 换言之，`R.unapply` 将一个使用数组作为参数的函数，变为一个不定参函数。 `R.unapply` 是 [`R.apply`](#apply) 的逆函数。
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
var unapply = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
export default unapply;
