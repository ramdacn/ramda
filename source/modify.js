import _curry3 from './internal/_curry3.js';
import modifyPath from './modifyPath.js';


/**
 * 使用给定的函数，修改对象中指定属性的值。
 *
 * 如果对象上没有对应的属性，那么这个函数不会被调用，且对象不会被改变。
 * 所有的非基础类型是通过引用拷贝到新的对象上。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig Idx -> (v -> v) -> {k: v} -> {k: v}
 * @param {String|Number} prop The property to be modified.
 * @param {Function} fn The function to apply to the property.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 *      R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
 *      R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
 */
var modify = _curry3(function modify(prop, fn, object) { return modifyPath([prop], fn, object); });
export default modify;
