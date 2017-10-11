import _curry1 from './internal/_curry1';
import _of from './internal/_of';


/**
 * 将给定值作为元素，封装成单元素数组。
 *
 * 注意，`R.of` 与 ES6 的 `of` 不同；详见 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of 。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
var of = _curry1(_of);
export default of;
