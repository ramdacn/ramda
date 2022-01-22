import _curry2 from './internal/_curry2.js';
import equals from './equals.js';
import takeLast from './takeLast.js';

/**
 * 检查列表是否以指定的子列表结尾。
 *
 * 同样的，检查字符串是否以指定的子字符串结尾。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @see R.startsWith
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
var endsWith = _curry2(function(suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});
export default endsWith;
