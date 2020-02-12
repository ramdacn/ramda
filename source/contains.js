import _includes from './internal/_includes';
import _curry2 from './internal/_curry2';


/**
 * 只要列表中有一个元素等于指定值，则返回 `true`；否则返回 `false`。通过 [`R.equals`](#equals) 函数进行相等性判断。
 *
 * 也可以判断字符串中是否包含指定值。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.includes
 * @deprecated since v0.26.0
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 *      R.contains('ba', 'banana'); //=>true
 */
var contains = _curry2(_includes);
export default contains;
