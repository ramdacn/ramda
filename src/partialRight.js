var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');
var flip = require('./flip');


/**
 * 接收两个参数：一个函数 `f`，还有一个参数列表，返回新函数 `g`。
 * 当函数执行时，`g` 返回的是 `f` 作用于初始参数和后来提供给 `g` 的参数的结果。其中参数调用的顺序是：提供给 `g` 的参数，初始提供的参数。
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
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));
