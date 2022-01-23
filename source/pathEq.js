import _curry3 from './internal/_curry3.js';
import equals from './equals.js';
import path from './path.js';


/**
 * 判断对象的嵌套路径上是否为给定的值，通过 [`R.equals`](#equals) 函数进行相等性判断。常用于列表过滤。
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      const user1 = { address: { zipCode: 90210 } };
 *      const user2 = { address: { zipCode: 55555 } };
 *      const user3 = { name: 'Bob' };
 *      const users = [ user1, user2, user3 ];
 *      const isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
var pathEq = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});
export default pathEq;
