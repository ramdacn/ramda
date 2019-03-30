import _curry3 from './internal/_curry3';


/**
 * 将子 list 插入到 list 指定索引处。注意，该函数是非破坏性的：返回处理后列表的拷贝。<small>函数运行过程中不会破坏任何列表。</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
var insertAll = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(
    Array.prototype.slice.call(list, 0, idx),
    elts,
    Array.prototype.slice.call(list, idx)
  );
});
export default insertAll;
