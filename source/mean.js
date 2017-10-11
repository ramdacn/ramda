import _curry1 from './internal/_curry1';
import sum from './sum';


/**
 * 返回给定数字列表的平均值。
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = _curry1(function mean(list) {
  return sum(list) / list.length;
});
export default mean;
