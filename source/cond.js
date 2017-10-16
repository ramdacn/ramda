import _arity from './internal/_arity';
import _curry1 from './internal/_curry1';
import map from './map';
import max from './max';
import reduce from './reduce';


/**
 * 返回一个封装了 `if / else，if / else, ...` 逻辑的函数 `fn`。 `R.cond` 接受列表元素为 [predicate，transformer] 的列表。 `fn` 的所有参数顺次作用于每个 predicate，直到有一个返回 "truthy" 值，此时相应 transformer 对参数处理，并作为 `fn` 的结果返回。 如果没有 predicate 匹配，则 `fn` 返回 undefined。
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @see R.ifElse, R.unless, R.when
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
var cond = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
export default cond;
