import _curry3 from './internal/_curry3';


/**
 * `mapAccumRight` 的行为类似于 map 和 reduce 的组合；它将迭代函数作用于列表中的每个元素，从右往左传递经迭代函数计算的累积值，并将最后的累积值和由所有中间的累积值组成的列表一起返回。
 *
 * 和 [`mapAccum`](#mapAccum) 类似，除了列表遍历顺序是从右往左的。
 *
 * 迭代函数接收两个参数，*acc* 和 *value* ，返回一个元组 *[acc, value]*。
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [b + a, b + a];
 *
 *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   f(f(f(a, d)[0], c)[0], b)[0],
 *   [
 *     f(a, d)[1],
 *     f(f(a, d)[0], c)[1],
 *     f(f(f(a, d)[0], c)[0], b)[1]
 *   ]
 * ]
 */
var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});
export default mapAccumRight;
