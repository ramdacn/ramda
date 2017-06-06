var _curry1 = require('./internal/_curry1');
var _toString = require('./internal/_toString');


/**
 * 返回代表输入元素的字符串。求得的输出结果应该等价于输入的值。许多内建的 `toString` 方法都不满足这一条件。
 *
 * 如果输入值是 `[object Object]` 对象，且自身含有 `toString` 方法（不是 `Object.prototype.toString` 方法），那么直接调用这个方法求返回值。这意味着，通过用户自定义的构造函数可以提供合适的 `toString` 方法。例如：
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });
