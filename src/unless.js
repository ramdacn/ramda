var _curry3 = require('./internal/_curry3');


/**
 * 判断输入值是否满足 predicate，若不符合，则将输入值传给 `whenFalseFn` 处理，并将处理结果作为返回；若符合，则将输入值原样返回。
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
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});
