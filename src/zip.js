var _curry2 = require('./internal/_curry2');


/**
 * 两个集合对应位置元素组合，生成一个新的元素对的集合。
 * 生成的集合长度取较短的输入集合的长度。
 * 注意，`zip`等价于`zipWith(function(a, b) { return [a, b] })`。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 第1个的集合
 * @param {Array} list2 第2个的集合
 * @return {Array} `list1` 和 `list2` 对应位置的元素对的集合
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
