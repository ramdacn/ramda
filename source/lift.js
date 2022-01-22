import _curry1 from './internal/_curry1.js';
import liftN from './liftN.js';


/**
 * 提升一个多元函数，使之能映射到列表、函数或其他符合 [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply) 规范的对象上。
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 */
var lift = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});
export default lift;
