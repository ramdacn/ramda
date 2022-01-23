import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _xdrop from './internal/_xdrop.js';
import slice from './slice.js';


/**
 * 删除给定 list，string 或者 transducer/transformer（或者具有 drop 方法的对象）的前 `n` 个元素。
 *
 * 若第二个参数自身存在 `drop` 方法，则调用自身的 `drop` 方法。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
var drop = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));
export default drop;
