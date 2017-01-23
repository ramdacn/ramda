var _curry3 = require('./internal/_curry3');
var _reduce = require('./internal/_reduce');


/**
 * 通过对列表元素的迭代计算，返回单一的累积值。计算过程是遍历数组对象，每次都将累积值和数组中的一项赋给迭代器函数进行计算，
 * 并把结果作为下一次的累积值。
 *
 * 迭代器函数接收两个值：*(acc, value)*。
 * `R.reduced` 可以用来缩短迭代。
 *
 * `reduceRight` 迭代器函数的参数顺序是 *(value, acc)*。
 *
 * 注意: `R.reduce` 与原生的 `Array.prototype.reduce` 方法不同，它不跳过删除项或者未分配索引项（稀疏数组）
 * 更多关于原生reduce的细节，请参考：
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * 如果第三个参数有 `reduce` 方法，则调用其本身的 reduce 方法。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);
