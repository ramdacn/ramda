var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');
var _filter = require('./internal/_filter');


/**
 * 接受一个 predicate `pred` 、列表 `xs` 和 `ys` ，返回列表 `xs'`。依次取出 `xs` 中的元素，若通过 `pred` 判断等于 `ys` 中的一个或多个元素，则放入 `xs'` 。
 *
 * `pred` 必须为二元函数，两个参数分别来自于对应两个列表中的元素。
 *
 * `xs`、`ys` 和 `xs'` 被当作集合处理，所以从语义上讲，元素的顺序并不重要，但由于 `xs'` 是列表（列表中元素有排列顺序），所以本实现保证 `xs'` 中元素的顺序与 `xs` 中的一致。重复的元素也不会被移除，因此，若 `xs` 中含重复元素，`xs'` 中也会包含元素。
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function(x) { return _containsWith(pred, x, ys); }, xs);
});
