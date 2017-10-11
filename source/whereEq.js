import _curry2 from './internal/_curry2';
import equals from './equals';
import map from './map';
import where from './where';


/**
 * 接受一个测试规范对象和一个待检测对象，如果测试满足规范，则返回 true，否则返回 false。如果对于每一个测试规范对象的属性值，待检测对象中都有一个对应的相同属性值，则 `where` 返回 true，否则返回 false 。
 *
 * `whereEq` 是 [`where`](#where) 的一种特殊形式。
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
var whereEq = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});
export default whereEq;
