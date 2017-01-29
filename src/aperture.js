var _aperture = require('./internal/_aperture');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xaperture = require('./internal/_xaperture');


/**
 * 返回一个新列表，由相邻元素组成的 n元组组成。如果 `n` 大于列表的长度，则返回空列表。
 *
 * 若在列表位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));
