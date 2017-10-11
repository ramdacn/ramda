import _clone from './internal/_clone';
import _curry3 from './internal/_curry3';
import _isTransformer from './internal/_isTransformer';
import _reduce from './internal/_reduce';
import _stepCat from './internal/_stepCat';


/**
 * 使用 transducer 对 list 中的元素进行转换，然后使用基于 accumulator 的类型的迭代器函数将转换后的元素依次添加到 accumulator 上。
 *
 * accumulator 的类型可以是：array、string、object 或者 transformer 。如果 accumulator 类型是 array 或 string，则迭代元素将被添加到数组或连接到字符串上；如果是对象，迭代元素将会被直接合并；如果是二元素数组，迭代元素会以键值对形式进行合并。
 *
 * accumulator 也可作为 transformer 对象，提供 transformer 所需要的二元 reducing iterator、step、零元 init 和 一元 result 函数。step 作为 reduce 过程中的迭代函数；result 将最终的 accumulator 转换为需要的返回类型（通常为 R.identity）；init 提供初始 accumulator。
 *
 * 在 transducer 初始化之后，使用 [`R.reduce`](#reduce) 进行迭代操作。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
var into = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});
export default into;
