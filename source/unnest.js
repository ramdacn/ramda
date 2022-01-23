import _identity from './internal/_identity.js';
import chain from './chain.js';


/**
 * `R.chain(R.identity)` 的简写, 对 [Chain](https://github.com/fantasyland/fantasy-land#chain) 类型的数据消除一层嵌套.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
var unnest = chain(_identity);
export default unnest;
