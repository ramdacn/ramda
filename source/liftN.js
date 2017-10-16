import _curry2 from './internal/_curry2';
import _reduce from './internal/_reduce';
import ap from './ap';
import curryN from './curryN';
import map from './map';


/**
 * 将一个函数提升为指定元数的函数，使之能映射到多个列表、函数或其他符合 [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply) 规范的对象上。
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
var liftN = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
export default liftN;
