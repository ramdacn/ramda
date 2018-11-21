import _objectIs from './internal/_objectIs';
import _curry2 from './internal/_curry2';


/**
 * 如果两个参数是完全相同，则返回 `true`，否则返回 `false`。如果它们引用相同的内存，也认为是完全相同的。`NaN` 和 `NaN` 是完全相同的；`0` 和 `-0` 不是完全相同的。
 *
 * Note this is merely a curried version of ES6 `Object.is`.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      const o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
var identical = _curry2(_objectIs);
export default identical;
