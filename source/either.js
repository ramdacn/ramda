import _curry2 from './internal/_curry2.js';
import _isFunction from './internal/_isFunction.js';
import lift from './lift.js';
import or from './or.js';


/**
 * 返回由 `||` 运算符连接的两个函数的包装函数。如果两个函数中任一函数的执行结果为 `truth-y`，则返回其执行结果。
 * 注意，这个是短路表达式，意味着如果第一个函数返回 `truth-y` 值的话，第二个函数将不会执行。
 *
 * 除了函数之外， `R.either` 也接受任何符合 `fantasy-land` 标准的 `applicative functor` 。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.both, R.or
 * @example
 *
 *      const gt10 = x => x > 10;
 *      const even = x => x % 2 === 0;
 *      const f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *
 *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 */
var either = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});
export default either;
