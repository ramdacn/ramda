import always from './always';


/**
 * 恒定返回 `true` 的函数。忽略所有的输入参数。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
var T = always(true);
export default T;
