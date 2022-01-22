import _curry3 from './internal/_curry3.js';
import prop from './prop.js';
import is from './is.js';


/**
 * 判断指定对象的属性是否为给定的数据类型，是则返回 `true` ；否则返回 `false` 。
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
var propIs = _curry3(function propIs(type, name, obj) {
  return is(type, prop(name, obj));
});
export default propIs;
