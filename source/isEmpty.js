import _curry1 from './internal/_curry1.js';
import empty from './empty.js';
import equals from './equals.js';


/**
 * 检测给定值是否为其所属类型的空值，若是则返回 `true` ；否则返回 `false` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);           //=> false
 *      R.isEmpty([]);                  //=> true
 *      R.isEmpty('');                  //=> true
 *      R.isEmpty(null);                //=> false
 *      R.isEmpty({});                  //=> true
 *      R.isEmpty({length: 0});         //=> false
 *      R.isEmpty(Uint8Array.from('')); //=> true
 */
var isEmpty = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});
export default isEmpty;
