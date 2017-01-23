var _curry2 = require('./internal/_curry2');


/**
 * 返回列表的副本，并根据 comparator 函数进行排序。这个函数应该同时接受两个值，
 * 如果第一个值比较小，则返回一个负数，如果第一个值较大，则返回一个正数，如果两数相等，返回零。
 * 请注意，返回是一个列表的 **副本** ，并没有修改原始列表。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});
