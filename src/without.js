var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var flip = require('./flip');
var reject = require('./reject');


/**
 * 返回一个列表，其元素都不在第1个输入列表中。
 * 比较函数是 `R.equals` 。
 *
 * 如果输入是 transformer ，那么按照 transducer 的方式执行。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 需要从 `list2` 中移除的值
 * @param {Array} list2 待移除的列表
 * @return {Array} 没有 `list1` 中元素的列表
 * @see R.transduce
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});
