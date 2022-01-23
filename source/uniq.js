import identity from './identity.js';
import uniqBy from './uniqBy.js';


/**
 * 列表去重操作。返回无重复元素的列表。通过 [`R.equals`](#equals) 函数进行相等性判断。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
var uniq = uniqBy(identity);
export default uniq;
