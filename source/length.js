import _curry1 from './internal/_curry1';
import _isNumber from './internal/_isNumber';


/**
 * 通过 `list.length`，返回数组的大小（数组中元素的数量）。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
var length = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
export default length;
