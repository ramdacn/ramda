import _curry2 from './internal/_curry2.js';
import _dispatchable from './internal/_dispatchable.js';
import _map from './internal/_map.js';
import _reduce from './internal/_reduce.js';
import _xmap from './internal/_xmap.js';
import curryN from './curryN.js';
import keys from './keys.js';


/**
 * 接收一个函数和一个 [functor](https://github.com/fantasyland/fantasy-land#functor), 将该函数应用到 functor 的每个值上，返回一个具有相同形态的 functor。
 *
 * Ramda 为 `Array` 和 `Object` 提供了合适的 `map` 实现，因此 `R.map` 适用于 `[1, 2, 3]` 或 `{x: 1, y: 2, z: 3}`。
 *
 * 若第二个参数自身存在 `map` 方法，则调用自身的 `map` 方法。
 *
 * 若传入的是 transfomer，则当前函数用作 transducer，对传入的 transformer 进行封装 。
 *
 * 函数也是 functors，`map` 会将它们组合起来（相当于 `R.compose`）。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));
export default map;
