import _curry3 from './internal/_curry3.js';
import prop from './prop.js';

/**
 * 如果指定的对象属性满足 predicate，返回 `true`；否则返回 `false`。可以使用 [`R.where`](#where) 进行多个属性的判断。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
  return pred(prop(name, obj));
});
export default propSatisfies;
