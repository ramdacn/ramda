import _objectIs from './internal/_objectIs.js';


/**
 * 如果两个参数是完全相同，则返回 `true`，否则返回 `false`。如果它们引用相同的内存，也认为是完全相同的。`NaN` 和 `NaN` 是完全相同的；`0` 和 `-0` 不是完全相同的。
 *
 * **注意**：这只是 ES6 `Object.is` 的柯里化版本而已。
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
var identical = function(a, b) {
  switch (arguments.length) {
    case 0:
      return identical;
    case 1:
      return (function() {
        return function unaryIdentical(_b) {
          switch (arguments.length) {
            case 0:
              return unaryIdentical;
            default:
              return _objectIs(a, _b);
          }
        };
      }());
    default:
      return _objectIs(a, b);
  }
};

// In order to support Cross-origin Window objects as arguments to identical,
// it cannot be implemented as _curry2(_objectIs).
// The reason is that _curry2 checks if a function argument is the placeholder __
// by accessing a paritcular property. However, across URL origins access
// to most properties of Window is forbidden.
export default identical;
