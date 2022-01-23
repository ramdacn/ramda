import _curry1 from './internal/_curry1.js';
import _isArguments from './internal/_isArguments.js';
import _isArray from './internal/_isArray.js';
import _isObject from './internal/_isObject.js';
import _isString from './internal/_isString.js';
import _isTypedArray from './internal/_isTypedArray.js';


/**
 * 根据传入参数的类型返回其对应的空值。Ramda 定义了各类型的空值如下：Array (`[]`)，Object (`{}`)，String (`''`)，和 Arguments。`empty` 还支持其它定义了 `<Type>.empty` 、`<Type>.prototype.empty` 或 实现了 [FantasyLand Monoid 规范](https://github.com/fantasyland/fantasy-land#monoid) 的类型。
 *
 * 若第一个参数自身存在 `empty` 方法，则调用自身的 `empty` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));               //=> Nothing()
 *      R.empty([1, 2, 3]);              //=> []
 *      R.empty('unicorns');             //=> ''
 *      R.empty({x: 1, y: 2});           //=> {}
 *      R.empty(Uint8Array.from('123')); //=> Uint8Array []
 */
var empty = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function')
      ? x['fantasy-land/empty']()
      : (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function')
        ? x.constructor['fantasy-land/empty']()
        : (x != null && typeof x.empty === 'function')
          ? x.empty()
          : (x != null && x.constructor != null && typeof x.constructor.empty === 'function')
            ? x.constructor.empty()
            : _isArray(x)
              ? []
              : _isString(x)
                ? ''
                : _isObject(x)
                  ? {}
                  : _isArguments(x)
                    ? (function() { return arguments; }())
                    : _isTypedArray(x)
                      ? x.constructor.from('')
                      : void 0  // else
  );
});
export default empty;
