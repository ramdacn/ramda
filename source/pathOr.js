import _curry3 from './internal/_curry3.js';
import defaultTo from './defaultTo.js';
import path from './path.js';


/**
 * 如果非空对象在给定路径上存在值，则将该值返回；否则返回给定的默认值。
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
var pathOr = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});
export default pathOr;
