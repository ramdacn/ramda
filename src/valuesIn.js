var _curry1 = require('./internal/_curry1');


/**
 * 输入一个对象，返回所有的属性值，包括原型链上的属性。
 *
 * 注意：在不同的JS运行环境输出数组的顺序可能不一致。
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj 需要展开的对象
 * @return {Array} 对象可枚举属性和原型链上属性的值的数组
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});
