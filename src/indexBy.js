var reduceBy = require('./reduceBy');


/**
 * 根据给定函数生成的键，将一个包含多个对象的列表转换为一个包含多个以该键对应值为索引对象的新对象。
 * 注意如果列表中多个对象根据该键索引的值相同，那么只有最后一个对象会被保留。
 *
 * 若在列表位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);
