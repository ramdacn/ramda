import add from './add';
import reduce from './reduce';


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list 数的数组
 * @return {Number} 数组中所有数的和
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = reduce(add, 0);
export default sum;
