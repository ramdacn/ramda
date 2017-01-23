var _clone = require('./internal/_clone');
var _curry3 = require('./internal/_curry3');
var _isTransformer = require('./internal/_isTransformer');
var _reduce = require('./internal/_reduce');
var _stepCat = require('./internal/_stepCat');


/**
 * 根据给定的 transducer 对列表中的元素进行转换，然后使用基于 accumulator 类型的迭代器将转换后的元素依次添加到 accumulator 中。
 *
 * 该 accumulator 可以是以下数据类型：array、string、object 或者 transformer 。
 * 如果 accumulator 类型是数组或者字符串，则迭代元素将会被附加到数组中或者连接到字符串上。如果是对象，迭代元素将会被直接合并，
 * 如果是二元数组，迭代元素则将会根据键值对进行合并。
 *
 * 该 accumulator 也可以是一个 transformer 对象，它提供 transformer 所必须的 step、init、result 方法。
 * step 方法被用作规约函数中的迭代函数。result 方法被用来将最终的 accumulator 转换为相应的返回类型（大部分情况都是 R.identity）。
 * init 方法被用来提供初始的 accumulator。
 *
 * 在 transducer 初始化之后，iteration 和 R.reduce 同步执行。
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
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});
