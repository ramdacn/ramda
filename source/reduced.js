import _curry1 from './internal/_curry1.js';
import _reduced from './internal/_reduced.js';

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
 * @see R.reduce, R.reduceWhile, R.reduceBy, R.reduceRight, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */
var reduced = _curry1(_reduced);
export default reduced;
