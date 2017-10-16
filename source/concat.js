import _curry2 from './internal/_curry2';
import _isArray from './internal/_isArray';
import _isFunction from './internal/_isFunction';
import _isString from './internal/_isString';
import toString from './toString';


/**
 * 连接列表或字符串。
 *
 * 注意：不同于 [`Array.prototype.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), `R.concat` 要求两个参数类型相同。 如果将 Array 与非 Array 连接，将抛出错误。
 *
 * 若第一个参数自身存在 `concat` 方法，则调用自身的 `concat`。
 *
 * 也可以用于连接 [符合 fantasy-land 半群](https://github.com/fantasyland/fantasy-land#semigroup) 类型的两个实例。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
var concat = _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
export default concat;
