import _curry2 from './internal/_curry2';
import concat from './concat';
import difference from './difference';


/**
 * 求对称差集。所有不属于两列表交集元素的集合，其元素在且仅在给定列表中的一个里面出现。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 第1个列表
 * @param {Array} list2 第2个列表
 * @return {Array} 元素仅在list1或list2中出现的列表
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});
export default symmetricDifference;
