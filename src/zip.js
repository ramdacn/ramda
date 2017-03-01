var _curry2 = require('./internal/_curry2');


/**
 * 将两个列表对应位置的元素组合，生成一个新的元素对列表。生成的列表长度取决于较短的输入列表的长度。
 * 注意，`zip` 等价于 `zipWith(function(a, b) { return [a, b] })` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 第1个列表
 * @param {Array} list2 第2个列表
 * @return {Array} `list1` 和 `list2` 对应位置的元素对的列表
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});
