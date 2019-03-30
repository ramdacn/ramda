import _curry3 from './internal/_curry3';
import map from './map';
import sequence from './sequence';


/**
 * 将返回值为 [Applicative](https://github.com/fantasyland/fantasy-land#applicative) 类型的函数映射到一个 [Traversable](https://github.com/fantasyland/fantasy-land#traversable) 上。然后使用 [`sequence`](#sequence) 将结果由 Traversable of Applicative 转换为 Applicative of Traversable。
 *
 * 若第三个参数自身存在 `traverse` 方法，则调用自身的 `traverse` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Maybe.Nothing` if the given divisor is `0`
 *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 */
var traverse = _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ?
    traversable['fantasy-land/traverse'](f, of) :
    sequence(of, map(f, traversable));
});
export default traverse;
