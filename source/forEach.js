import _checkForMethod from './internal/_checkForMethod.js';
import _curry2 from './internal/_curry2.js';


/**
 * 遍历 `list`，对 list 中的每个元素执行方法 `fn`。
 *
 * `fn` 接收单个参数： *(value)*。
 *
 * 注意: `R.forEach` 并不会跳过已删除的或者未赋值的索引（sparse arrays），这一点和原生的 `Array.prototype.forEach` 方法不同. 获取更多相关信息, 请查阅: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * 还要注意, 不同于 `Array.prototype.forEach`，Ramda 的 `forEach` 会将原数组返回。在某些库中，该方法也被称为 `each`.
 *
 * 若第二个参数自身存在 `forEach` 方法，则调用自身的 `forEach` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      const printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));
export default forEach;
