import lift from './lift';
import not from './not';


/**
 * 对函数的返回值取反。接受一个函数 `f`，返回一个新函数 `g`：在输入参数相同的情况下，若 `f` 返回 'true-y' ，则 `g` 返回 `false-y` ，反之亦然。
 *
 * `R.complement` 可用于任何 functor。
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
var complement = lift(not);
export default complement;
