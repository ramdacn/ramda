import _curry2 from './internal/_curry2.js';
import _map from './internal/_map.js';
import curryN from './curryN.js';
import max from './max.js';
import pluck from './pluck.js';
import reduce from './reduce.js';


/**
 * 接受一个 converging 函数和一个分支函数列表，返回一个新函数。新函数的元数（参数个数）等于最长分支函数的元数。当被调用时，新函数接受参数，并将这些参数转发给每个分支函数；然后将每个分支函数的计算结果作为参数传递给 converging 函数，converging 函数的计算结果即新函数的返回值。
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      const average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
var converge = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
export default converge;
