import _curry2 from './internal/_curry2';
import _assertPromise from './internal/_assertPromise';


/**
 * 将 onFailure 函数应用于一个失败 Promise 的内部值，并将计算结果放入新的 Promise 中返回。这对于处理函数组合内的 rejected promises 很有用。
 *
 * 相当于 `Promise` 的 `catch`。
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (e -> b) -> (Promise e a) -> (Promise e b)
 * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
 * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(null, onFailure)`
 * @see R.then
 * @example
 *
 *      var failedFetch = (id) => Promise.reject('bad ID');
 *      var useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })
 *
 *      //recoverFromFailure :: String -> Promise ({firstName, lastName})
 *      var recoverFromFailure = R.pipe(
 *        failedFetch,
 *        R.otherwise(useDefault),
 *        R.then(R.pick(['firstName', 'lastName'])),
 *      );
 *      recoverFromFailure(12345).then(console.log)
 */
var otherwise = _curry2(function otherwise(f, p) {
  _assertPromise('otherwise', p);

  return p.then(null, f);
});
export default otherwise;
