import reduceBy from './reduceBy';


/**
 * 通过生成键的函数，将元素为对象的 list 转换为以生成的键为索引的新对象。注意，如果 list 中多个对象元素生成相同的键，以最后一个对象元素作为该键的值。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
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
 *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
var indexBy = reduceBy(function(acc, elem) { return elem; }, null);
export default indexBy;
