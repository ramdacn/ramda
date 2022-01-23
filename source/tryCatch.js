import _arity from './internal/_arity.js';
import _concat from './internal/_concat.js';
import _curry2 from './internal/_curry2.js';

/**
 * `tryCatch` 接受两个函数：`tryer` 和 `catcher`，生成的函数执行 `tryer`，若未抛出异常，则返回执行结果。若抛出异常，则执行 `catcher`，返回 `catcher` 的执行结果。注意，为了有效的组合该函数，`tryer` 和 `catcher` 应返回相同类型的值。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send them to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
 *      'caught'
 *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 *      R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
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
