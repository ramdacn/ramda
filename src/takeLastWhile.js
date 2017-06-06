var _curry2 = require('./internal/_curry2');


/**
 * 从后往前取出列表元素，直到遇到首个不满足 predicate 的元素为止。取出的元素中不包含首个不满足 predicate 的元素。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn 每次迭代调用的函数
 * @param {Array} list 用于迭代的列表
 * @return {Array} 一个新的列表
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});
