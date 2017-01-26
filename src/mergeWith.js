var _curry3 = require('./internal/_curry3');
var mergeWithKey = require('./mergeWithKey');


/**
 * 用所提供的两个对象的自属性去创建一个新对象。
 * 如果两个对象中都存在同一个 key，所提供的函数会被应用到该 key 在每一个对象中所对应的值上，
 * 结果就被用作返回的对象中该 key 所对应的值。
 * 如果作用结果的值是 `undefined`，那么这个 key 将会在返回对象中被排除。
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
