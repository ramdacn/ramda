var _concat = require('./internal/_concat');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');


/**
 * 集合并运算，合并两个列表作为一个新的列表（没有重复元素）。
 * “重复”由条件函数的返回值决定。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred 判断两个元素是否相等的条件函数
 * @param {Array} list1 第1个列表
 * @param {Array} list2 第2个列表
 * @return {Array} 两个列表拼接后去重的列表
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});
