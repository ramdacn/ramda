import _curry3 from './internal/_curry3.js';
import assocPath from './assocPath.js';

/**
 * 浅复制对象，然后设置或覆盖对象的指定属性。
 *
 * 注意，该函数也会将 prototype 属性复制到新的对象中。所有 `non-primitive` 属性都通过引用复制。
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> a -> {k: v} -> {k: v}
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
var assoc = _curry3(function assoc(prop, val, obj) { return assocPath([prop], val, obj); });
export default assoc;
