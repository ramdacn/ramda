var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var compose = require('./compose');
var uniq = require('./uniq');


/**
 * 集合并运算，合并两个列表作为一个新的列表（没有重复元素）。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as 第1个列表
 * @param {Array} bs 第2个列表
 * @return {Array} 两个列表拼接后去重的列表
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));
