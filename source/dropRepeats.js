import _curry1 from './internal/_curry1.js';
import _dispatchable from './internal/_dispatchable.js';
import _xdropRepeatsWith from './internal/_xdropRepeatsWith.js';
import dropRepeatsWith from './dropRepeatsWith.js';
import equals from './equals.js';


/**
 * 返回一个没有连续重复元素的 list。通过 [`R.equals`](#equls) 函数进行相等性判断。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
var dropRepeats = _curry1(
  _dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals))
);
export default dropRepeats;
