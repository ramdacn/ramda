var _concat = require('./internal/_concat');
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * 通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数。
 *
 * 例如，`addIndex` 可以将 Ramda 中简单的 `map` 转换为类似于 `Array.prototype.map` 的函数。注意，`addIndex` 只适用于迭代回调函数是首个参数、列表是最后一个参数的函数。（如果列表参数没有用到，后一个条件可以忽略）。
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
