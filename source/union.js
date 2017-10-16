import _concat from './internal/_concat';
import _curry2 from './internal/_curry2';
import compose from './compose';
import uniq from './uniq';


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as 第1个列表
 * @param {Array} bs 第2个列表
 * @return {Array} 两个列表拼接后去重的列表
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
var union = _curry2(compose(uniq, _concat));
export default union;
