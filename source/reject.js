import _complement from './internal/_complement';
import _curry2 from './internal/_curry2';
import filter from './filter';


/**
 * [`filter`](#filter) 的补操作。返回结果为 [`R.filter`](#filter) 操作结果的补集。
 *
 * 若在列表位置给出 transformer，则用作 transducer。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});
export default reject;
