import filter from './filter';
import juxt from './juxt';
import reject from './reject';


/**
 * 通过 predicate 将列表或 "Filterable" （可过滤的）对象分成两部分，分别为满足 predicate 的元素和不满足 predicate 的元素。元素类型保持不变。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
var partition = juxt([filter, reject]);
export default partition;
