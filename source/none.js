import _complement from './internal/_complement.js';
import _curry2 from './internal/_curry2.js';
import all from './all.js';


/**
 * 如果列表中的元素都不满足 predicate，返回 `true`；否则返回 `false`。
 *
 * 若第二个参数自身存在 `none` 方法，则调用自身的 `none` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *      const isOdd = n => n % 2 !== 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */
var none = _curry2(function none(fn, input) {
  return all(_complement(fn), input);
});
export default none;
