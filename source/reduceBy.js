import _clone from './internal/_clone.js';
import _curryN from './internal/_curryN.js';
import _dispatchable from './internal/_dispatchable.js';
import _has from './internal/_has.js';
import _reduce from './internal/_reduce.js';
import _reduced from './internal/_reduced.js';
import _xreduceBy from './internal/_xreduceBy.js';


/**
 * 首先对列表中的每个元素调用函数 `keyFn` ，根据 `keyFn` 返回的字符串对列表元素进行分组。然后调用 reducer 函数 `valueFn`，对组内的元素进行折叠操作。
 *
 * 该函数相当于更通用的 [`groupBy`](#groupBy) 函数。
 *
 * 若传入的是 transfomer，则当前函数用作 transducer，对传入的 transformer 进行封装。
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce, R.reduced
 * @example
 *
 *      const groupNames = (acc, {name}) => acc.concat(name)
 *      const toGrade = ({score}) =>
 *        score < 65 ? 'F' :
 *        score < 70 ? 'D' :
 *        score < 80 ? 'C' :
 *        score < 90 ? 'B' : 'A'
 *
 *      var students = [
 *        {name: 'Abby', score: 83},
 *        {name: 'Bart', score: 62},
 *        {name: 'Curt', score: 88},
 *        {name: 'Dora', score: 92},
 *      ]
 *
 *      reduceBy(groupNames, [], toGrade, students)
 *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 */
var reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);

      if (value && value['@@transducer/reduced']) {
        return _reduced(acc);
      }

      acc[key] = value;
      return acc;
    }, {}, list);
  }));
export default reduceBy;
