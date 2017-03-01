var _curry2 = require('./internal/_curry2');


/**
 * 将两个列表对应位置的元素作为键值对组合，生成一个新的键值对的列表。生成的列表长度取决于较短的输入列表的长度。
 *
 * 注意，`zip` 等价于 `pipe(zipWith(pair), fromPairs)` 。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys 作为属性名的列表
 * @param {Array} values 作为属性值的列表
 * @return {Object} `list1` 和 `list2` 对应位置的键值对的列表
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});
