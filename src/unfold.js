var _curry2 = require('./internal/_curry2');


/**
 * 通过一个种子值（ seed ）创建一个列表。`unfold` 接受一个迭代函数：该函数或者返回 false 停止迭代，或者返回一个长度为 2 的数组：数组首个元素添加到结果列表，第二个元素作为种子值传给下一轮迭代使用。
 *
 * 迭代函数接受单个参数： *(seed)*。
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn 迭代函数。接收一个参数`seed`，返回 false 退出迭代或者返回一个二元数组。
 *        二元数组第1个元素被添加到结果列表中，
 *        二元数组第2个元素被作为参数传递给下一次调用`fn`。
 * @param {*} seed 种子值(seed)
 * @return {Array} 结果列表
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});
