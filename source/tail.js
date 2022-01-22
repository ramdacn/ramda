import _checkForMethod from './internal/_checkForMethod.js';
import _curry1 from './internal/_curry1.js';
import slice from './slice.js';


/**
 * 删除列表中的首个元素（或者调用对象的 `tail` 方法）。
 *
 * 如果第一个参数自身存在 `slice` 方法，则调用自身的 `slice` 方法。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
var tail = _curry1(_checkForMethod('tail', slice(1, Infinity)));
export default tail;
