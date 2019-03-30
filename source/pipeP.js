import _arity from './internal/_arity';
import _pipeP from './internal/_pipeP';
import reduce from './reduce';
import tail from './tail';


/**
 * 从左往右执行返回 Promise 的函数的组合。最左边的函数可以是任意元函数（参数个数不限）；其余函数必须是一元函数。
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @deprecated since v0.26.0
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      const followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
export default function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(
    arguments[0].length,
    reduce(_pipeP, arguments[0], tail(arguments))
  );
}
