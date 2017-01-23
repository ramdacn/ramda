var _curry3 = require('./internal/_curry3');


/**
 * 生成一个新的数组，该数组的值，是对两个输入数组中下标相同的元素调用函数所得。新数组的长度与两个输入数组中长度较短的那个相同。
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn 用来组合两个元素使之成为一个值的函数。
 * @param {Array} list1 第一个被操作的数组。
 * @param {Array} list2 第二个被操作的数组。
 * @return {Array} list1 和 list2 中的下标相同的元素为参数，使用 fn 进行计算所得的新数组。
 *
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
