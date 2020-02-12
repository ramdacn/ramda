import _curry1 from './internal/_curry1';


/**
 * 返回一个返回恒定值的函数。注意，对于非原始值，返回的值是对原始值的引用。
 *
 * 此函数在其他语言或库中也被称作：`const`、`constant`、或 `K` (K combinator 中)
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = _curry1(function always(val) {
  return function() {
    return val;
  };
});
export default always;
