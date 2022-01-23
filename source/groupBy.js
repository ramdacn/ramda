import _checkForMethod from './internal/_checkForMethod.js';
import _curry2 from './internal/_curry2.js';
import reduceBy from './reduceBy.js';

/**
 * 将列表根据一定规则拆分成多组子列表，并存储在一个对象中。
 *
 * 对列表中的每个元素调用函数，根据函数返回结果进行分组。函数返回字符串作为相等性判断，返回的字符串作为存储对象的键，具有相同返回字符串的元素聚合为数组，作为该键的值。
 *
 * 若第二个参数自身存在 `groupBy` 方法，则调用自身的 `groupBy` 方法。
 *
 * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> {a: [b]}
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.reduceBy, R.transduce, R.indexBy
 * @example
 *
 *      const byGrade = R.groupBy(function(student) {
 *        const score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      const students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
var groupBy = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  acc.push(item);
  return acc;
}, [])));
export default groupBy;
