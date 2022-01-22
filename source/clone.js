import _clone from './internal/_clone.js';
import _curry1 from './internal/_curry1.js';


/**
 * 深复制。其值可能（嵌套）包含 `Array`、`Object`、`Number`、`String`、`Boolean`、`Date` 类型的数据。`Function` 通过引用复制。
 *
 * 若自身存在 `clone` 方法，则调用自身的 `clone` 方法。
 *
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
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
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
var clone = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});
export default clone;
