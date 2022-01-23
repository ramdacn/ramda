import _curry1 from './internal/_curry1.js';
import _makeFlat from './internal/_makeFlat.js';


/**
 * 获取 list 的所有元素（包含所有子数组中的元素），然后由这些元素组成一个新的数组。深度优先。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
var flatten = _curry1(_makeFlat(true));
export default flatten;
