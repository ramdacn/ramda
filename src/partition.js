var filter = require('./filter');
var juxt = require('./juxt');
var reject = require('./reject');


/**
 * 接收一个 predicate，和一个列表或者其他 "filterable" （可过滤的）的对象，返回一对值。
 * 这一对值中的元素分别是满足和不满足 predicate 的结果，结果类型与列表或者其他可过滤的对象中元素类型一致。
 * 意译：通过 predicate 将列表或 "filterable" （可过滤的）对象分成两部分，分别为满足 predicate 和不满足 predicate 的元素。元素类型保持不变。
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
module.exports = juxt([filter, reject]);
