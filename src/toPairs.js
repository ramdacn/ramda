var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');


/**
 * 将一个对象的属性转换成键、值二元组类型的数组，只处理对象自身的属性。注意：不同 JS 运行环境输出数组的顺序可能不一致。
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj 需要转换的对象
 * @return {Array} 对所有属性转换后的键值对数组
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});
