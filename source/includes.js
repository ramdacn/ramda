import _includes from './internal/_includes.js';
import _curry2 from './internal/_curry2.js';

/**
 * 只要列表中有一个元素等于指定值，则返回 `true`；否则返回 `false`。通过 `R.equals` 函数进行相等性判断。
 *
 * 也可以判断字符串中是否包含指定值。
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */
var includes = _curry2(_includes);
export default includes;
