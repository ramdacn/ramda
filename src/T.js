var always = require('./always');


/**
 * 始终返回 `true` 的函数。 参数中传递的任何内容都将被忽略。
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
module.exports = always(true);
