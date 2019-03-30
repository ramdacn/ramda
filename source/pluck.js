import _curry2 from './internal/_curry2';
import map from './map';
import prop from './prop';


/**
 * 从列表内的每个对象元素中取出特定名称的属性，组成一个新的列表。
 *
 * `pluck` 可以作用于任何 [functor](https://github.com/fantasyland/fantasy-land#functor) ，包括 `Array`，因为它等价于 `R.map(R.prop(k), f)`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
var pluck = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});
export default pluck;