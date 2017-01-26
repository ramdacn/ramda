var _curry3 = require('./internal/_curry3');


/**
 * 在 `list` 中移除子列表，这个子列表是从 `start` 开始，包含 `count` 个元素。
 * _注意这个操作不改变原有列表_：它返回改变的列表的拷贝。
 * <small>在使用此功能时，不会有list被改变。</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});
