import mergeDeepRight from './mergeDeepRight.js';
import _curry2 from './internal/_curry2.js';

/**
 * 接受两个参数：函数 `f` 和对象 `o1`，返回一个函数 `g`。当 `g` 调用，将 `g` 的参数对象 `o2` 和 `o1` 深度合并后传给 `f`，并返回 `f` 的执行结果。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (({ a, b, c, ..., n }) -> x) -> { a, b, c, ...} -> ({ d, e, f, ..., n } -> x)
 * @param {Function} f
 * @param {Object} props
 * @return {Function}
 * @see R.partial, R.partialRight, R.curry, R.mergeDeepRight
 * @example
 *
 *      const multiply2 = ({ a, b }) => a * b;
 *      const double = R.partialObject(multiply2, { a: 2 });
 *      double({ b: 2 }); //=> 4
 *
 *      const greet = ({ salutation, title, firstName, lastName }) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partialObject(greet, { salutation: 'Hello' });
 *      const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
 *      sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialObject(f, { a, b })({ c, d }) = f({ a, b, c, d })
 */
var partialObject = _curry2((f, o) => (props) => f.call(this, mergeDeepRight(o, props)));
export default partialObject;
