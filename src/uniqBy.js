var _Set = require('./internal/_Set');
var _curry2 = require('./internal/_curry2');


/**
 * 返回无重复元素的列表。元素通过给定的函数的返回值以及 `R.equals` 进行相同性判断。如果给定的函数返回值相同，保留第一个元素。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn 处理元素然后返回一个用于比较的值
 * @param {Array} list 待处理的列表
 * @return {Array} 无重复元素的列表
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});
