import _arity from './internal/_arity';
import _pipe from './internal/_pipe';
import reduce from './reduce';
import tail from './tail';


/**
 * 从左往右执行函数组合。最左边的函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
 *
 * 在一些库中，此函数也被称为 `sequence`。
 *
 * ** 注意：** `pipe` 函数的结果不是自动柯里化的
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      const f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
export default function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(
    arguments[0].length,
    reduce(_pipe, arguments[0], tail(arguments))
  );
}
