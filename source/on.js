import curryN from './internal/_curryN.js';


/**
 * 接收一个二元函数 `f`，一个一元函数 `g` 和两个值。将两个值应用到函数 `g` 上，在把返回的结果应用到函数 `f` 上。
 *
 * 也被称为 P combinator。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig ((a, a) -> b) -> (c -> a) -> c -> c -> b
 * @param {Function} f a binary function
 * @param {Function} g a unary function
 * @param {any} a any value
 * @param {any} b any value
 * @return {any} The result of `f`
 * @example
 *
 *      const eqBy = R.on((a, b) => a === b);
 *      eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
 *
 *      const containsInsensitive = R.on(R.contains, R.toLower);
 *      containsInsensitive('o', 'FOO'); //=> true
 * @symb R.on(f, g, a, b) = f(g(a), g(b))
 */
var on = curryN(4, [], function on(f, g, a, b) {
  return f(g(a), g(b));
});
export default on;
