var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var flip = require('./flip');
var reject = require('./reject');


/**
 * 求第二个列表中，未包含在第一个列表中的任一元素的集合。通过 ` R.equals` 函数进行相等性判断
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
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
