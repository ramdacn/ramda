var _curry3 = require('./internal/_curry3');


/**
 * 通过对列表元素的迭代计算，返回单一的累积值。计算过程是遍历数组对象，每次都将累积值和数组中的一项赋给迭代器函数进行计算，
 * 并把结果作为下一次的累积值。
 *
 * 与 `reduce` 相似，只是遍历list的顺序是从右往左。
 *
 * 迭代器函数接收两个值：*(value, acc)*，然而，赋给`reduce`的迭代器函数的参数顺序是：*(acc, value)*.
 *
 * 注意：`R.reduce` 与原生的 `Array.prototype.reduce` 方法不同，它不跳过删除项或者未分配索引项（稀疏数组）
 * 更多关于原生reduce的细节，请参考：
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});
