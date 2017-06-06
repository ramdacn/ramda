var _clone = require('./internal/_clone');
var _curry1 = require('./internal/_curry1');


/**
 * 深复制。其值可能（嵌套）包含 `Array`、`Object`、`Number`、`String`、`Boolean`、`Date` 类型的数据。`Function` 通过引用复制。
 *
 * 若自身存在 `clone` 方法，则调用自身的 `clone` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});
