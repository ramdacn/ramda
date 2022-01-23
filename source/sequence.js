import _curry2 from './internal/_curry2.js';
import ap from './ap.js';
import map from './map.js';
import prepend from './prepend.js';
import reduceRight from './reduceRight.js';


/**
 * 将一个 [Applicative](https://github.com/fantasyland/fantasy-land#applicative) 的 [Traversable](https://github.com/fantasyland/fantasy-land#traversable) 转换成一个 Traversable 类型的 Applicative。
 *
 * 如果第二个参数自身存在 `sequence` 方法，则调用自身的 `sequence`。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
var sequence = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(
      function(x, acc) { return ap(map(prepend, x), acc); },
      of([]),
      traversable
    );
});
export default sequence;
