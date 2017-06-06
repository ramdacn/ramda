var _curry3 = require('./internal/_curry3');


/**
 * `o` 是一个柯里化组合函数，返回一元函数。
 *
 * 类似于 [`compose`](＃compose)，`o` 从右到左执行函数组合。但与 [`compose`](＃compose) 不同的是，传递给 `o` 的最右边的函数为一元函数。 * @func
 *
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + lastName
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
module.exports = _curry3(function o(f, g, x) {
  return f(g(x));
});
