import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xtakeWhile from './internal/_xtakeWhile.js';
import slice from './slice.js';


/**
 * 从前往后取出列表元素，直到遇到首个不满足 predicate 的元素为止。取出的元素中不包含首个不满足 predicate 的元素。
 *
 * 若第二个参数自身存在 `takeWhile` 方法，则调用自身的 `takeWhile` 方法
 *
 * 若传入的是 transfomer，则当前函数用作 transducer，对传入的 transformer 进行封装 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      const isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */
var takeWhile = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
  var idx = 0;
  var len = xs.length;
  while (idx < len && fn(xs[idx])) {
    idx += 1;
  }
  return slice(0, idx, xs);
}));
export default takeWhile;
