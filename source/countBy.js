import reduceBy from './reduceBy';


/**
 * 根据给定函数提供的统计规则对列表中的元素进行分类计数。返回一个对象，其键值对为：`fn` 根据列表元素生成键，列表中通过 `fn` 映射为对应键的元素的个数作为值。注意，由于 JavaScript 对象的实现方式，所有键都被强制转换为字符串。
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
var countBy = reduceBy(function(acc, elem) { return acc + 1; }, 0);
export default countBy;
