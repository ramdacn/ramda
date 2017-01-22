var _curry2 = require('./internal/_curry2');
var _indexOf = require('./internal/_indexOf');
var _isArray = require('./internal/_isArray');


/**
 * 返回数组中第一次出现目标元素的索引，如果目标元素不存在于数组中，则返回 `-1`。借助 `R.equals` 来判断元素是否相等。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});
