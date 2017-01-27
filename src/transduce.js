var _reduce = require('./internal/_reduce');
var _xwrap = require('./internal/_xwrap');
var curryN = require('./curryN');


/**
 * 用迭代函数来初始化一个 transducer ，为集合中每个元素执行迭代函数进行 transform
 * ，将返回值传入加法器，然后把累加传入进行下一轮迭代。
 *
 * 迭代函数接收2个参数： *(acc, value)* ，然后被包装成 transformer 来初始化 transducer 。
 * Transformer 能直接替代迭代函数。并且，打断 `R.transduce` 的迭代过程比 `R.reduced` 更容易。
 *
 * Transducer 接收 transformer ，然后返回 transformer ，可以直接用于函数组合。
 *
 * Transformer 传入2个参数到迭代函数进行迭代，传入0个参数到初始化函数进行初始化，传入1个参数到累加函数作为结果。
 * 迭代用于 reduce 的迭代；
 * 累加函数作为累加器，用来计算返回值，通常使用 `R.identity` ；
 * 初始化函数用来计算初始值，但在 transduce 里面被忽略。
 *
 * 在 transduce 初始化之后，迭代方式和 `R.reduce` 一样。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
 * @param {Function} xf transducer 函数，接收 transformer 返回 transformer
 * @param {Function} fn 迭代函数，累加器和数组当前位置的元素，被包装成 transformer ，如果必要的话将用于 transducer 的初始化
 * @param {*} acc 累加器初始值
 * @param {Array} list 迭代集合
 * @return {*} 累加器的最终结果
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});
