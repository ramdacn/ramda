import _curry2 from './internal/_curry2';
import _dispatchable from './internal/_dispatchable';
import _xdropWhile from './internal/_xdropWhile';
import slice from './slice';


/**
 * 对 list 从前向后删除满足 `predicate` 的头部元素，直到遇到第一个 `falsy` 值。
 *
 * `predicate` 需要作为第一个参数传入。
 *
 * 若第二个参数自身存在 `dropWhile` 方法，则调用自身的 `dropWhile` 方法。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      const lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */
var dropWhile = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && pred(xs[idx])) {
    idx += 1;
  }
  return slice(idx, Infinity, xs);
}));
export default dropWhile;
