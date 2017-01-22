var _curry1 = require('./internal/_curry1');
var _reduced = require('./internal/_reduced');

/**
 * 返回一个封装的值，这个值是 reduce 操作和 transduce 函数执行后的最终值。
 * 返回的值应该是一个黑盒子：内部结构不能保证是稳定的。
 *
 * 注意：这个优化不能用于上面没有明确列出的函数。例如，现在还不支持 reduceRight 。
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *      R.reduce(
 *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
 *        0,
 *        [1, 2, 3, 4, 5]) // 10
 */

module.exports = _curry1(_reduced);
