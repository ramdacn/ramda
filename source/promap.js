import _curry3 from './internal/_curry3.js';
import _dispatchable from './internal/_dispatchable.js';
import _promap from './internal/_promap.js';
import _xpromap from './internal/_xpromap.js';


/**
 *
 * 接收两个函数分别在第三个函数执行前和执行后执行，
 * 例如 `promap(f, g, h)(x) === g(h(f(x)))` 。
 *
 * 如果第三个参数有 `promap` 方法， 则执行，
 * 根据 [FantasyLand Profunctor spec](https://github.com/fantasyland/fantasy-land#profunctor)。
 * 
 * 若在 profunctor 位置中给出 transfomer，则用作 transducer 。
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (a -> b) -> (c -> d) -> (b -> c) -> (a -> d)
 * @sig Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d
 * @param {Function} f The preprocessor function, a -> b
 * @param {Function} g The postprocessor function, c -> d
 * @param {Profunctor} profunctor The profunctor instance to be promapped, e.g. b -> c
 * @return {Profunctor} The new profunctor instance, e.g. a -> d
 * @see R.transduce
 * @example
 *
 *      const decodeChar = R.promap(s => s.charCodeAt(), String.fromCharCode, R.add(-8))
 *      const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar))
 *      decodeString("ziuli") //=> "ramda"
 *
 * @symb R.promap(f, g, h) = x => g(h(f(x)))
 * @symb R.promap(f, g, profunctor) = profunctor.promap(f, g)
 */
var promap = _curry3(_dispatchable(['fantasy-land/promap', 'promap'], _xpromap, _promap));

export default promap;
