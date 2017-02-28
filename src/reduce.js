var _curry3 = require('./internal/_curry3');
var _reduce = require('./internal/_reduce');


/**
 * 左折叠操作。
 *
 * 遍历列表，相继调用二元迭代函数（参数为累积值和从数组中取出的当前元素），将本次迭代结果作为下次迭代的累积值。返回最终累积值。
 *
 * 可以用`R.reduced` 提前终止遍历操作。
 *
 * `reduce` 的迭代函数接收两个参数 *(acc, value)*，`reduceRight` 的迭代函数的参数顺序为 *(value, acc)*
 *
 * 注意：`R.reduce` 与原生 `Array.prototype.reduce` 方法不同，它不会跳过删除或未分配的索引项（稀疏矩阵）。更多关于原生 reduce 的行为，请参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * 如果第三个参数自身有 `reduce` 方法，则调用自身的 `reduce` 方法。
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
