import _curry2 from './internal/_curry2.js';
import _has from './internal/_has.js';


/**
 * 接受一个测试规范对象和一个待检测对象，测试规范对象的每个属性值都必须是 predicate 。
 * 每个 predicate 作用于待检测对象对应的属性值，只要有一个 predicate 返回 true，则 `whereAny` 返回 true，否则返回 false 。
 *
 * `whereAny` 非常适合于需要声明式表示约束的函数比如 [`filter`](#filter) and [`find`](#find)。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereAny({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('xxx')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
 *      pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
 */
var whereAny = _curry2(function whereAny(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && spec[prop](testObj[prop])) {
      return true;
    }
  }
  return false;
});
export default whereAny;
