import _curry2 from './internal/_curry2.js';
import curryN from './curryN.js';


/**
 * 接受一个函数 `fn` 和一个 transformer 函数的列表，返回一个柯里化的新函数。当被调用时，新函数将每个参数转发给对应位置的 transformer 函数，然后将每个 transformer 函数的计算结果作为参数传递给 `fn`，`fn` 的计算结果即新函数的返回值。
 *
 * 如果新函数传传入参数的数量比 transformer 函数的数量多，多出的参数会作为附加参数直接传给 `fn` 。如果不需要处理多出的那部分参数，除了忽略之外，也可以用 identity 函数来作为 transformer ，以保证新函数的参数数量是确定的。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
var useWith = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
export default useWith;
