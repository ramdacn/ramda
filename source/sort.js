import _curry2 from './internal/_curry2.js';


/**
 * 使用比较函数对列表进行排序。比较函数每次接受两个参数，如果第一个值较小，则返回负数；如果第一个值较大，则返回正数；如果两值相等，返回零。注意，返回的是列表的 ** 拷贝 ** ，不会修改原列表。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @see R.ascend, R.descend
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
var sort = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
export default sort;
