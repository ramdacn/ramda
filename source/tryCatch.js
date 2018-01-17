import _arity from './internal/_arity';
import _concat from './internal/_concat';
import _curry2 from './internal/_curry2';


/**
 * `tryCatch` 接受两个函数：`tryer` 和 `catcher`，生成的函数执行 `tryer`，若未抛出异常，则返回执行结果。若抛出异常，则执行 `catcher`，返回 `catcher` 的执行结果。注意，为了有效的组合该函数，`tryer` 和 `catcher` 应返回相同类型的值。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer 可能抛出异常的函数
 * @param {Function} catcher 接收异常的函数
 * @return {Function} 能够捕获异常然后执行异常处理函数的函数
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});
export default tryCatch;
