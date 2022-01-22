import _aperture from './internal/_aperture.js';
import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xaperture from './internal/_xaperture.js';


/**
 * 返回一个新列表，列表中的元素为由原列表相邻元素组成的 n 元组。如果 `n` 大于列表的长度，则返回空列表。
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
var aperture = _curry2(_dispatchable([], _xaperture, _aperture));
export default aperture;
