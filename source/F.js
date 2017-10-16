import always from './always';


/**
 * 恒定返回 `false` 的函数。忽略所有的输入参数。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
var F = always(false);
export default F;
