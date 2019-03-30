import _objectAssign from './internal/_objectAssign';
import _curry2 from './internal/_curry2';


/**
 * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在，使用前一个对象对应的属性值。
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const resetToDefault = R.mergeLeft({x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeLeft(a, b) = {...b, ...a}
 */
var mergeLeft = _curry2(function mergeLeft(l, r) {
  return _objectAssign({}, r, l);
});
export default mergeLeft;
