import _curry1 from './internal/_curry1.js';
import curryN from './curryN.js';
import max from './max.js';
import pluck from './pluck.js';
import reduce from './reduce.js';


/**
 * 传入包含多个 predicate 的列表，返回一个 predicate：如果给定的参数满足列表中的所有 predicate ，则返回 `true`。
 *
 * 该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定。
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      const isQueen = R.propEq('rank', 'Q');
 *      const isSpade = R.propEq('suit', '♠︎');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
var allPass = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
export default allPass;
