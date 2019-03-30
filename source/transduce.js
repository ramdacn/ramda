import _reduce from './internal/_reduce';
import _xwrap from './internal/_xwrap';
import curryN from './curryN';


/**
 * 用 iterator function 初始化 transducer ，生成一个 transformed iterator function。然后顺次遍历列表，对每个列表元素先进行转换，然后与累积值进行归约，返回值作为下一轮迭代的累积值。最终返回与初始累积值类型相同的一个累积值。
 *
 * iterator function 接收两个参数： *(acc, value)* ，iterator function 会被封装为 transformer 来初始化 transducer 。可以直接传递 transformer 来代替 iterator function。这两种情况下，可以使用 [`R.reduced`](#reduced) 提前终止迭代操作。
 *
 * transducer 函数接受一个 transformer ，返回一个新的 transformer ，并且 transducer 函数可以直接组合。
 *
 * transformer 是一个对象，其中包含二元 reducing iterator、step、零元 init 和 一元 result 函数。step 作为 reduce 过程中的迭代函数；result 将最终的累积值转换为需要的返回类型（通常为 [`R.identity`](#identity) ）；init 提供初始累积值，但通常会被 `transduce` 函数忽略。
 *
 * 在 transducer 初始化之后，使用 [`R.reduce`](#reduce) 进行迭代操作。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      const isOdd = (x) => x % 2 === 1;
 *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
var transduce = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});
export default transduce;
