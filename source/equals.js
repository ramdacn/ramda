import _curry2 from './internal/_curry2.js';
import _equals from './internal/_equals.js';


/**
 * 如果传入的参数相等，返回 `true`；否则返回 `false`。可以处理几乎所有 JavaScript 支持的数据结构。
 *
 * 若两个参数自身存在 `equals` 方法，则对称地调用自身的 `equals` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});
export default equals;
