import _curry2 from './internal/_curry2';
import _isFunction from './internal/_isFunction';
import and from './and';
import lift from './lift';


/**
 * 该函数调用两个函数，并对两函数返回值进行`与操作`。若第一个函数结果为 false-y 值 (false, null, 0 等)，则返回该结果，否则返回第二个函数的结果。注意，`both` 为短路操作，即如果第一个函数返回 false-y 值，则不会调用第二个函数。
 *
 * 除了函数，`R.both` 还接受任何兼容 fantasy-land 的 applicative functor。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
var both = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});
export default both;
