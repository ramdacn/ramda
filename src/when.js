var _curry3 = require('./internal/_curry3');


/**
 * 最后一个输入`x`作为参数传给条件函数做判断，
 * 如果不满足则将`x`作为参数传给`whenTrueFn`返回结果，否则返回`x`。
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred 条件函数
 * @param {Function} whenTrueFn 当`pred`函数返回为 false 时候调用的函数
 * @param {*} x 作为参数传入`pred`用于判断，如果需要作为参数传入`whenTrueFn`
 * @return {*} `x`或者`whenTrueFn`的执行结果
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});
