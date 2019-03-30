import _curry2 from './internal/_curry2';
import _assertPromise from './internal/_assertPromise';


/**
 * 将 onSuccess 函数应用于一个 resolved Promise 的内部值，并将计算结果放入新的 Promise 中返回。这对于处理函数组合内的 promises 很有用。
 *
 * @func
 * @memberOf R
 * @category Function
 * @sig (a -> b) -> (Promise e a) -> (Promise e b)
 * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
 * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(onSuccess)`
 * @see R.otherwise
 * @example
 *
 *      var makeQuery = (email) => ({ query: { email }});
 *
 *      //getMemberName :: String -> Promise ({firstName, lastName})
 *      var getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *        R.then(R.pick(['firstName', 'lastName']))
 *      );
 */
var then = _curry2(function then(f, p) {
  _assertPromise('then', p);

  return p.then(f);
});
export default then;
