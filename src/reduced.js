var _curry1 = require('./internal/_curry1');
var _reduced = require('./internal/_reduced');

/**
 * 返回一个封装的值，该值代表 `reduce` 或 `transduce` 操作的最终结果。
 *
 * 返回值是一个黑盒：不保证其内部结构的稳定性。
 *
 * 注意：这个优化不适用于上面未明确列出的函数。例如，现在还不支持 `reduceRight`。
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
