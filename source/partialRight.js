import _concat from './internal/_concat.js';
import _createPartialApplicator from './internal/_createPartialApplicator.js';
import flip from './flip.js';


/**
 * 部分应用。
 *
 * 接收两个参数：函数 `f` 和 参数列表，返回函数 `g`。当调用 `g` 时，将 `g` 的参数和初始参数顺序传给 `f`，并返回 `f` 的执行结果。
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
var partialRight = _createPartialApplicator(flip(_concat));
export default partialRight;
