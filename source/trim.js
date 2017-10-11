import _curry1 from './internal/_curry1';


var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
         '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
         '\u2029\uFEFF';
var zeroWidth = '\u200b';
var hasProtoTrim = (typeof String.prototype.trim === 'function');
/**
 * 删除字符串首、尾两端的空白字符。
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str 待修剪的字符串
 * @return {String} 修剪后的`str`
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
var _trim = !hasProtoTrim || (ws.trim() || !zeroWidth.trim()) ?
    function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    } :
    function trim(str) {
      return str.trim();
    };
var trim = _curry1(_trim);
export default trim;
