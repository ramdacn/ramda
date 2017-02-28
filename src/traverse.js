var _curry3 = require('./internal/_curry3');
var map = require('./map');
var sequence = require('./sequence');


/**
 * 将返回值为 [Applicative](https://github.com/fantasyland/fantasy-land#applicative) 类型的函数映射到一个 [Traversable](https://github.com/fantasyland/fantasy-land#traversable) 上。然后使用 [`sequence`](#sequence) 将结果由 Traversable of Applicative 转换为 Applicative of Traversable。
 *
 * 若第二个参数自身存在 `sequence` 方法，则调用自身的 `sequence` 方法。
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
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return sequence(of, map(f, traversable));
});
