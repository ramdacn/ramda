import _curry3 from './internal/_curry3';


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred 条件函数
 * @param {Function} whenFalseFn 当 `pred` 返回结果为 false 时调用的函数
 * @param {*} x 作为参数传入 `pred` 用于判断，如果需要作为参数传入 `whenFalseFn`
 * @return {*} `x` 或者 `whenFalseFn` 的执行结果
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
var unless = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
export default unless;
