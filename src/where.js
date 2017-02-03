var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * 输入参考标准和待检测对象，如果满足参考标准则返回 true，否则返回 false。
 * 参考标准的每个属性都要求是条件函数。
 * 每个条件函数对检测对象相应的属性值执行，如果都返回 true，则 `where` 返回 true，否则返回 false。
 *
 * `where` 适用于需要条件函数约束的地方，比如用于 `filter` 和 `find` 。
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(__, 10),
 *        y: R.lt(__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});
