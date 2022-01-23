import _arity from './internal/_arity.js';
import _curry2 from './internal/_curry2.js';
import head from './head.js';
import _reduce from './internal/_reduce.js';
import tail from './tail.js';
import identity from './identity.js';


/**
 * 利用转换函数从左往右执行函数组合。第一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
 *
 * **注意：**pipe 输出的函数不会自动进行柯里化。
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
 * @param {Function} transformer The transforming function
 * @param {Array} functions The functions to pipe
 * @return {Function}
 * @see R.composeWith, R.pipe
 * @example
 *
 *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, g(...args)))
 */
var pipeWith = _curry2(function pipeWith(xf, list) {
  if (list.length <= 0) {
    return identity;
  }

  var headList = head(list);
  var tailList = tail(list);

  return _arity(headList.length, function() {
    return _reduce(
      function(result, f) {
        return xf.call(this, f, result);
      },
      headList.apply(this, arguments),
      tailList
    );
  });
});
export default pipeWith;
