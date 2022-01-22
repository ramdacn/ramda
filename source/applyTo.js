import _curry2 from './internal/_curry2.js';

/**
 * 接受一个值，并将一个函数作用于其上。
 *
 * 该函数又被称为 `thrush` combinator.
 *
 * @func
 * @memberOf R
 * @since v0.25.0
 * @category Function
 * @sig a -> (a -> b) -> b
 * @param {*} x The value
 * @param {Function} f The function to apply
 * @return {*} The result of applying `f` to `x`
 * @example
 *
 *      const t42 = R.applyTo(42);
 *      t42(R.identity); //=> 42
 *      t42(R.add(1)); //=> 43
 */
var applyTo = _curry2(function applyTo(x, f) { return f(x); });
export default applyTo;
