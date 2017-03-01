var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * 返回对象所有自身可枚举的属性的值。注意：不同 JS 运行环境输出数组的顺序可能不一致。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj 需要展开的对象
 * @return {Array} 对象可枚举属性的值的数组
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});
