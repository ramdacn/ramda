import _curry3 from './internal/_curry3';
import path from './path';


/**
 * 如果对象的给定路径上的属性满足 predicate，返回 `ture`；否则返回 `false`。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 */
var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
  return pred(path(propPath, obj));
});
export default pathSatisfies;
