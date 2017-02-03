var _curry3 = require('./internal/_curry3');


/**
 * 两个列表对应位置元素通过一个函数处理，生成一个新的元素的列表。
 * 生成的列表长度取较短的输入列表的长度。
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn 把两个元素合并成一个值的函数
 * @param {Array} list1 第1个列表
 * @param {Array} list2 第2个列表
 * @return {Array} `list1` 和 `list2` 对应位置的元素对通过`fn`处理后的列表
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});
