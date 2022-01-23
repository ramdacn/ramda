//  Ramda v0.28.0
//  https://github.com/ramda/ramda
//  (c) 2013-2022 Scott Sauyet, Michael Hurley, and David Chambers
//  Ramda may be freely distributed under the MIT license.

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.R = {}));
}(this, (function (exports) { 'use strict';

  /**
   * 恒定返回 `false` 的函数。忽略所有的输入参数。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.T
   * @example
   *
   *      R.F(); //=> false
   */
  var F = function F() {
    return false;
  };

  /**
   * 恒定返回 `true` 的函数。忽略所有的输入参数。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig * -> Boolean
   * @param {*}
   * @return {Boolean}
   * @see R.F
   * @example
   *
   *      R.T(); //=> true
   */
  var T = function T() {
    return true;
  };

  /**
   * 柯里化函数的参数占位符。允许部分应用于任何位置的参数。
   *
   * 假设 `g` 代表柯里化的三元函数，`_` 代表 `R.__`，则下面几种写法是等价的：
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2, _)(1, 3)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @name __
   * @constant
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @example
   *
   *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
   *      greet('Alice'); //=> 'Hello, Alice!'
   */
  var __ = {
    '@@functional/placeholder': true
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _isPlaceholder(a) {
    return a != null && _typeof(a) === 'object' && a['@@functional/placeholder'] === true;
  }

  /**
   * Optimized internal one-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry1(fn) {
    return function f1(a) {
      if (arguments.length === 0 || _isPlaceholder(a)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  /**
   * Optimized internal two-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry2(fn) {
    return function f2(a, b) {
      switch (arguments.length) {
        case 0:
          return f2;

        case 1:
          return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
            return fn(a, _b);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b);
          }) : fn(a, b);
      }
    };
  }

  /**
   * 两数相加。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   * @see R.subtract
   * @example
   *
   *      R.add(2, 3);       //=>  5
   *      R.add(7)(10);      //=> 17
   */

  var add = _curry2(function add(a, b) {
    return Number(a) + Number(b);
  });

  /**
   * Private `concat` function to merge two array-like objects.
   *
   * @private
   * @param {Array|Arguments} [set1=[]] An array-like object.
   * @param {Array|Arguments} [set2=[]] An array-like object.
   * @return {Array} A new, merged array.
   * @example
   *
   *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   */
  function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;

    while (idx < len1) {
      result[result.length] = set1[idx];
      idx += 1;
    }

    idx = 0;

    while (idx < len2) {
      result[result.length] = set2[idx];
      idx += 1;
    }

    return result;
  }

  function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
      case 0:
        return function () {
          return fn.apply(this, arguments);
        };

      case 1:
        return function (a0) {
          return fn.apply(this, arguments);
        };

      case 2:
        return function (a0, a1) {
          return fn.apply(this, arguments);
        };

      case 3:
        return function (a0, a1, a2) {
          return fn.apply(this, arguments);
        };

      case 4:
        return function (a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };

      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };

      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };

      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };

      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };

      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };

      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };

      default:
        throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
  }

  /**
   * Internal curryN function.
   *
   * @private
   * @category Function
   * @param {Number} length The arity of the curried function.
   * @param {Array} received An array of arguments received thus far.
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curryN(length, received, fn) {
    return function () {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;

      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;

        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }

        combined[combinedIdx] = result;

        if (!_isPlaceholder(result)) {
          left -= 1;
        }

        combinedIdx += 1;
      }

      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  /**
   * 对函数进行柯里化，并限制柯里化函数的元数。柯里化函数有两个很好的特性：
   *
   * 1. 参数不需要一次只传入一个。假设 `g` 由 `R.curryN(3, f)` 生成，则下列写法是等价的：
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * 2. 占位符值 [`R.__`](#__) 可用于标记暂未传入参数的位置，允许部分应用于任何参数组合，而无需关心它们的位置和顺序。 假设 `g` 定义如前所示，`_` 代表 [`R.__`](#__) ，则下列写法是等价的：
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.5.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curry
   * @example
   *
   *      const sumArgs = (...args) => R.sum(args);
   *
   *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */

  var curryN = _curry2(function curryN(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }

    return _arity(length, _curryN(length, [], fn));
  });

  /**
   * 通过向列表迭代函数的回调函数添加两个新的参数：当前索引、整个列表，创建新的列表迭代函数。
   *
   * 例如，`addIndex` 可以将 [`R.map`](#map) 转换为类似于 `Array.prototype.map` 的函数。注意，`addIndex` 只适用于迭代回调函数是首个参数、列表是最后一个参数的函数。（如果列表参数没有用到，后一个条件可以忽略）。
   *
   * `identical` 不支持 `__` 占位符。
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Function
   * @category List
   * @sig (((a ...) -> b) ... -> [a] -> *) -> (((a ..., Int, [a]) -> b) ... -> [a] -> *)
   * @param {Function} fn A list iteration function that does not pass index or list to its callback
   * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
   * @example
   *
   *      const mapIndexed = R.addIndex(R.map);
   *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
   *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
   */

  var addIndex = _curry1(function addIndex(fn) {
    return curryN(fn.length, function () {
      var idx = 0;
      var origFn = arguments[0];
      var list = arguments[arguments.length - 1];
      var args = Array.prototype.slice.call(arguments, 0);

      args[0] = function () {
        var result = origFn.apply(this, _concat(arguments, [idx, list]));
        idx += 1;
        return result;
      };

      return fn.apply(this, args);
    });
  });

  /**
   * Optimized internal three-arity curry function.
   *
   * @private
   * @category Function
   * @param {Function} fn The function to curry.
   * @return {Function} The curried function.
   */

  function _curry3(fn) {
    return function f3(a, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;

        case 1:
          return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          });

        case 2:
          return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _curry1(function (_c) {
            return fn(a, b, _c);
          });

        default:
          return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
            return fn(a, _b, _c);
          }) : _isPlaceholder(a) ? _curry1(function (_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function (_b) {
            return fn(a, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function (_c) {
            return fn(a, b, _c);
          }) : fn(a, b, c);
      }
    };
  }

  /**
   * 将数组中指定索引处的值替换为经函数变换的值。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> (a -> a) -> [a] -> [a]
   * @param {Number} idx The index.
   * @param {Function} fn The function to apply.
   * @param {Array|Arguments} list An array-like object whose value
   *        at the supplied index will be replaced.
   * @return {Array} A copy of the supplied array-like object with
   *         the element at index `idx` replaced with the value
   *         returned by applying `fn` to the existing element.
   * @see R.update
   * @example
   *
   *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
   *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
   * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
   * @symb R.adjust(0, f, [a, b]) = [f(a), b]
   */

  var adjust = _curry3(function adjust(idx, fn, list) {
    var len = list.length;

    if (idx >= len || idx < -len) {
      return list;
    }

    var _idx = (len + idx) % len;

    var _list = _concat(list);

    _list[_idx] = fn(list[_idx]);
    return _list;
  });

  /**
   * Tests whether or not an object is an array.
   *
   * @private
   * @param {*} val The object to test.
   * @return {Boolean} `true` if `val` is an array, `false` otherwise.
   * @example
   *
   *      _isArray([]); //=> true
   *      _isArray(null); //=> false
   *      _isArray({}); //=> false
   */
  var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
  };

  function _isTransformer(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
  }

  /**
   * Returns a function that dispatches with different strategies based on the
   * object in list position (last argument). If it is an array, executes [fn].
   * Otherwise, if it has a function with one of the given method names, it will
   * execute that function (functor case). Otherwise, if it is a transformer,
   * uses transducer created by [transducerCreator] to return a new transformer
   * (transducer case).
   * Otherwise, it will default to executing [fn].
   *
   * @private
   * @param {Array} methodNames properties to check for a custom implementation
   * @param {Function} transducerCreator transducer factory if object is transformer
   * @param {Function} fn default ramda implementation
   * @return {Function} A function that dispatches on object in list position
   */

  function _dispatchable(methodNames, transducerCreator, fn) {
    return function () {
      if (arguments.length === 0) {
        return fn();
      }

      var obj = arguments[arguments.length - 1];

      if (!_isArray(obj)) {
        var idx = 0;

        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === 'function') {
            return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
          }

          idx += 1;
        }

        if (_isTransformer(obj)) {
          var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
          return transducer(obj);
        }
      }

      return fn.apply(this, arguments);
    };
  }

  function _reduced(x) {
    return x && x['@@transducer/reduced'] ? x : {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  var _xfBase = {
    init: function init() {
      return this.xf['@@transducer/init']();
    },
    result: function result(_result) {
      return this.xf['@@transducer/result'](_result);
    }
  };

  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }

  XAll.prototype['@@transducer/init'] = _xfBase.init;

  XAll.prototype['@@transducer/result'] = function (result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }

    return this.xf['@@transducer/result'](result);
  };

  XAll.prototype['@@transducer/step'] = function (result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }

    return result;
  };

  var _xall = _curry2(function _xall(f, xf) {
    return new XAll(f, xf);
  });

  /**
   * 如果列表中的所有元素都满足 predicate，则返回 `true`；否则，返回 `false`。
   *
   * 若第二个参数自身存在 `all` 方法，则调用自身的 `all` 方法。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
   *         otherwise.
   * @see R.any, R.none, R.transduce
   * @example
   *
   *      const equals3 = R.equals(3);
   *      R.all(equals3)([3, 3, 3, 3]); //=> true
   *      R.all(equals3)([3, 3, 1, 3]); //=> false
   */

  var all = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
    var idx = 0;

    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }

      idx += 1;
    }

    return true;
  }));

  /**
   * 返回两个参数中的较大值。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.maxBy, R.min
   * @example
   *
   *      R.max(789, 123); //=> 789
   *      R.max('a', 'b'); //=> 'b'
   */

  var max = _curry2(function max(a, b) {
    return b > a ? b : a;
  });

  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);

    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }

    return result;
  }

  function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

  /**
   * Tests whether or not an object is similar to an array.
   *
   * @private
   * @category Type
   * @category List
   * @sig * -> Boolean
   * @param {*} x The object to test.
   * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
   * @example
   *
   *      _isArrayLike([]); //=> true
   *      _isArrayLike(true); //=> false
   *      _isArrayLike({}); //=> false
   *      _isArrayLike({length: 10}); //=> false
   *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
   *      _isArrayLike({nodeType: 1, length: 1}) // => false
   */

  var _isArrayLike = _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
      return true;
    }

    if (!x) {
      return false;
    }

    if (_typeof(x) !== 'object') {
      return false;
    }

    if (_isString(x)) {
      return false;
    }

    if (x.length === 0) {
      return true;
    }

    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }

    return false;
  });

  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  function _xwrap(fn) {
    return new XWrap(fn);
  }

  /**
   * 创建一个绑定了上下文的函数。
   *
   * 注意：与 [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 不同，`R.bind` 不会绑定额外参数。
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Function
   * @category Object
   * @sig (* -> *) -> {*} -> (* -> *)
   * @param {Function} fn The function to bind to context
   * @param {Object} thisObj The context to bind `fn` to
   * @return {Function} A function that will execute in the context of `thisObj`.
   * @see R.partial
   * @example
   *
   *      const log = R.bind(console.log, console);
   *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
   *      // logs {a: 2}
   * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
   */

  var bind = _curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
      return fn.apply(thisObj, arguments);
    });
  });

  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);

      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }

      idx += 1;
    }

    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();

    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);

      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }

      step = iter.next();
    }

    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }

    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }

    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }

    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }

    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }

    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  }

  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  var _xmap = _curry2(function _xmap(f, xf) {
    return new XMap(f, xf);
  });

  function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  var toString = Object.prototype.toString;

  var _isArguments = function () {
    return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
      return toString.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
      return _has('callee', x);
    };
  }();

  var hasEnumBug = !{
    toString: null
  }.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

  var hasArgsEnumBug = function () {

    return arguments.propertyIsEnumerable('length');
  }();

  var contains = function contains(list, item) {
    var idx = 0;

    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }

      idx += 1;
    }

    return false;
  };
  /**
   * 返回给定对象所有可枚举的、自身属性的属性名组成的列表。注意，不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own properties.
   * @see R.keysIn, R.values, R.toPairs
   * @example
   *
   *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
   */


  var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : _curry1(function keys(obj) {
    if (Object(obj) !== obj) {
      return [];
    }

    var prop, nIdx;
    var ks = [];

    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

    for (prop in obj) {
      if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
        ks[ks.length] = prop;
      }
    }

    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;

      while (nIdx >= 0) {
        prop = nonEnumerableProps[nIdx];

        if (_has(prop, obj) && !contains(ks, prop)) {
          ks[ks.length] = prop;
        }

        nIdx -= 1;
      }
    }

    return ks;
  });

  /**
   * 接收一个函数和一个 [functor](https://github.com/fantasyland/fantasy-land#functor), 将该函数应用到 functor 的每个值上，返回一个具有相同形态的 functor。
   *
   * Ramda 为 `Array` 和 `Object` 提供了合适的 `map` 实现，因此 `R.map` 适用于 `[1, 2, 3]` 或 `{x: 1, y: 2, z: 3}`。
   *
   * 若第二个参数自身存在 `map` 方法，则调用自身的 `map` 方法。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * 函数也是 functors，`map` 会将它们组合起来（相当于 `R.compose`）。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => (a -> b) -> f a -> f b
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {Array} list The list to be iterated over.
   * @return {Array} The new list.
   * @see R.transduce, R.addIndex, R.pluck, R.project
   * @example
   *
   *      const double = x => x * 2;
   *
   *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
   *
   *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
   * @symb R.map(f, [a, b]) = [f(a), f(b)]
   * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
   * @symb R.map(f, functor_o) = functor_o.map(f)
   */

  var map = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
      case '[object Function]':
        return curryN(functor.length, function () {
          return fn.call(this, functor.apply(this, arguments));
        });

      case '[object Object]':
        return _reduce(function (acc, key) {
          acc[key] = fn(functor[key]);
          return acc;
        }, {}, keys(functor));

      default:
        return _map(fn, functor);
    }
  }));

  /**
   * Determine if the passed argument is an integer.
   *
   * @private
   * @param {*} n
   * @category Type
   * @return {Boolean}
   */
  var _isInteger = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  /**
   * 返回列表或字符串的第 n 个元素。如果 n 为负数，则返回索引为 length + n 的元素。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> a | Undefined
   * @sig Number -> String -> String
   * @param {Number} offset
   * @param {*} list
   * @return {*}
   * @example
   *
   *      const list = ['foo', 'bar', 'baz', 'quux'];
   *      R.nth(1, list); //=> 'bar'
   *      R.nth(-1, list); //=> 'quux'
   *      R.nth(-99, list); //=> undefined
   *
   *      R.nth(2, 'abc'); //=> 'c'
   *      R.nth(3, 'abc'); //=> ''
   * @symb R.nth(-1, [a, b, c]) = c
   * @symb R.nth(0, [a, b, c]) = a
   * @symb R.nth(1, [a, b, c]) = b
   */

  var nth = _curry2(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });

  /**
   * 取出对象中指定属性的值。如果不存在，则返回 undefined。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig Idx -> {s: a} -> a | Undefined
   * @param {String|Number} p The property name or array index
   * @param {Object} obj The object to query
   * @return {*} The value at `obj.p`.
   * @see R.path, R.props, R.pluck, R.project, R.nth
   * @example
   *
   *      R.prop('x', {x: 100}); //=> 100
   *      R.prop('x', {}); //=> undefined
   *      R.prop(0, [100]); //=> 100
   *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
   */

  var prop = _curry2(function prop(p, obj) {
    if (obj == null) {
      return;
    }

    return _isInteger(p) ? nth(p, obj) : obj[p];
  });

  /**
   * 从列表内的每个对象元素中取出特定名称的属性，组成一个新的列表。
   *
   * `pluck` 可以作用于任何 [functor](https://github.com/fantasyland/fantasy-land#functor) ，包括 `Array`，因为它等价于 `R.map(R.prop(k), f)`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Functor f => k -> f {k: v} -> f v
   * @param {Number|String} key The key name to pluck off of each object.
   * @param {Array} f The array or functor to consider.
   * @return {Array} The list of values for the given key.
   * @see R.project, R.prop, R.props
   * @example
   *
   *      var getAges = R.pluck('age');
   *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
   *
   *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
   *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
   * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
   * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
   */

  var pluck = _curry2(function pluck(p, list) {
    return map(prop(p), list);
  });

  /**
   * 左折叠操作。
   *
   * 遍历列表，相继调用二元迭代函数（参数为累积值和从数组中取出的当前元素），将本次迭代结果作为下次迭代的累积值。返回最终累积值。
   *
   * 可以用 [`R.reduced`](#reduced) 提前终止遍历操作。
   *
   * `reduce` 的迭代函数接收两个参数 *(acc, value)*，[`reduceRight`](#reduceRight) 的迭代函数的参数顺序为 *(value, acc)*
   *
   * 注意：`R.reduce` 与原生 `Array.prototype.reduce` 方法不同，它不会跳过删除或未分配的索引项（稀疏矩阵）。更多关于原生 reduce 的行为，请参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
   *
   * 如果第三个参数自身有 `reduce` 方法，则调用自身的 `reduce` 方法。如果进行该步操作，则由用户自己来处理 [`R.reduced`](#reduced) 短路操作，因为自身 `reduce` 方法的实现可能与 Ramda 中的 `reduce` 不同。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduced, R.addIndex, R.reduceRight
   * @example
   *
   *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
   *      //          -               -10
   *      //         / \              / \
   *      //        -   4           -6   4
   *      //       / \              / \
   *      //      -   3   ==>     -3   3
   *      //     / \              / \
   *      //    -   2           -1   2
   *      //   / \              / \
   *      //  0   1            0   1
   *
   * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
   */

  var reduce = _curry3(_reduce);

  /**
   * 传入包含多个 predicate 的列表，返回一个 predicate：如果给定的参数满足列表中的所有 predicate ，则返回 `true`。
   *
   * 该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.anyPass
   * @example
   *
   *      const isQueen = R.propEq('rank', 'Q');
   *      const isSpade = R.propEq('suit', '♠︎');
   *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
   *
   *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
   *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
   */

  var allPass = _curry1(function allPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;

      while (idx < len) {
        if (!preds[idx].apply(this, arguments)) {
          return false;
        }

        idx += 1;
      }

      return true;
    });
  });

  /**
   * 返回一个返回恒定值的函数。注意，对于非原始值，返回的值是对原始值的引用。
   *
   * 此函数在其他语言或库中也被称作：`const`、`constant`、或 `K` (K combinator 中)
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> (* -> a)
   * @param {*} val The value to wrap in a function
   * @return {Function} A Function :: * -> val.
   * @example
   *
   *      const t = R.always('Tee');
   *      t(); //=> 'Tee'
   */

  var always = _curry1(function always(val) {
    return function () {
      return val;
    };
  });

  /**
   * 如果两个参数都是 `true`，则返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any}
   * @see R.both, R.or
   * @example
   *
   *      R.and(true, true); //=> true
   *      R.and(true, false); //=> false
   *      R.and(false, true); //=> false
   *      R.and(false, false); //=> false
   */

  var and = _curry2(function and(a, b) {
    return a && b;
  });

  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }

  XAny.prototype['@@transducer/init'] = _xfBase.init;

  XAny.prototype['@@transducer/result'] = function (result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }

    return this.xf['@@transducer/result'](result);
  };

  XAny.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }

    return result;
  };

  var _xany = _curry2(function _xany(f, xf) {
    return new XAny(f, xf);
  });

  /**
   * 只要列表中有一个元素满足 predicate，就返回 `true`，否则返回 `false`。
   *
   * 若第二个参数自身存在 `any` 方法，则调用其自身的 `any`。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
   *         otherwise.
   * @see R.all, R.none, R.transduce
   * @example
   *
   *      const lessThan0 = R.flip(R.lt)(0);
   *      const lessThan2 = R.flip(R.lt)(2);
   *      R.any(lessThan0)([1, 2]); //=> false
   *      R.any(lessThan2)([1, 2]); //=> true
   */

  var any = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
    var idx = 0;

    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }

      idx += 1;
    }

    return false;
  }));

  /**
   * 传入包含多个 predicate 的列表，返回一个 predicate：只要给定的参数满足列表中的一个 predicate ，就返回 `true`。
   *
   * 该函数返回一个柯里化的函数，参数个数由列表中参数最多的 predicate 决定。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Logic
   * @sig [(*... -> Boolean)] -> (*... -> Boolean)
   * @param {Array} predicates An array of predicates to check
   * @return {Function} The combined predicate
   * @see R.allPass
   * @example
   *
   *      const isClub = R.propEq('suit', '♣');
   *      const isSpade = R.propEq('suit', '♠');
   *      const isBlackCard = R.anyPass([isClub, isSpade]);
   *
   *      isBlackCard({rank: '10', suit: '♣'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
   *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
   */

  var anyPass = _curry1(function anyPass(preds) {
    return curryN(reduce(max, 0, pluck('length', preds)), function () {
      var idx = 0;
      var len = preds.length;

      while (idx < len) {
        if (preds[idx].apply(this, arguments)) {
          return true;
        }

        idx += 1;
      }

      return false;
    });
  });

  /**
   * ap 将函数列表作用于值列表上。
   *
   * 若第二个参数自身存在 `ap` 方法，则调用自身的 `ap` 方法。柯里化函数也可以作为 applicative。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig [a -> b] -> [a] -> [b]
   * @sig Apply f => f (a -> b) -> f a -> f b
   * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
   * @param {*} applyF
   * @param {*} applyX
   * @return {*}
   * @example
   *
   *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
   *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
   *
   *      // R.ap can also be used as S combinator
   *      // when only two functions are passed
   *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
   * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
   */

  var ap = _curry2(function ap(applyF, applyX) {
    return typeof applyX['fantasy-land/ap'] === 'function' ? applyX['fantasy-land/ap'](applyF) : typeof applyF.ap === 'function' ? applyF.ap(applyX) : typeof applyF === 'function' ? function (x) {
      return applyF(x)(applyX(x));
    } : _reduce(function (acc, f) {
      return _concat(acc, map(f, applyX));
    }, [], applyF);
  });

  function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);

    while (idx < limit) {
      acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
      idx += 1;
    }

    return acc;
  }

  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }

  XAperture.prototype['@@transducer/init'] = _xfBase.init;

  XAperture.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };

  XAperture.prototype['@@transducer/step'] = function (result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };

  XAperture.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;

    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  XAperture.prototype.getCopy = function () {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  var _xaperture = _curry2(function _xaperture(n, xf) {
    return new XAperture(n, xf);
  });

  /**
   * 返回一个新列表，列表中的元素为由原列表相邻元素组成的 n 元组。如果 `n` 大于列表的长度，则返回空列表。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig Number -> [a] -> [[a]]
   * @param {Number} n The size of the tuples to create
   * @param {Array} list The list to split into `n`-length tuples
   * @return {Array} The resulting list of `n`-length tuples
   * @see R.transduce
   * @example
   *
   *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
   *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
   *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
   */

  var aperture = _curry2(_dispatchable([], _xaperture, _aperture));

  /**
   * 在列表末尾拼接一个元素。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The element to add to the end of the new list.
   * @param {Array} list The list of elements to add a new item to.
   *        list.
   * @return {Array} A new list containing the elements of the old list followed by `el`.
   * @see R.prepend
   * @example
   *
   *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
   *      R.append('tests', []); //=> ['tests']
   *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
   */

  var append = _curry2(function append(el, list) {
    return _concat(list, [el]);
  });

  /**
   * 将函数 `fn` 作用于参数列表 `args`。`apply` 可以将变参函数转换为为定参函数。如果上下文很重要，则 `fn` 应该绑定其上下文。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig (*... -> a) -> [*] -> a
   * @param {Function} fn The function which will be called with `args`
   * @param {Array} args The arguments to call `fn` with
   * @return {*} result The result, equivalent to `fn(...args)`
   * @see R.call, R.unapply
   * @example
   *
   *      const nums = [1, 2, 3, -99, 42, 6, 7];
   *      R.apply(Math.max, nums); //=> 42
   * @symb R.apply(f, [a, b, c]) = f(a, b, c)
   */

  var apply = _curry2(function apply(fn, args) {
    return fn.apply(this, args);
  });

  /**
   * 返回对象所有自身可枚举的属性的值。注意：不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {k: v} -> [v]
   * @param {Object} obj The object to extract values from
   * @return {Array} An array of the values of the object's own properties.
   * @see R.valuesIn, R.keys, R.toPairs
   * @example
   *
   *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
   */

  var values = _curry1(function values(obj) {
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

  // delegating calls to .map

  function mapValues(fn, obj) {
    return _isArray(obj) ? obj.map(fn) : keys(obj).reduce(function (acc, key) {
      acc[key] = fn(obj[key]);
      return acc;
    }, {});
  }
  /**
   * 接受一个属性值为函数的对象，返回一个能生成相同结构对象的函数。返回的函数使用传入的参数调用对象的每个属性位对应的函数，来生成相应属性的值。
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Function
   * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
   * @param {Object} spec an object recursively mapping properties to functions for
   *        producing the values for these properties.
   * @return {Function} A function that returns an object of the same structure
   * as `spec', with each property set to the value returned by calling its
   * associated function with the supplied arguments.
   * @see R.converge, R.juxt
   * @example
   *
   *      const getMetrics = R.applySpec({
   *        sum: R.add,
   *        nested: { mul: R.multiply }
   *      });
   *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
   * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
   */


  var applySpec = _curry1(function applySpec(spec) {
    spec = mapValues(function (v) {
      return typeof v == 'function' ? v : applySpec(v);
    }, spec);
    return curryN(reduce(max, 0, pluck('length', values(spec))), function () {
      var args = arguments;
      return mapValues(function (f) {
        return apply(f, args);
      }, spec);
    });
  });

  /**
   * 接受一个值，并将一个函数作用于其上。
   *
   * 该函数又被称为 `thrush` combinator 。
   *
   * @func
   * @memberOf R
   * @since v0.25.0
   * @category Function
   * @sig a -> (a -> b) -> b
   * @param {*} x The value
   * @param {Function} f The function to apply
   * @return {*} The result of applying `f` to `x`
   * @example
   *
   *      const t42 = R.applyTo(42);
   *      t42(R.identity); //=> 42
   *      t42(R.add(1)); //=> 43
   */

  var applyTo = _curry2(function applyTo(x, f) {
    return f(x);
  });

  /**
   * 由返回值可与 `<` 和 `>` 比较的函数，创建一个升序比较函数。
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Function
   * @sig Ord b => (a -> b) -> a -> a -> Number
   * @param {Function} fn A function of arity one that returns a value that can be compared
   * @param {*} a The first item to be compared.
   * @param {*} b The second item to be compared.
   * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
   * @see R.descend
   * @example
   *
   *      const byAge = R.ascend(R.prop('age'));
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByYoungestFirst = R.sort(byAge, people);
   *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
   */

  var ascend = _curry3(function ascend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });

  /**
   * Makes a shallow clone of an object, setting or overriding the specified
   * property with the given value. Note that this copies and flattens prototype
   * properties onto the new object as well. All non-primitive properties are
   * copied by reference.
   *
   * @private
   * @param {String|Number} prop The property name to set
   * @param {*} val The new value
   * @param {Object|Array} obj The object to clone
   * @return {Object|Array} A new object equivalent to the original except for the changed property.
   */

  function _assoc(prop, val, obj) {
    if (_isInteger(prop) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[prop] = val;
      return arr;
    }

    var result = {};

    for (var p in obj) {
      result[p] = obj[p];
    }

    result[prop] = val;
    return result;
  }

  /**
   * 检测输入值是否为 `null` 或 `undefined` 。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Type
   * @sig * -> Boolean
   * @param {*} x The value to test.
   * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
   * @example
   *
   *      R.isNil(null); //=> true
   *      R.isNil(undefined); //=> true
   *      R.isNil(0); //=> false
   *      R.isNil([]); //=> false
   */

  var isNil = _curry1(function isNil(x) {
    return x == null;
  });

  /**
   * 浅复制对象，设置或覆盖即将创建的给定路径所需的节点，并将特定值放在该路径的末端。
   *
   * 注意，这也会将 prototype 属性复制到新对象上。所有 `non-primitive` 属性都通过引用复制。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig [Idx] -> a -> {a} -> {a}
   * @param {Array} path the path to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original except along the specified path.
   * @see R.dissocPath
   * @example
   *
   *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
   *
   *      // Any missing or non-object keys in path will be overridden
   *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
   */

  var assocPath = _curry3(function assocPath(path, val, obj) {
    if (path.length === 0) {
      return val;
    }

    var idx = path[0];

    if (path.length > 1) {
      var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
      val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
    }

    return _assoc(idx, val, obj);
  });

  /**
   * 浅复制对象，然后设置或覆盖对象的指定属性。
   *
   * 注意，该函数也会将 prototype 属性复制到新的对象中。所有 `non-primitive` 属性都通过引用复制。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Idx = String | Int
   * @sig Idx -> a -> {k: v} -> {k: v}
   * @param {String|Number} prop The property name to set
   * @param {*} val The new value
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original except for the changed property.
   * @see R.dissoc, R.pick
   * @example
   *
   *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
   */

  var assoc = _curry3(function assoc(prop, val, obj) {
    return assocPath([prop], val, obj);
  });

  /**
   * 将一个任意元（包括零元）的函数，封装成一个确定元数（参数个数）的函数。任何多余的参数都不会传入被封装的函数。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig Number -> (* -> a) -> (* -> a)
   * @param {Number} n The desired arity of the new function.
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity `n`.
   * @see R.binary, R.unary
   * @example
   *
   *      const takesTwoArgs = (a, b) => [a, b];
   *
   *      takesTwoArgs.length; //=> 2
   *      takesTwoArgs(1, 2); //=> [1, 2]
   *
   *      const takesOneArg = R.nAry(1, takesTwoArgs);
   *      takesOneArg.length; //=> 1
   *      // Only `n` arguments are passed to the wrapped function
   *      takesOneArg(1, 2); //=> [1, undefined]
   * @symb R.nAry(0, f)(a, b) = f()
   * @symb R.nAry(1, f)(a, b) = f(a)
   * @symb R.nAry(2, f)(a, b) = f(a, b)
   */

  var nAry = _curry2(function nAry(n, fn) {
    switch (n) {
      case 0:
        return function () {
          return fn.call(this);
        };

      case 1:
        return function (a0) {
          return fn.call(this, a0);
        };

      case 2:
        return function (a0, a1) {
          return fn.call(this, a0, a1);
        };

      case 3:
        return function (a0, a1, a2) {
          return fn.call(this, a0, a1, a2);
        };

      case 4:
        return function (a0, a1, a2, a3) {
          return fn.call(this, a0, a1, a2, a3);
        };

      case 5:
        return function (a0, a1, a2, a3, a4) {
          return fn.call(this, a0, a1, a2, a3, a4);
        };

      case 6:
        return function (a0, a1, a2, a3, a4, a5) {
          return fn.call(this, a0, a1, a2, a3, a4, a5);
        };

      case 7:
        return function (a0, a1, a2, a3, a4, a5, a6) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
        };

      case 8:
        return function (a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
        };

      case 9:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
        };

      case 10:
        return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
        };

      default:
        throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
    }
  });

  /**
   * 将任意元函数封装为二元函数（只接受2个参数）中。任何额外的参数都不会传递给被封装的函数。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Function
   * @sig (a -> b -> c -> ... -> z) -> ((a, b) -> z)
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity 2.
   * @see R.nAry, R.unary
   * @example
   *
   *      const takesThreeArgs = function(a, b, c) {
   *        return [a, b, c];
   *      };
   *      takesThreeArgs.length; //=> 3
   *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
   *
   *      const takesTwoArgs = R.binary(takesThreeArgs);
   *      takesTwoArgs.length; //=> 2
   *      // Only 2 arguments are passed to the wrapped function
   *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
   * @symb R.binary(f)(a, b, c) = f(a, b)
   */

  var binary = _curry1(function binary(fn) {
    return nAry(2, fn);
  });

  function _isFunction(x) {
    var type = Object.prototype.toString.call(x);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
  }

  /**
   * 将一个函数提升为指定元数的函数，使之能映射到多个列表、函数或其他符合 [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply) 规范的对象上。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig Number -> (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.lift, R.ap
   * @example
   *
   *      const madd3 = R.liftN(3, (...args) => R.sum(args));
   *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
   */

  var liftN = _curry2(function liftN(arity, fn) {
    var lifted = curryN(arity, fn);
    return curryN(arity, function () {
      return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
  });

  /**
   * 提升一个多元函数，使之能映射到列表、函数或其他符合 [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply) 规范的对象上。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Function
   * @sig (*... -> *) -> ([*]... -> [*])
   * @param {Function} fn The function to lift into higher context
   * @return {Function} The lifted function.
   * @see R.liftN
   * @example
   *
   *      const madd3 = R.lift((a, b, c) => a + b + c);
   *
   *      madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
   *
   *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
   *
   *      madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
   */

  var lift = _curry1(function lift(fn) {
    return liftN(fn.length, fn);
  });

  /**
   * 该函数调用两个函数，并对两函数返回值进行`与操作`。若第一个函数结果为 false-y 值 (false, null, 0 等)，则返回该结果，否则返回第二个函数的结果。注意，`both` 为短路操作，即如果第一个函数返回 false-y 值，则不会调用第二个函数。
   *
   * 除了函数，`R.both` 还接受任何兼容 fantasy-land 的 applicative functor。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f A predicate
   * @param {Function} g Another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
   * @see R.either, R.and
   * @example
   *
   *      const gt10 = R.gt(R.__, 10)
   *      const lt20 = R.lt(R.__, 20)
   *      const f = R.both(gt10, lt20);
   *      f(15); //=> true
   *      f(30); //=> false
   *
   *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
   *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
   */

  var both = _curry2(function both(f, g) {
    return _isFunction(f) ? function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } : lift(and)(f, g);
  });

  /**
   * 提取第一个参数作为函数，其余参数作为刚提取的函数的参数，调用该函数并将结果返回。
   *
   * `R.call` 可以用作 [`R.converge`](#converge) 的 convergeing 函数：第一个分支函数生成函数，其余分支函数生成一系列值作为该函数的参数。（`R.converge` 第二个参数为一个分支函数列表）。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig ((*... -> a), *...) -> a
   * @param {Function} fn The function to apply to the remaining arguments.
   * @param {...*} args Any number of positional arguments.
   * @return {*}
   * @see R.apply
   * @example
   *
   *      R.call(R.add, 1, 2); //=> 3
   *
   *      const indentN = R.pipe(
   *        R.repeat(' '),
   *        R.join(''),
   *        R.replace(/^(?!$)/gm)
   *      );
   *
   *      const format = R.converge(
   *        R.call,
   *        [
   *          R.pipe(R.prop('indent'), indentN),
   *          R.prop('value')
   *        ]
   *      );
   *
   *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
   * @symb R.call(f, a, b) = f(a, b)
   */

  var call = _curry1(function call(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
  });

  /**
   * `_makeFlat` is a helper function that returns a one-level or fully recursive
   * function based on the flag passed in.
   *
   * @private
   */

  function _makeFlat(recursive) {
    return function flatt(list) {
      var value, jlen, j;
      var result = [];
      var idx = 0;
      var ilen = list.length;

      while (idx < ilen) {
        if (_isArrayLike(list[idx])) {
          value = recursive ? flatt(list[idx]) : list[idx];
          j = 0;
          jlen = value.length;

          while (j < jlen) {
            result[result.length] = value[j];
            j += 1;
          }
        } else {
          result[result.length] = list[idx];
        }

        idx += 1;
      }

      return result;
    };
  }

  function _forceReduced(x) {
    return {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
  }

  var preservingReduced = function preservingReduced(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function transducerResult(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function transducerStep(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  var _flatCat = function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function transducerResult(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function transducerStep(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };

  var _xchain = _curry2(function _xchain(f, xf) {
    return map(f, _flatCat(xf));
  });

  /**
   * `chain` 将函数映射到列表中每个元素，并将结果连接起来。 `chain` 在一些库中也称为 `flatMap`（先 map 再 flatten ）。
   *
   * 若第二个参数存在 `chain` 方法，则调用其自身的 `chain`方法。该参数需符合 [FantasyLand Chain 规范](https://github.com/fantasyland/fantasy-land#chain)。
   *
   * 如果第二个参数是函数，`chain(f, g)(x)` 等价于 `f(g(x), x)`。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig Chain m => (a -> m b) -> m a -> m b
   * @param {Function} fn The function to map with
   * @param {Array} list The list to map over
   * @return {Array} The result of flat-mapping `list` with `fn`
   * @example
   *
   *      const duplicate = n => [n, n];
   *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
   *
   *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
   */

  var chain = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
    if (typeof monad === 'function') {
      return function (x) {
        return fn(monad(x))(x);
      };
    }

    return _makeFlat(false)(map(fn, monad));
  }));

  /**
   * 将数字限制在指定的范围内。
   *
   * `clamp` 也可用于其他有序类型，如字符串和日期。
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Relation
   * @sig Ord a => a -> a -> a -> a
   * @param {Number} minimum The lower limit of the clamp (inclusive)
   * @param {Number} maximum The upper limit of the clamp (inclusive)
   * @param {Number} value Value to be clamped
   * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
   * @example
   *
   *      R.clamp(1, 10, -5) // => 1
   *      R.clamp(1, 10, 15) // => 10
   *      R.clamp(1, 10, 4)  // => 4
   */

  var clamp = _curry3(function clamp(min, max, value) {
    if (min > max) {
      throw new Error('min must not be greater than max in clamp(min, max, value)');
    }

    return value < min ? min : value > max ? max : value;
  });

  function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : ''));
  }

  /**
   * 用一个单词来描述输入值的（原生）类型，返回诸如 'Object'、'Number'、'Array'、'Null' 之类的结果。不区分用户自定义的类型，统一返回 'Object'。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Type
   * @sig (* -> {*}) -> String
   * @param {*} val The value to test
   * @return {String}
   * @example
   *
   *      R.type({}); //=> "Object"
   *      R.type(1); //=> "Number"
   *      R.type(false); //=> "Boolean"
   *      R.type('s'); //=> "String"
   *      R.type(null); //=> "Null"
   *      R.type([]); //=> "Array"
   *      R.type(/[A-z]/); //=> "RegExp"
   *      R.type(() => {}); //=> "Function"
   *      R.type(undefined); //=> "Undefined"
   */

  var type = _curry1(function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
  });

  /**
   * Copies an object.
   *
   * @private
   * @param {*} value The value to be copied
   * @param {Array} refFrom Array containing the source references
   * @param {Array} refTo Array containing the copied source references
   * @param {Boolean} deep Whether or not to perform deep cloning.
   * @return {*} The copied value.
   */

  function _clone(value, refFrom, refTo, deep) {
    var copy = function copy(copiedValue) {
      var len = refFrom.length;
      var idx = 0;

      while (idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }

        idx += 1;
      }

      refFrom[idx] = value;
      refTo[idx] = copiedValue;

      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
        }
      }

      return copiedValue;
    };

    switch (type(value)) {
      case 'Object':
        return copy(Object.create(Object.getPrototypeOf(value)));

      case 'Array':
        return copy([]);

      case 'Date':
        return new Date(value.valueOf());

      case 'RegExp':
        return _cloneRegExp(value);

      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'BigInt64Array':
      case 'BigUint64Array':
        return value.slice();

      default:
        return value;
    }
  }

  /**
   * 深复制。其值可能（嵌套）包含 `Array`、`Object`、`Number`、`String`、`Boolean`、`Date` 类型的数据。`Function` 通过引用复制。
   *
   * 若自身存在 `clone` 方法，则调用自身的 `clone` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig {*} -> {*}
   * @param {*} value The object or array to clone
   * @return {*} A deeply cloned copy of `val`
   * @example
   *
   *      const objects = [{}, {}, {}];
   *      const objectsClone = R.clone(objects);
   *      objects === objectsClone; //=> false
   *      objects[0] === objectsClone[0]; //=> false
   */

  var clone = _curry1(function clone(value) {
    return value != null && typeof value.clone === 'function' ? value.clone() : _clone(value, [], [], true);
  });

  /**
   * 根据列表中每一个元素调用函数的结果是否相等，将一个列表拆分为多个子列表。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category List
   * @typedefn Idx = String | Int | Symbol
   * @sig Idx a => (b -> a) -> [b] -> [[b]]
   * @param {Function} fn Function :: a -> Idx
   * @param {Array} list The array to group
   * @return {Array}
   *    An array of arrays where each sub-array contains items for which
   *    the String-returning function has returned the same value.
   * @see R.groupBy, R.partition
   * @example
   *      R.collectBy(R.prop('type'), [
   *        {type: 'breakfast', item: '☕️'},
   *        {type: 'lunch', item: '🌯'},
   *        {type: 'dinner', item: '🍝'},
   *        {type: 'breakfast', item: '🥐'},
   *        {type: 'lunch', item: '🍕'}
   *      ]);
   *
   *      // [ [ {type: 'breakfast', item: '☕️'},
   *      //     {type: 'breakfast', item: '🥐'} ],
   *      //   [ {type: 'lunch', item: '🌯'},
   *      //     {type: 'lunch', item: '🍕'} ],
   *      //   [ {type: 'dinner', item: '🍝'} ] ]
   */

  var collectBy = _curry2(function collectBy(fn, list) {
    var group = _reduce(function (o, x) {
      var tag = fn(x);

      if (o[tag] === undefined) {
        o[tag] = [];
      }

      o[tag].push(x);
      return o;
    }, {}, list);

    var newList = [];

    for (var tag in group) {
      newList.push(group[tag]);
    }

    return newList;
  });

  /**
   * 由首个参数是否小于第二个参数的判断函数，生成一个比较函数。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
   * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
   * is less than the second, `false` otherwise
   * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
   * @example
   *
   *      const byAge = R.comparator((a, b) => a.age < b.age);
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByIncreasingAge = R.sort(byAge, people);
   *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
   */

  var comparator = _curry1(function comparator(pred) {
    return function (a, b) {
      return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
  });

  /**
   * 逻辑非运算。

   * 当传入参数为 false-y 值时，返回 `true`；truth-y 值时，返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig * -> Boolean
   * @param {*} a any value
   * @return {Boolean} the logical inverse of passed argument.
   * @see R.complement
   * @example
   *
   *      R.not(true); //=> false
   *      R.not(false); //=> true
   *      R.not(0); //=> true
   *      R.not(1); //=> false
   */

  var not = _curry1(function not(a) {
    return !a;
  });

  /**
   * 对函数的返回值取反。接受一个函数 `f`，返回一个新函数 `g`：在输入参数相同的情况下，若 `f` 返回 'true-y' ，则 `g` 返回 `false-y` ，反之亦然。
   *
   * `R.complement` 可用于任何 functor。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> *) -> (*... -> Boolean)
   * @param {Function} f
   * @return {Function}
   * @see R.not
   * @example
   *
   *      const isNotNil = R.complement(R.isNil);
   *      R.isNil(null); //=> true
   *      isNotNil(null); //=> false
   *      R.isNil(7); //=> false
   *      isNotNil(7); //=> true
   */

  var complement = lift(not);

  function _pipe(f, g) {
    return function () {
      return g.call(this, f.apply(this, arguments));
    };
  }

  /**
   * This checks whether a function has a [methodname] function. If it isn't an
   * array it will execute that function otherwise it will default to the ramda
   * implementation.
   *
   * @private
   * @param {Function} fn ramda implementation
   * @param {String} methodname property to check for a custom implementation
   * @return {Object} Whatever the return value of the method is.
   */

  function _checkForMethod(methodname, fn) {
    return function () {
      var length = arguments.length;

      if (length === 0) {
        return fn();
      }

      var obj = arguments[length - 1];
      return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  /**
   * 取出给定的列表或字符串（或带有 `slice` 方法的对象）中，从 `fromIndex`（包括）到 `toIndex`（不包括）的元素。
   *
   * 如果第三个参数自身存在 `slice` 方法，则调用自身的 `slice` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @sig Number -> Number -> String -> String
   * @param {Number} fromIndex The start index (inclusive).
   * @param {Number} toIndex The end index (exclusive).
   * @param {*} list
   * @return {*}
   * @example
   *
   *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
   *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
   *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
   *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
   *      R.slice(0, 3, 'ramda');                     //=> 'ram'
   */

  var slice = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
  }));

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

  /**
   * 从左往右执行函数组合。第一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
   *
   * 在一些库中，此函数也被称为 `sequence`。
   *
   * ** 注意：** `pipe` 函数的结果不是自动柯里化的。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
   * @param {...Function} functions
   * @return {Function}
   * @see R.compose
   * @example
   *
   *      const f = R.pipe(Math.pow, R.negate, R.inc);
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
   * @symb R.pipe(f, g, h)(a)(b) = h(g(f(a)))(b)
   */

  function pipe() {
    if (arguments.length === 0) {
      throw new Error('pipe requires at least one argument');
    }

    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
  }

  /**
   * 对列表或字符串的排列顺序取反。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {Array|String} list
   * @return {Array|String}
   * @example
   *
   *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
   *      R.reverse([1, 2]);     //=> [2, 1]
   *      R.reverse([1]);        //=> [1]
   *      R.reverse([]);         //=> []
   *
   *      R.reverse('abc');      //=> 'cba'
   *      R.reverse('ab');       //=> 'ba'
   *      R.reverse('a');        //=> 'a'
   *      R.reverse('');         //=> ''
   */

  var reverse = _curry1(function reverse(list) {
    return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
  });

  /**
   * 从右往左执行函数组合（右侧函数的输出作为左侧函数的输入）。最后一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
   *
   * **注意：**compose 输出的函数不会自动进行柯里化。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
   * @param {...Function} ...functions The functions to compose
   * @return {Function}
   * @see R.pipe
   * @example
   *
   *      const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
   *      const yellGreeting = R.compose(R.toUpper, classyGreeting);
   *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
   *
   *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
   *
   * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
   * @symb R.compose(f, g, h)(a)(b) = f(g(h(a)))(b)
   */

  function compose() {
    if (arguments.length === 0) {
      throw new Error('compose requires at least one argument');
    }

    return pipe.apply(this, reverse(arguments));
  }

  /**
   * 求列表或字符串的首个元素。在某些库中，该函数也被称作 `first`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {Array|String} list
   * @return {*}
   * @see R.tail, R.init, R.last
   * @example
   *
   *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
   *      R.head([]); //=> undefined
   *
   *      R.head('abc'); //=> 'a'
   *      R.head(''); //=> ''
   */

  var head = nth(0);

  function _identity(x) {
    return x;
  }

  /**
   * 将输入值原样返回。适合用作默认或占位函数。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig a -> a
   * @param {*} x The value to return.
   * @return {*} The input value, `x`.
   * @example
   *
   *      R.identity(1); //=> 1
   *
   *      const obj = {};
   *      R.identity(obj) === obj; //=> true
   * @symb R.identity(a) = a
   */

  var identity = _curry1(_identity);

  /**
   * 利用转换函数从左往右执行函数组合。第一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
   *
   * **注意：**pipe 输出的函数不会自动进行柯里化。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Function
   * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
   * @param {Function} transformer The transforming function
   * @param {Array} functions The functions to pipe
   * @return {Function}
   * @see R.composeWith, R.pipe
   * @example
   *
   *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
   *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
   *
   *      f(3, 4); // -(3^4) + 1
   * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, g(...args)))
   */

  var pipeWith = _curry2(function pipeWith(xf, list) {
    if (list.length <= 0) {
      return identity;
    }

    var headList = head(list);
    var tailList = tail(list);
    return _arity(headList.length, function () {
      return _reduce(function (result, f) {
        return xf.call(this, f, result);
      }, headList.apply(this, arguments), tailList);
    });
  });

  /**
   * 利用转换函数从右往左执行函数组合。最后一个函数可以是任意元函数（参数个数不限），其余函数必须是一元函数。
   *
   * **注意：**composeWith 输出的函数不会自动进行柯里化。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Function
   * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
   * @param {Function} transformer The transforming function
   * @param {Array} functions The functions to compose
   * @return {Function}
   * @see R.compose, R.pipeWith
   * @example
   *
   *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
   *
   *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
   *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
   *
   * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, i(...args)))
   */

  var composeWith = _curry2(function composeWith(xf, list) {
    return pipeWith.apply(this, [xf, reverse(list)]);
  });

  function _arrayFromIterator(iter) {
    var list = [];
    var next;

    while (!(next = iter.next()).done) {
      list.push(next.value);
    }

    return list;
  }

  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }

      idx += 1;
    }

    return false;
  }

  function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
  }

  // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return a !== 0 || 1 / a === 1 / b;
    } else {
      // Step 6.a: NaN == NaN
      return a !== a && b !== b;
    }
  }

  var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

  /**
   * private _uniqContentEquals function.
   * That function is checking equality of 2 iterator contents with 2 assumptions
   * - iterators lengths are the same
   * - iterators values are unique
   *
   * false-positive result will be returned for comparison of, e.g.
   * - [1,2,3] and [1,2,3,4]
   * - [1,1,1] and [1,2,3]
   * */

  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);

    var b = _arrayFromIterator(bIterator);

    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    } // if *a* array contains any element that is not included in *b*


    return !_includesWith(function (b, aItem) {
      return !_includesWith(eq, aItem, b);
    }, b, a);
  }

  function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
      return true;
    }

    var typeA = type(a);

    if (typeA !== type(b)) {
      return false;
    }

    if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
      return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
    }

    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
      return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }

    switch (typeA) {
      case 'Arguments':
      case 'Array':
      case 'Object':
        if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
          return a === b;
        }

        break;

      case 'Boolean':
      case 'Number':
      case 'String':
        if (!(_typeof(a) === _typeof(b) && _objectIs$1(a.valueOf(), b.valueOf()))) {
          return false;
        }

        break;

      case 'Date':
        if (!_objectIs$1(a.valueOf(), b.valueOf())) {
          return false;
        }

        break;

      case 'Error':
        return a.name === b.name && a.message === b.message;

      case 'RegExp':
        if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
          return false;
        }

        break;
    }

    var idx = stackA.length - 1;

    while (idx >= 0) {
      if (stackA[idx] === a) {
        return stackB[idx] === b;
      }

      idx -= 1;
    }

    switch (typeA) {
      case 'Map':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

      case 'Set':
        if (a.size !== b.size) {
          return false;
        }

        return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

      case 'Arguments':
      case 'Array':
      case 'Object':
      case 'Boolean':
      case 'Number':
      case 'String':
      case 'Date':
      case 'Error':
      case 'RegExp':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'ArrayBuffer':
        break;

      default:
        // Values of other types are only equal if identical.
        return false;
    }

    var keysA = keys(a);

    if (keysA.length !== keys(b).length) {
      return false;
    }

    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;

    while (idx >= 0) {
      var key = keysA[idx];

      if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
        return false;
      }

      idx -= 1;
    }

    return true;
  }

  /**
   * 如果传入的参数相等，返回 `true`；否则返回 `false`。可以处理几乎所有 JavaScript 支持的数据结构。
   *
   * 若两个参数自身存在 `equals` 方法，则对称地调用自身的 `equals` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Relation
   * @sig a -> b -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   *      R.equals(1, 1); //=> true
   *      R.equals(1, '1'); //=> false
   *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
   *
   *      const a = {}; a.v = a;
   *      const b = {}; b.v = b;
   *      R.equals(a, b); //=> true
   */

  var equals = _curry2(function equals(a, b) {
    return _equals(a, b, [], []);
  });

  function _indexOf(list, a, idx) {
    var inf, item; // Array.prototype.indexOf doesn't exist below IE9

    if (typeof list.indexOf === 'function') {
      switch (_typeof(a)) {
        case 'number':
          if (a === 0) {
            // manually crawl the list to distinguish between +0 and -0
            inf = 1 / a;

            while (idx < list.length) {
              item = list[idx];

              if (item === 0 && 1 / item === inf) {
                return idx;
              }

              idx += 1;
            }

            return -1;
          } else if (a !== a) {
            // NaN
            while (idx < list.length) {
              item = list[idx];

              if (typeof item === 'number' && item !== item) {
                return idx;
              }

              idx += 1;
            }

            return -1;
          } // non-zero numbers can utilise Set


          return list.indexOf(a, idx);
        // all these types can utilise Set

        case 'string':
        case 'boolean':
        case 'function':
        case 'undefined':
          return list.indexOf(a, idx);

        case 'object':
          if (a === null) {
            // null can utilise Set
            return list.indexOf(a, idx);
          }

      }
    } // anything else not covered above, defer to R.equals


    while (idx < list.length) {
      if (equals(list[idx], a)) {
        return idx;
      }

      idx += 1;
    }

    return -1;
  }

  function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
  }

  function _quote(s) {
    var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
    return '"' + escaped.replace(/"/g, '\\"') + '"';
  }

  /**
   * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
   */
  var pad = function pad(n) {
    return (n < 10 ? '0' : '') + n;
  };

  var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
    return d.toISOString();
  } : function _toISOString(d) {
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
  };

  function _complement(f) {
    return function () {
      return !f.apply(this, arguments);
    };
  }

  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];

    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }

      idx += 1;
    }

    return result;
  }

  function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
  }

  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  var _xfilter = _curry2(function _xfilter(f, xf) {
    return new XFilter(f, xf);
  });

  /**
   * 使用 `predicate` 遍历传入的 `Filterable`，返回满足 `predicate` 的所有元素的新的 `Filterable`。新 `Filterable` 与原先的类型相同。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
   *
   * 若第二个参数自身存在 `filter` 方法，则调用自身的 `filter` 方法。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array} Filterable
   * @see R.reject, R.transduce, R.addIndex
   * @example
   *
   *      const isEven = n => n % 2 === 0;
   *
   *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */

  var filter = _curry2(_dispatchable(['fantasy-land/filter', 'filter'], _xfilter, function (pred, filterable) {
    return _isObject(filterable) ? _reduce(function (acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }

      return acc;
    }, {}, keys(filterable)) : // else
    _filter(pred, filterable);
  }));

  /**
   * [`filter`](#filter) 的补操作。返回结果为 [`R.filter`](#filter) 操作结果的补集。
   *
   * 若在列表位置给出 transformer，则用作 transducer。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> f a
   * @param {Function} pred
   * @param {Array} filterable
   * @return {Array}
   * @see R.filter, R.transduce, R.addIndex
   * @example
   *
   *      const isOdd = (n) => n % 2 !== 0;
   *
   *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
   *
   *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
   */

  var reject = _curry2(function reject(pred, filterable) {
    return filter(_complement(pred), filterable);
  });

  function _toString(x, seen) {
    var recur = function recur(y) {
      var xs = seen.concat([x]);
      return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
    }; //  mapPairs :: (Object, [String]) -> [String]


    var mapPairs = function mapPairs(obj, keys) {
      return _map(function (k) {
        return _quote(k) + ': ' + recur(obj[k]);
      }, keys.slice().sort());
    };

    switch (Object.prototype.toString.call(x)) {
      case '[object Arguments]':
        return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';

      case '[object Array]':
        return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
          return /^\d+$/.test(k);
        }, keys(x)))).join(', ') + ']';

      case '[object Boolean]':
        return _typeof(x) === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

      case '[object Date]':
        return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';

      case '[object Null]':
        return 'null';

      case '[object Number]':
        return _typeof(x) === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

      case '[object String]':
        return _typeof(x) === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);

      case '[object Undefined]':
        return 'undefined';

      default:
        if (typeof x.toString === 'function') {
          var repr = x.toString();

          if (repr !== '[object Object]') {
            return repr;
          }
        }

        return '{' + mapPairs(x, keys(x)).join(', ') + '}';
    }
  }

  /**
   * 返回代表输入元素的字符串。求得的输出结果应该等价于输入的值。许多内建的 `toString` 方法都不满足这一条件。
   *
   * 如果输入值是 `[object Object]` 对象，且自身含有 `toString` 方法（不是 `Object.prototype.toString` 方法），那么直接调用这个方法求返回值。这意味着，通过用户自定义的构造函数可以提供合适的 `toString` 方法。例如：
   *
   *     function Point(x, y) {
   *       this.x = x;
   *       this.y = y;
   *     }
   *
   *     Point.prototype.toString = function() {
   *       return 'new Point(' + this.x + ', ' + this.y + ')';
   *     };
   *
   *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category String
   * @sig * -> String
   * @param {*} val
   * @return {String}
   * @example
   *
   *      R.toString(42); //=> '42'
   *      R.toString('abc'); //=> '"abc"'
   *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
   *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
   *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
   */

  var toString$1 = _curry1(function toString(val) {
    return _toString(val, []);
  });

  /**
   * 连接列表或字符串。
   *
   * 注意：不同于 [`Array.prototype.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), `R.concat` 要求两个参数类型相同。 如果将 Array 与非 Array 连接，将抛出错误。
   *
   * 若第一个参数自身存在 `concat` 方法，则调用自身的 `concat`。
   *
   * 也可以用于连接 [符合 fantasy-land 半群](https://github.com/fantasyland/fantasy-land#semigroup) 类型的两个实例。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @sig String -> String -> String
   * @param {Array|String} firstList The first list
   * @param {Array|String} secondList The second list
   * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
   * `secondList`.
   *
   * @example
   *
   *      R.concat('ABC', 'DEF'); // 'ABCDEF'
   *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
   *      R.concat([], []); //=> []
   */

  var concat = _curry2(function concat(a, b) {
    if (_isArray(a)) {
      if (_isArray(b)) {
        return a.concat(b);
      }

      throw new TypeError(toString$1(b) + ' is not an array');
    }

    if (_isString(a)) {
      if (_isString(b)) {
        return a + b;
      }

      throw new TypeError(toString$1(b) + ' is not a string');
    }

    if (a != null && _isFunction(a['fantasy-land/concat'])) {
      return a['fantasy-land/concat'](b);
    }

    if (a != null && _isFunction(a.concat)) {
      return a.concat(b);
    }

    throw new TypeError(toString$1(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
  });

  /**
   * 返回一个封装了 `if / else，if / else, ...` 逻辑的函数 `fn`。 `R.cond` 接受列表元素为 [predicate，transformer] 的列表。 `fn` 的所有参数顺次作用于每个 predicate，直到有一个返回 "truthy" 值，此时相应 transformer 对参数处理，并作为 `fn` 的结果返回。 如果没有 predicate 匹配，则 `fn` 返回 undefined。
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Logic
   * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
   * @param {Array} pairs A list of [predicate, transformer]
   * @return {Function}
   * @see R.ifElse, R.unless, R.when
   * @example
   *
   *      const fn = R.cond([
   *        [R.equals(0),   R.always('water freezes at 0°C')],
   *        [R.equals(100), R.always('water boils at 100°C')],
   *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
   *      ]);
   *      fn(0); //=> 'water freezes at 0°C'
   *      fn(50); //=> 'nothing special happens at 50°C'
   *      fn(100); //=> 'water boils at 100°C'
   */

  var cond = _curry1(function cond(pairs) {
    var arity = reduce(max, 0, map(function (pair) {
      return pair[0].length;
    }, pairs));
    return _arity(arity, function () {
      var idx = 0;

      while (idx < pairs.length) {
        if (pairs[idx][0].apply(this, arguments)) {
          return pairs[idx][1].apply(this, arguments);
        }

        idx += 1;
      }
    });
  });

  /**
   * 对函数进行柯里化。柯里化函数与其他语言中的柯里化函数相比，有两个非常好的特性：
   *
   * 1. 参数不需要一次只传入一个。如果 `f` 是三元函数，`g` 是 `R.curry(f)` ，则下列写法是等价的：
   *
   *   - `g(1)(2)(3)`
   *   - `g(1)(2, 3)`
   *   - `g(1, 2)(3)`
   *   - `g(1, 2, 3)`
   *
   * 2. 占位符值 [`R.__`](#__) 可用于标记暂未传入参数的位置。允许部分应用于任何参数组合，而无需关心它们的位置和顺序。假设 `g` 定义如前所示，`_` 代表 [`R.__`](#__) ，则下列写法是等价的：
   *
   *   - `g(1, 2, 3)`
   *   - `g(_, 2, 3)(1)`
   *   - `g(_, _, 3)(1)(2)`
   *   - `g(_, _, 3)(1, 2)`
   *   - `g(_, 2)(1)(3)`
   *   - `g(_, 2)(1, 3)`
   *   - `g(_, 2)(_, 3)(1)`
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (* -> a) -> (* -> a)
   * @param {Function} fn The function to curry.
   * @return {Function} A new, curried function.
   * @see R.curryN, R.partial
   * @example
   *
   *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
   *
   *      const curriedAddFourNumbers = R.curry(addFourNumbers);
   *      const f = curriedAddFourNumbers(1, 2);
   *      const g = f(3);
   *      g(4); //=> 10
   */

  var curry = _curry1(function curry(fn) {
    return curryN(fn.length, fn);
  });

  /**
   * 将构造函数封装进柯里化函数，新函数与原构造函数的传入参数类型及返回值类型相同。为了能够使用变参的构造函数，返回函数的元数需要明确指定。
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Function
   * @sig Number -> (* -> {*}) -> (* -> {*})
   * @param {Number} n The arity of the constructor function.
   * @param {Function} Fn The constructor function to wrap.
   * @return {Function} A wrapped, curried constructor function.
   * @example
   *
   *      // Variadic Constructor function
   *      function Salad() {
   *        this.ingredients = arguments;
   *      }
   *
   *      Salad.prototype.recipe = function() {
   *        const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
   *        return R.join('\n', instructions);
   *      };
   *
   *      const ThreeLayerSalad = R.constructN(3, Salad);
   *
   *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
   *      const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
   *
   *      console.log(salad.recipe());
   *      // Add a dollop of Mayonnaise
   *      // Add a dollop of Potato Chips
   *      // Add a dollop of Ketchup
   */

  var constructN = _curry2(function constructN(n, Fn) {
    if (n > 10) {
      throw new Error('Constructor with greater than ten arguments');
    }

    if (n === 0) {
      return function () {
        return new Fn();
      };
    }

    return curry(nAry(n, function ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
      switch (arguments.length) {
        case 1:
          return new Fn($0);

        case 2:
          return new Fn($0, $1);

        case 3:
          return new Fn($0, $1, $2);

        case 4:
          return new Fn($0, $1, $2, $3);

        case 5:
          return new Fn($0, $1, $2, $3, $4);

        case 6:
          return new Fn($0, $1, $2, $3, $4, $5);

        case 7:
          return new Fn($0, $1, $2, $3, $4, $5, $6);

        case 8:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7);

        case 9:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);

        case 10:
          return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
      }
    }));
  });

  /**
   * 将构造函数封装进柯里化函数，新函数与原构造函数的传入参数类型及返回值类型相同。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (* -> {*}) -> (* -> {*})
   * @param {Function} fn The constructor function to wrap.
   * @return {Function} A wrapped, curried constructor function.
   * @see R.invoker
   * @example
   *
   *      // Constructor function
   *      function Animal(kind) {
   *        this.kind = kind;
   *      };
   *      Animal.prototype.sighting = function() {
   *        return "It's a " + this.kind + "!";
   *      }
   *
   *      const AnimalConstructor = R.construct(Animal)
   *
   *      // Notice we no longer need the 'new' keyword:
   *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
   *
   *      const animalTypes = ["Lion", "Tiger", "Bear"];
   *      const animalSighting = R.invoker(0, 'sighting');
   *      const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
   *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
   */

  var construct = _curry1(function construct(Fn) {
    return constructN(Fn.length, Fn);
  });

  /**
   * 接受一个 converging 函数和一个分支函数列表，返回一个新函数。新函数的元数（参数个数）等于最长分支函数的元数。当被调用时，新函数接受参数，并将这些参数转发给每个分支函数；然后将每个分支函数的计算结果作为参数传递给 converging 函数，converging 函数的计算结果即新函数的返回值。
   *
   * @func
   * @memberOf R
   * @since v0.4.2
   * @category Function
   * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
   * @param {Function} after A function. `after` will be invoked with the return values of
   *        `fn1` and `fn2` as its arguments.
   * @param {Array} functions A list of functions.
   * @return {Function} A new function.
   * @see R.useWith
   * @example
   *
   *      const average = R.converge(R.divide, [R.sum, R.length])
   *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
   *
   *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
   *      strangeConcat("Yodel") //=> "YODELyodel"
   *
   * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
   */

  var converge = _curry2(function converge(after, fns) {
    return curryN(reduce(max, 0, pluck('length', fns)), function () {
      var args = arguments;
      var context = this;
      return after.apply(context, _map(function (fn) {
        return fn.apply(context, args);
      }, fns));
    });
  });

  /**
   * 返回符合 predicate `f` 的列表的个数。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} predicate to match items against
   * @return {Array} list of items to count in
   * @example
   *
   *      const even = x => x % 2 == 0;
   *
   *      R.count(even, [1, 2, 3, 4, 5]); // => 2
   *      R.map(R.count(even), [[1, 1, 1], [2, 3, 4, 5], [6]]); // => [0, 2, 1]
   */

  var count = curry(function (pred, list) {
    return _reduce(function (a, e) {
      return pred(e) ? a + 1 : a;
    }, 0, list);
  });

  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }

  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;

  XReduceBy.prototype['@@transducer/result'] = function (result) {
    var key;

    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);

        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }

    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };

  XReduceBy.prototype['@@transducer/step'] = function (result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  var _xreduceBy = _curryN(4, [], function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
    return new XReduceBy(valueFn, valueAcc, keyFn, xf);
  });

  /**
   * 首先对列表中的每个元素调用函数 `keyFn` ，根据 `keyFn` 返回的字符串对列表元素进行分组。然后调用 reducer 函数 `valueFn`，对组内的元素进行折叠操作。
   *
   * 该函数相当于更通用的 [`groupBy`](#groupBy) 函数。
   *
   * 若在列表位置给出 transformer，则用做 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category List
   * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
   * @param {Function} valueFn The function that reduces the elements of each group to a single
   *        value. Receives two values, accumulator for a particular group and the current element.
   * @param {*} acc The (initial) accumulator value for each group.
   * @param {Function} keyFn The function that maps the list's element into a key.
   * @param {Array} list The array to group.
   * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
   *         `valueFn` for elements which produced that key when passed to `keyFn`.
   * @see R.groupBy, R.reduce, R.reduced
   * @example
   *
   *      const groupNames = (acc, {name}) => acc.concat(name)
   *      const toGrade = ({score}) =>
   *        score < 65 ? 'F' :
   *        score < 70 ? 'D' :
   *        score < 80 ? 'C' :
   *        score < 90 ? 'B' : 'A'
   *
   *      var students = [
   *        {name: 'Abby', score: 83},
   *        {name: 'Bart', score: 62},
   *        {name: 'Curt', score: 88},
   *        {name: 'Dora', score: 92},
   *      ]
   *
   *      reduceBy(groupNames, [], toGrade, students)
   *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
   */

  var reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function (acc, elt) {
      var key = keyFn(elt);
      var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);

      if (value && value['@@transducer/reduced']) {
        return _reduced(acc);
      }

      acc[key] = value;
      return acc;
    }, {}, list);
  }));

  /**
   * 根据给定函数提供的统计规则对列表中的元素进行分类计数。返回一个对象，其键值对为：`fn` 根据列表元素生成键，列表中通过 `fn` 映射为对应键的元素的个数作为值。注意，由于 JavaScript 对象的实现方式，所有键都被强制转换为字符串。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig (a -> String) -> [a] -> {*}
   * @param {Function} fn The function used to map values to keys.
   * @param {Array} list The list to count elements from.
   * @return {Object} An object mapping keys to number of occurrences in the list.
   * @example
   *
   *      const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
   *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
   *
   *      const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
   *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
   */

  var countBy = reduceBy(function (acc, elem) {
    return acc + 1;
  }, 0);

  /**
   * 减1。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n - 1
   * @see R.inc
   * @example
   *
   *      R.dec(42); //=> 41
   */

  var dec = add(-1);

  /**
   * 如果第二个参数不是 `null`、`undefined` 或 `NaN`，则返回第二个参数，否则返回第一个参数（默认值）。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {a} default The default value.
   * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
   * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
   * @example
   *
   *      const defaultTo42 = R.defaultTo(42);
   *
   *      defaultTo42(null);  //=> 42
   *      defaultTo42(undefined);  //=> 42
   *      defaultTo42(false);  //=> false
   *      defaultTo42('Ramda');  //=> 'Ramda'
   *      // parseInt('string') results in NaN
   *      defaultTo42(parseInt('string')); //=> 42
   */

  var defaultTo = _curry2(function defaultTo(d, v) {
    return v == null || v !== v ? d : v;
  });

  /**
   * 由返回值可与 `<` 和 `>` 比较的函数，创建一个降序比较函数。
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Function
   * @sig Ord b => (a -> b) -> a -> a -> Number
   * @param {Function} fn A function of arity one that returns a value that can be compared
   * @param {*} a The first item to be compared.
   * @param {*} b The second item to be compared.
   * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
   * @see R.ascend
   * @example
   *
   *      const byAge = R.descend(R.prop('age'));
   *      const people = [
   *        { name: 'Emma', age: 70 },
   *        { name: 'Peter', age: 78 },
   *        { name: 'Mikhail', age: 62 },
   *      ];
   *      const peopleByOldestFirst = R.sort(byAge, people);
   *        //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
   */

  var descend = _curry3(function descend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
  });

  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  } // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //


  _Set.prototype.add = function (item) {
    return !hasOrAdd(item, true, this);
  }; //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //


  _Set.prototype.has = function (item) {
    return hasOrAdd(item, false, this);
  }; //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //


  function hasOrAdd(item, shouldAdd, set) {
    var type = _typeof(item);

    var prevSize, newSize;

    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }

            return false;
          }
        } // these types can all utilise the native Set


        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;

            set._nativeSet.add(item);

            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }

            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }

            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;

          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }

            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }

          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;

            set._nativeSet.add(item);

            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }

            return false;
          }

          if (!_includes(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }

            return false;
          }

          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }

          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }

            return false;
          }

          return true;
        }

      /* falls through */

      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);

        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }

          return false;
        } // scan through all previously applied items


        if (!_includes(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }

          return false;
        }

        return true;
    }
  } // A simple Set type that honours R.equals semantics

  /**
   * 求差集。求第一个列表中，未包含在第二个列表中的任一元素的集合。对象和数组比较数值相等，而非引用相等。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` that are not in `list2`.
   * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
   * @example
   *
   *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
   *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
   *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
   */

  var difference = _curry2(function difference(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new _Set();

    for (var i = 0; i < secondLen; i += 1) {
      toFilterOut.add(second[i]);
    }

    while (idx < firstLen) {
      if (toFilterOut.add(first[idx])) {
        out[out.length] = first[idx];
      }

      idx += 1;
    }

    return out;
  });

  /**
   * 求第一个列表中未包含在第二个列表中的所有元素的集合（集合中没有重复元素）。两列表中的元素通过 predicate 判断相应元素是否同时 “包含在” 两列表中。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` that are not in `list2`.
   * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
   * @example
   *
   *      const cmp = (x, y) => x.a === y.a;
   *      const l1 = [{a: 1}, {a: 2}, {a: 3}];
   *      const l2 = [{a: 3}, {a: 4}];
   *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
   */

  var differenceWith = _curry3(function differenceWith(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;

    while (idx < firstLen) {
      if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
        out.push(first[idx]);
      }

      idx += 1;
    }

    return out;
  });

  /**
   * 删除列表中从 `start` 开始的 `count` 个元素。注意，该操作是非破坏性的：不改变原列表，返回处理后列表的拷贝。
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} start The position to start removing elements
   * @param {Number} count The number of elements to remove
   * @param {Array} list The list to remove from
   * @return {Array} A new Array with `count` elements from `start` removed.
   * @see R.without
   * @example
   *
   *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
   */

  var remove = _curry3(function remove(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
  });

  /**
   * Returns a new object that does not contain a `prop` property.
   *
   * @private
   * @param {String|Number} prop The name of the property to dissociate
   * @param {Object|Array} obj The object to clone
   * @return {Object} A new object equivalent to the original but without the specified property
   */

  function _dissoc(prop, obj) {
    if (obj == null) {
      return obj;
    }

    if (_isInteger(prop) && _isArray(obj)) {
      return remove(prop, 1, obj);
    }

    var result = {};

    for (var p in obj) {
      result[p] = obj[p];
    }

    delete result[prop];
    return result;
  }

  /**
   * 浅复制对象，删除返回对象中指定路径上的属性。
   *
   * 注意，这也会将 prototype 属性复制到新对象上并展开。所有 `non-primitive` 属性都通过引用复制。
   *
   * @private
   * @param {String|Integer} prop The prop operating
   * @param {Object|Array} obj The object to clone
   * @return {Object|Array} A new object equivalent to the original.
   */

  function _shallowCloneObject(prop, obj) {
    if (_isInteger(prop) && _isArray(obj)) {
      return [].concat(obj);
    }

    var result = {};

    for (var p in obj) {
      result[p] = obj[p];
    }

    return result;
  }
  /**
   * 浅复制对象，删除返回对象中指定路径上的属性。
   *
   * 注意，这也会将 prototype 属性复制到新对象上并展开。所有 `non-primitive` 属性都通过引用复制。
   *
   * @func
   * @memberOf R
   * @since v0.11.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig [Idx] -> {k: v} -> {k: v}
   * @param {Array} path The path to the value to omit
   * @param {Object} obj The object to clone
   * @return {Object} A new object without the property at path
   * @see R.assocPath
   * @example
   *
   *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
   */


  var dissocPath = _curry2(function dissocPath(path, obj) {
    if (obj == null) {
      return obj;
    }

    switch (path.length) {
      case 0:
        return obj;

      case 1:
        return _dissoc(path[0], obj);

      default:
        var head = path[0];
        var tail = Array.prototype.slice.call(path, 1);

        if (obj[head] == null) {
          return _shallowCloneObject(head, obj);
        } else {
          return assoc(head, dissocPath(tail, obj[head]), obj);
        }

    }
  });

  /**
   * 删除对象中指定 `prop` 属性。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Object
   * @sig String -> {k: v} -> {k: v}
   * @param {String} prop The name of the property to dissociate
   * @param {Object} obj The object to clone
   * @return {Object} A new object equivalent to the original but without the specified property
   * @see R.assoc, R.omit
   * @example
   *
   *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
   */

  var dissoc = _curry2(function dissoc(prop, obj) {
    return dissocPath([prop], obj);
  });

  /**
   * 两数相除。等价于 `a / b`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a / b`.
   * @see R.multiply
   * @example
   *
   *      R.divide(71, 100); //=> 0.71
   *
   *      const half = R.divide(R.__, 2);
   *      half(42); //=> 21
   *
   *      const reciprocal = R.divide(1);
   *      reciprocal(4);   //=> 0.25
   */

  var divide = _curry2(function divide(a, b) {
    return a / b;
  });

  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }

  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;

  XDrop.prototype['@@transducer/step'] = function (result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  var _xdrop = _curry2(function _xdrop(n, xf) {
    return new XDrop(n, xf);
  });

  /**
   * 删除给定 list，string 或者 transducer/transformer（或者具有 drop 方法的对象）的前 `n` 个元素。
   *
   * 若第二个参数自身存在 `drop` 方法，则调用自身的 `drop` 方法。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*} A copy of list without the first `n` elements
   * @see R.take, R.transduce, R.dropLast, R.dropWhile
   * @example
   *
   *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
   *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
   *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
   *      R.drop(3, 'ramda');               //=> 'da'
   */

  var drop = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
    return slice(Math.max(0, n), Infinity, xs);
  }));

  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }

  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;

  XTake.prototype['@@transducer/step'] = function (result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  var _xtake = _curry2(function _xtake(n, xf) {
    return new XTake(n, xf);
  });

  /**
   * 返回列表的前 `n` 个元素、字符串的前`n`个字符或者用作 transducer/transform（或者调用对象的 `take` 方法）。
   *
   * 如果第二个参数自身存在 `take` 方法，则调用自身的 `take` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n
   * @param {*} list
   * @return {*}
   * @see R.drop
   * @example
   *
   *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
   *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
   *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.take(3, 'ramda');               //=> 'ram'
   *
   *      const personnel = [
   *        'Dave Brubeck',
   *        'Paul Desmond',
   *        'Eugene Wright',
   *        'Joe Morello',
   *        'Gerry Mulligan',
   *        'Bob Bates',
   *        'Joe Dodge',
   *        'Ron Crotty'
   *      ];
   *
   *      const takeFive = R.take(5);
   *      takeFive(personnel);
   *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
   * @symb R.take(-1, [a, b]) = [a, b]
   * @symb R.take(0, [a, b]) = []
   * @symb R.take(1, [a, b]) = [a]
   * @symb R.take(2, [a, b]) = [a, b]
   */

  var take = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
    return slice(0, n < 0 ? Infinity : n, xs);
  }));

  function dropLast(n, xs) {
    return take(n < xs.length ? xs.length - n : 0, xs);
  }

  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }

  XDropLast.prototype['@@transducer/init'] = _xfBase.init;

  XDropLast.prototype['@@transducer/result'] = function (result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };

  XDropLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }

    this.store(input);
    return result;
  };

  XDropLast.prototype.store = function (input) {
    this.acc[this.pos] = input;
    this.pos += 1;

    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  var _xdropLast = _curry2(function _xdropLast(n, xf) {
    return new XDropLast(n, xf);
  });

  /**
   * 删除 "list" 末尾的 `n` 个元素。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n The number of elements of `list` to skip.
   * @param {Array} list The list of elements to consider.
   * @return {Array} A copy of the list with only the first `list.length - n` elements
   * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
   * @example
   *
   *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
   *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
   *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
   *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
   *      R.dropLast(3, 'ramda');               //=> 'ra'
   */

  var dropLast$1 = _curry2(_dispatchable([], _xdropLast, dropLast));

  function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;

    while (idx >= 0 && pred(xs[idx])) {
      idx -= 1;
    }

    return slice(0, idx + 1, xs);
  }

  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }

  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;

  XDropLastWhile.prototype['@@transducer/result'] = function (result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };

  XDropLastWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };

  XDropLastWhile.prototype.flush = function (result, input) {
    result = _reduce(this.xf['@@transducer/step'], result, this.retained);
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };

  XDropLastWhile.prototype.retain = function (result, input) {
    this.retained.push(input);
    return result;
  };

  var _xdropLastWhile = _curry2(function _xdropLastWhile(fn, xf) {
    return new XDropLastWhile(fn, xf);
  });

  /**
   * 对 list 从后向前一直删除满足 `predicate` 的尾部元素，直到遇到第一个 `falsy` 值，此时停止删除操作。
   *
   * `predicate` 需要作为第一个参数传入。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} predicate The function to be called on each element
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
   * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
   * @example
   *
   *      const lteThree = x => x <= 3;
   *
   *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
   *
   *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
   */

  var dropLastWhile$1 = _curry2(_dispatchable([], _xdropLastWhile, dropLastWhile));

  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;

  XDropRepeatsWith.prototype['@@transducer/step'] = function (result, input) {
    var sameAsLast = false;

    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }

    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  var _xdropRepeatsWith = _curry2(function _xdropRepeatsWith(pred, xf) {
    return new XDropRepeatsWith(pred, xf);
  });

  /**
   * 返回列表或字符串的最后一个元素。
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig [a] -> a | Undefined
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.init, R.head, R.tail
   * @example
   *
   *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
   *      R.last([]); //=> undefined
   *
   *      R.last('abc'); //=> 'c'
   *      R.last(''); //=> ''
   */

  var last = nth(-1);

  /**
   * 返回一个没有连续重复元素的 list。首个参数提供的 `predicate` 用于检测 list 中相邻的两个元素是否相等。一系列相等元素中的首个元素会被保留。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig ((a, a) -> Boolean) -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list The array to consider.
   * @return {Array} `list` without repeating elements.
   * @see R.transduce
   * @example
   *
   *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
   *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
   */

  var dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;

    if (len !== 0) {
      result[0] = list[0];

      while (idx < len) {
        if (!pred(last(result), list[idx])) {
          result[result.length] = list[idx];
        }

        idx += 1;
      }
    }

    return result;
  }));

  /**
   * 返回一个没有连续重复元素的 list。通过 [`R.equals`](#equls) 函数进行相等性判断。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig [a] -> [a]
   * @param {Array} list The array to consider.
   * @return {Array} `list` without repeating elements.
   * @see R.transduce
   * @example
   *
   *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
   */

  var dropRepeats = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;

  XDropWhile.prototype['@@transducer/step'] = function (result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }

      this.f = null;
    }

    return this.xf['@@transducer/step'](result, input);
  };

  var _xdropWhile = _curry2(function _xdropWhile(f, xf) {
    return new XDropWhile(f, xf);
  });

  /**
   * 对 list 从前向后删除满足 `predicate` 的头部元素，直到遇到第一个 `falsy` 值。
   *
   * `predicate` 需要作为第一个参数传入。
   *
   * 若第二个参数自身存在 `dropWhile` 方法，则调用自身的 `dropWhile` 方法。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.takeWhile, R.transduce, R.addIndex
   * @example
   *
   *      const lteTwo = x => x <= 2;
   *
   *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
   *
   *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
   */

  var dropWhile = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, xs) {
    var idx = 0;
    var len = xs.length;

    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }

    return slice(idx, Infinity, xs);
  }));

  /**
   * 逻辑或运算，
   *
   * 只要有一个参数为真（`truth-y`），就返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> b -> a | b
   * @param {Any} a
   * @param {Any} b
   * @return {Any}
   * @see R.either, R.and
   * @example
   *
   *      R.or(true, true); //=> true
   *      R.or(true, false); //=> true
   *      R.or(false, true); //=> true
   *      R.or(false, false); //=> false
   */

  var or = _curry2(function or(a, b) {
    return a || b;
  });

  /**
   * 返回由 `||` 运算符连接的两个函数的包装函数。如果两个函数中任一函数的执行结果为 `truth-y`，则返回其执行结果。
   * 注意，这个是短路表达式，意味着如果第一个函数返回 `truth-y` 值的话，第二个函数将不会执行。
   *
   * 除了函数之外， `R.either` 也接受任何符合 `fantasy-land` 标准的 `applicative functor` 。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
   * @param {Function} f a predicate
   * @param {Function} g another predicate
   * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
   * @see R.both, R.or
   * @example
   *
   *      const gt10 = x => x > 10;
   *      const even = x => x % 2 === 0;
   *      const f = R.either(gt10, even);
   *      f(101); //=> true
   *      f(8); //=> true
   *
   *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
   *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
   */

  var either = _curry2(function either(f, g) {
    return _isFunction(f) ? function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } : lift(or)(f, g);
  });

  /**
   * Tests whether or not an object is a typed array.
   *
   * @private
   * @param {*} val The object to test.
   * @return {Boolean} `true` if `val` is a typed array, `false` otherwise.
   * @example
   *
   *      _isTypedArray(new Uint8Array([])); //=> true
   *      _isTypedArray(new Float32Array([])); //=> true
   *      _isTypedArray([]); //=> false
   *      _isTypedArray(null); //=> false
   *      _isTypedArray({}); //=> false
   */
  function _isTypedArray(val) {
    var type = Object.prototype.toString.call(val);
    return type === '[object Uint8ClampedArray]' || type === '[object Int8Array]' || type === '[object Uint8Array]' || type === '[object Int16Array]' || type === '[object Uint16Array]' || type === '[object Int32Array]' || type === '[object Uint32Array]' || type === '[object Float32Array]' || type === '[object Float64Array]' || type === '[object BigInt64Array]' || type === '[object BigUint64Array]';
  }

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
    return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
      return arguments;
    }() : _isTypedArray(x) ? x.constructor.from('') : void 0 // else
    ;
  });

  /**
   * 返回列表的后 `n` 个元素。如果 `n > list.length`，则返回 `list.length` 个元素。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [a]
   * @sig Number -> String -> String
   * @param {Number} n The number of elements to return.
   * @param {Array} xs The collection to consider.
   * @return {Array}
   * @see R.dropLast
   * @example
   *
   *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
   *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
   *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
   *      R.takeLast(3, 'ramda');               //=> 'mda'
   */

  var takeLast = _curry2(function takeLast(n, xs) {
    return drop(n >= 0 ? xs.length - n : 0, xs);
  });

  /**
   * 检查列表是否以指定的子列表结尾。
   *
   * 同样的，检查字符串是否以指定的子字符串结尾。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category List
   * @sig [a] -> [a] -> Boolean
   * @sig String -> String -> Boolean
   * @param {*} suffix
   * @param {*} list
   * @return {Boolean}
   * @see R.startsWith
   * @example
   *
   *      R.endsWith('c', 'abc')                //=> true
   *      R.endsWith('b', 'abc')                //=> false
   *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
   *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
   */

  var endsWith = _curry2(function (suffix, list) {
    return equals(takeLast(suffix.length, list), suffix);
  });

  /**
   * 接受一个函数和两个值，通过传入函数对两个值进行相等性判断。如果两个值的计算结果相等，则返回 `true` ；否则返回 `false` 。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Relation
   * @sig (a -> b) -> a -> a -> Boolean
   * @param {Function} f
   * @param {*} x
   * @param {*} y
   * @return {Boolean}
   * @example
   *
   *      R.eqBy(Math.abs, 5, -5); //=> true
   */

  var eqBy = _curry3(function eqBy(f, x, y) {
    return equals(f(x), f(y));
  });

  /**
   * 判断两个对象指定的属性值是否相等。通过 [` R.equals`](#equals) 函数进行相等性判断。可用作柯里化的 `predicate` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig k -> {k: v} -> {k: v} -> Boolean
   * @param {String} prop The name of the property to compare
   * @param {Object} obj1
   * @param {Object} obj2
   * @return {Boolean}
   *
   * @example
   *
   *      const o1 = { a: 1, b: 2, c: 3, d: 4 };
   *      const o2 = { a: 10, b: 20, c: 3, d: 40 };
   *      R.eqProps('a', o1, o2); //=> false
   *      R.eqProps('c', o1, o2); //=> true
   */

  var eqProps = _curry3(function eqProps(prop, obj1, obj2) {
    return equals(obj1[prop], obj2[prop]);
  });

  /**
   * 递归地对 `object` 的属性进行变换，变换方式由 `transformation` 函数定义。所有非原始类型属性都通过引用来复制。
   *
   * 如果某个 `transformation` 函数对应的键在被变换的 `object` 中不存在，那么该方法将不会执行。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {k: (v -> v)} -> {k: v} -> {k: v}
   * @param {Object} transformations The object specifying transformation functions to apply
   *        to the object.
   * @param {Object} object The object to be transformed.
   * @return {Object} The transformed object.
   * @example
   *
   *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
   *      const transformations = {
   *        firstName: R.trim,
   *        lastName: R.trim, // Will not get invoked.
   *        data: {elapsed: R.add(1), remaining: R.add(-1)}
   *      };
   *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
   */

  var evolve = _curry2(function evolve(transformations, object) {
    if (!_isObject(object) && !_isArray(object)) {
      return object;
    }

    var result = object instanceof Array ? [] : {};
    var transformation, key, type;

    for (key in object) {
      transformation = transformations[key];
      type = _typeof(transformation);
      result[key] = type === 'function' ? transformation(object[key]) : transformation && type === 'object' ? evolve(transformation, object[key]) : object[key];
    }

    return result;
  });

  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }

  XFind.prototype['@@transducer/init'] = _xfBase.init;

  XFind.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }

    return this.xf['@@transducer/result'](result);
  };

  XFind.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }

    return result;
  };

  var _xfind = _curry2(function _xfind(f, xf) {
    return new XFind(f, xf);
  });

  /**
   * 查找并返回 list 中首个满足 `predicate` 的元素；如果未找到满足条件的元素，则返回 `undefined` 。
   *
   * 若第二个参数自身存在 `find` 方法，则调用自身的 `find` 方法。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> a | undefined
   * @param {Function} fn The predicate function used to determine if the element is the
   *        desired one.
   * @param {Array} list The array to consider.
   * @return {Object} The element found, or `undefined`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1}, {a: 2}, {a: 3}];
   *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
   *      R.find(R.propEq('a', 4))(xs); //=> undefined
   */

  var find = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (fn(list[idx])) {
        return list[idx];
      }

      idx += 1;
    }
  }));

  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }

  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;

  XFindIndex.prototype['@@transducer/result'] = function (result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }

    return this.xf['@@transducer/result'](result);
  };

  XFindIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;

    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }

    return result;
  };

  var _xfindIndex = _curry2(function _xfindIndex(f, xf) {
    return new XFindIndex(f, xf);
  });

  /**
   * 查找并返回 list 中首个满足 `predicate` 的元素的索引；如果未找到满足条件的元素，则返回 `-1` 。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Number} The index of the element found, or `-1`.
   * @see R.transduce, R.indexOf
   * @example
   *
   *      const xs = [{a: 1}, {a: 2}, {a: 3}];
   *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
   *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
   */

  var findIndex = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }

      idx += 1;
    }

    return -1;
  }));

  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFindLast.prototype['@@transducer/init'] = _xfBase.init;

  XFindLast.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };

  XFindLast.prototype['@@transducer/step'] = function (result, input) {
    if (this.f(input)) {
      this.last = input;
    }

    return result;
  };

  var _xfindLast = _curry2(function _xfindLast(f, xf) {
    return new XFindLast(f, xf);
  });

  /**
   * 查找并返回 list 中最后一个满足 `predicate` 的元素；如果未找到满足条件的元素，则返回 `undefined` 。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> a | undefined
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Object} The element found, or `undefined`.
   * @see R.transduce
   * @example
   *
   *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
   *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
   *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
   */

  var findLast = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
    var idx = list.length - 1;

    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }

      idx -= 1;
    }
  }));

  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }

  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;

  XFindLastIndex.prototype['@@transducer/result'] = function (result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };

  XFindLastIndex.prototype['@@transducer/step'] = function (result, input) {
    this.idx += 1;

    if (this.f(input)) {
      this.lastIdx = this.idx;
    }

    return result;
  };

  var _xfindLastIndex = _curry2(function _xfindLastIndex(f, xf) {
    return new XFindLastIndex(f, xf);
  });

  /**
   * 查找并返回 list 中最后一个满足 `predicate` 的元素的索引；如果未找到满足条件的元素，则返回 `-1` 。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> Number
   * @param {Function} fn The predicate function used to determine if the element is the
   * desired one.
   * @param {Array} list The array to consider.
   * @return {Number} The index of the element found, or `-1`.
   * @see R.transduce, R.lastIndexOf
   * @example
   *
   *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
   *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
   *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
   */

  var findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
    var idx = list.length - 1;

    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }

      idx -= 1;
    }

    return -1;
  }));

  /**
   * 获取 list 的所有元素（包含所有子数组中的元素），然后由这些元素组成一个新的数组。深度优先。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b]
   * @param {Array} list The array to consider.
   * @return {Array} The flattened list.
   * @see R.unnest
   * @example
   *
   *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
   *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   */

  var flatten = _curry1(_makeFlat(true));

  /**
   * 交换函数前两个参数的位置。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
   * @param {Function} fn The function to invoke with its first two parameters reversed.
   * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
   * @example
   *
   *      const mergeThree = (a, b, c) => [].concat(a, b, c);
   *
   *      mergeThree(1, 2, 3); //=> [1, 2, 3]
   *
   *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
   * @symb R.flip(f)(a, b, c) = f(b, a, c)
   */

  var flip = _curry1(function flip(fn) {
    return curryN(fn.length, function (a, b) {
      var args = Array.prototype.slice.call(arguments, 0);
      args[0] = b;
      args[1] = a;
      return fn.apply(this, args);
    });
  });

  /**
   * 遍历 `list`，对 list 中的每个元素执行方法 `fn`。
   *
   * `fn` 接收单个参数： *(value)*。
   *
   * 注意: `R.forEach` 并不会跳过已删除的或者未赋值的索引（sparse arrays），这一点和原生的 `Array.prototype.forEach` 方法不同. 获取更多相关信息, 请查阅: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
   *
   * 还要注意, 不同于 `Array.prototype.forEach`，Ramda 的 `forEach` 会将原数组返回。在某些库中，该方法也被称为 `each`.
   *
   * 若第二个参数自身存在 `forEach` 方法，则调用自身的 `forEach` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig (a -> *) -> [a] -> [a]
   * @param {Function} fn The function to invoke. Receives one argument, `value`.
   * @param {Array} list The list to iterate over.
   * @return {Array} The original list.
   * @see R.addIndex
   * @example
   *
   *      const printXPlusFive = x => console.log(x + 5);
   *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
   *      // logs 6
   *      // logs 7
   *      // logs 8
   * @symb R.forEach(f, [a, b, c]) = [a, b, c]
   */

  var forEach = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
    var len = list.length;
    var idx = 0;

    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }

    return list;
  }));

  /**
   * 遍历 `object`，对 `object` 中的每对 `key` 和 `value` 执行方法 `fn`。
   *
   * `fn` 接收三个参数: *(value, key, obj)*.
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Object
   * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
   * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
   * @param {Object} obj The object to iterate over.
   * @return {Object} The original object.
   * @example
   *
   *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
   *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
   *      // logs x:1
   *      // logs y:2
   * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
   */

  var forEachObjIndexed = _curry2(function forEachObjIndexed(fn, obj) {
    var keyList = keys(obj);
    var idx = 0;

    while (idx < keyList.length) {
      var key = keyList[idx];
      fn(obj[key], key, obj);
      idx += 1;
    }

    return obj;
  });

  /**
   * 由一系列 “键值对” 创建一个 `object`。如果某个键出现多次，选取最右侧的键值对。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [[k,v]] -> {k: v}
   * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
   * @return {Object} The object made by pairing up `keys` and `values`.
   * @see R.toPairs, R.pair
   * @example
   *
   *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
   */

  var fromPairs = _curry1(function fromPairs(pairs) {
    var result = {};
    var idx = 0;

    while (idx < pairs.length) {
      result[pairs[idx][0]] = pairs[idx][1];
      idx += 1;
    }

    return result;
  });

  /**
   * 将列表根据一定规则拆分成多组子列表，并存储在一个对象中。
   *
   * 对列表中的每个元素调用函数，根据函数返回结果进行分组。函数返回字符串作为相等性判断，返回的字符串作为存储对象的键，具有相同返回字符串的元素聚合为数组，作为该键的值。
   *
   * 若第二个参数自身存在 `groupBy` 方法，则调用自身的 `groupBy` 方法。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @typedefn Idx = String | Int | Symbol
   * @sig Idx a => (b -> a) -> [b] -> {a: [b]}
   * @param {Function} fn Function :: a -> Idx
   * @param {Array} list The array to group
   * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
   *         that produced that key when passed to `fn`.
   * @see R.reduceBy, R.transduce, R.indexBy
   * @example
   *
   *      const byGrade = R.groupBy(function(student) {
   *        const score = student.score;
   *        return score < 65 ? 'F' :
   *               score < 70 ? 'D' :
   *               score < 80 ? 'C' :
   *               score < 90 ? 'B' : 'A';
   *      });
   *      const students = [{name: 'Abby', score: 84},
   *                      {name: 'Eddy', score: 58},
   *                      // ...
   *                      {name: 'Jack', score: 69}];
   *      byGrade(students);
   *      // {
   *      //   'A': [{name: 'Dianne', score: 99}],
   *      //   'B': [{name: 'Abby', score: 84}]
   *      //   // ...,
   *      //   'F': [{name: 'Eddy', score: 58}]
   *      // }
   */

  var groupBy = _curry2(_checkForMethod('groupBy', reduceBy(function (acc, item) {
    acc.push(item);
    return acc;
  }, [])));

  /**
   * 通过给定的对比函数，将列表按顺序分割成多组子列表。
   *
   * 对比函数只比较相邻元素。
   *
   * @func
   * @memberOf R
   * @since v0.21.0
   * @category List
   * @sig ((a, a) → Boolean) → [a] → [[a]]
   * @param {Function} fn Function for determining whether two given (adjacent)
   *        elements should be in the same group
   * @param {Array} list The array to group. Also accepts a string, which will be
   *        treated as a list of characters.
   * @return {List} A list that contains sublists of elements,
   *         whose concatenations are equal to the original list.
   * @example
   *
   * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
   *
   * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
   *
   * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
   * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
   *
   * const isVowel = R.test(/^[aeiou]$/i);
   * R.groupWith(R.eqBy(isVowel), 'aestiou')
   * //=> ['ae', 'st', 'iou']
   */

  var groupWith = _curry2(function (fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;

    while (idx < len) {
      var nextidx = idx + 1;

      while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
        nextidx += 1;
      }

      res.push(list.slice(idx, nextidx));
      idx = nextidx;
    }

    return res;
  });

  /**
   * 如果首个参数大于第二个参数，返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @see R.lt
   * @example
   *
   *      R.gt(2, 1); //=> true
   *      R.gt(2, 2); //=> false
   *      R.gt(2, 3); //=> false
   *      R.gt('a', 'z'); //=> false
   *      R.gt('z', 'a'); //=> true
   */

  var gt = _curry2(function gt(a, b) {
    return a > b;
  });

  /**
   * 如果首个参数大于或等于第二个参数，返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {Number} a
   * @param {Number} b
   * @return {Boolean}
   * @see R.lte
   * @example
   *
   *      R.gte(2, 1); //=> true
   *      R.gte(2, 2); //=> true
   *      R.gte(2, 3); //=> false
   *      R.gte('a', 'z'); //=> false
   *      R.gte('z', 'a'); //=> true
   */

  var gte = _curry2(function gte(a, b) {
    return a >= b;
  });

  /**
   * 检查对象中是否存在指定的路径。只检查对象自身的属性。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig [Idx] -> {a} -> Boolean
   * @param {Array} path The path to use.
   * @param {Object} obj The object to check the path in.
   * @return {Boolean} Whether the path exists.
   * @see R.has
   * @example
   *
   *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
   *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
   *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
   *      R.hasPath(['a', 'b'], {});                  // => false
   */

  var hasPath = _curry2(function hasPath(_path, obj) {
    if (_path.length === 0 || isNil(obj)) {
      return false;
    }

    var val = obj;
    var idx = 0;

    while (idx < _path.length) {
      if (!isNil(val) && _has(_path[idx], val)) {
        val = val[_path[idx]];
        idx += 1;
      } else {
        return false;
      }
    }

    return true;
  });

  /**
   * 如果对象自身含有指定的属性，则返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      const hasName = R.has('name');
   *      hasName({name: 'alice'});   //=> true
   *      hasName({name: 'bob'});     //=> true
   *      hasName({});                //=> false
   *
   *      const point = {x: 0, y: 0};
   *      const pointHas = R.has(R.__, point);
   *      pointHas('x');  //=> true
   *      pointHas('y');  //=> true
   *      pointHas('z');  //=> false
   */

  var has = _curry2(function has(prop, obj) {
    return hasPath([prop], obj);
  });

  /**
   * 如果对象自身或其原型链上含有指定的属性，则返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category Object
   * @sig s -> {s: x} -> Boolean
   * @param {String} prop The name of the property to check for.
   * @param {Object} obj The object to query.
   * @return {Boolean} Whether the property exists.
   * @example
   *
   *      function Rectangle(width, height) {
   *        this.width = width;
   *        this.height = height;
   *      }
   *      Rectangle.prototype.area = function() {
   *        return this.width * this.height;
   *      };
   *
   *      const square = new Rectangle(2, 2);
   *      R.hasIn('width', square);  //=> true
   *      R.hasIn('area', square);  //=> true
   */

  var hasIn = _curry2(function hasIn(prop, obj) {
    if (isNil(obj)) {
      return false;
    }

    return prop in obj;
  });

  /**
   * 如果两个参数是完全相同，则返回 `true`，否则返回 `false`。如果它们引用相同的内存，也认为是完全相同的。`NaN` 和 `NaN` 是完全相同的；`0` 和 `-0` 不是完全相同的。
   *
   * **注意**：这只是 ES6 `Object.is` 的柯里化版本而已。
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category Relation
   * @sig a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @example
   *
   *      const o = {};
   *      R.identical(o, o); //=> true
   *      R.identical(1, 1); //=> true
   *      R.identical(1, '1'); //=> false
   *      R.identical([], []); //=> false
   *      R.identical(0, -0); //=> false
   *      R.identical(NaN, NaN); //=> true
   */

  var identical = function identical(a, b) {
    switch (arguments.length) {
      case 0:
        return identical;

      case 1:
        return function () {
          return function unaryIdentical(_b) {
            switch (arguments.length) {
              case 0:
                return unaryIdentical;

              default:
                return _objectIs$1(a, _b);
            }
          };
        }();

      default:
        return _objectIs$1(a, b);
    }
  }; // In order to support Cross-origin Window objects as arguments to identical,

  /**
   * 根据 `condition` predicate 的返回值调用 `onTrue` 或 `onFalse` 函数。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Logic
   * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
   * @param {Function} condition A predicate function
   * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
   * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
   * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
   *                    function depending upon the result of the `condition` predicate.
   * @see R.unless, R.when, R.cond
   * @example
   *
   *      const incCount = R.ifElse(
   *        R.has('count'),
   *        R.over(R.lensProp('count'), R.inc),
   *        R.assoc('count', 1)
   *      );
   *      incCount({ count: 1 }); //=> { count: 2 }
   *      incCount({});           //=> { count: 1 }
   */

  var ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
    return curryN(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
  });

  /**
   * 加1。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number} n + 1
   * @see R.dec
   * @example
   *
   *      R.inc(42); //=> 43
   */

  var inc = add(1);

  /**
   * 只要列表中有一个元素等于指定值，则返回 `true`；否则返回 `false`。通过 `R.equals` 函数进行相等性判断。
   *
   * 也可以判断字符串中是否包含指定值。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category List
   * @sig a -> [a] -> Boolean
   * @param {Object} a The item to compare against.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
   * @see R.any
   * @example
   *
   *      R.includes(3, [1, 2, 3]); //=> true
   *      R.includes(4, [1, 2, 3]); //=> false
   *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
   *      R.includes([42], [[42]]); //=> true
   *      R.includes('ba', 'banana'); //=>true
   */

  var includes = _curry2(_includes);

  /**
   * 通过生成键的函数，将元素为对象的 list 转换为以生成的键为索引的新对象。注意，如果 list 中多个对象元素生成相同的键，以最后一个对象元素作为该键的值。
   *
   * 若在 list 位置中给出 `transfomer` ，则用作 `transducer` 。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @typedefn Idx = String | Int | Symbol
   * @sig Idx a => (b -> a) -> [b] -> {a: b}
   * @param {Function} fn Function :: a -> Idx
   * @param {Array} array The array of objects to index
   * @return {Object} An object indexing each array element by the given property.
   * @see R.groupBy
   * @example
   *
   *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
   *      R.indexBy(R.prop('id'), list);
   *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
   */

  var indexBy = reduceBy(function (acc, elem) {
    return elem;
  }, null);

  /**
   * 返回给定元素在数组中首次出现时的索引值，如果数组中没有该元素，则返回 `-1`。通过 [`R.equals`](#equals) 函数进行相等性判断。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Number
   * @param {*} target The item to find.
   * @param {Array} xs The array to search in.
   * @return {Number} the index of the target, or -1 if the target is not found.
   * @see R.lastIndexOf, R.findIndex
   * @example
   *
   *      R.indexOf(3, [1,2,3,4]); //=> 2
   *      R.indexOf(10, [1,2,3,4]); //=> -1
   */

  var indexOf = _curry2(function indexOf(target, xs) {
    return typeof xs.indexOf === 'function' && !_isArray(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
  });

  /**
   * 返回 list 或 string 删除最后一个元素后的部分。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig [a] -> [a]
   * @sig String -> String
   * @param {*} list
   * @return {*}
   * @see R.last, R.head, R.tail
   * @example
   *
   *      R.init([1, 2, 3]);  //=> [1, 2]
   *      R.init([1, 2]);     //=> [1]
   *      R.init([1]);        //=> []
   *      R.init([]);         //=> []
   *
   *      R.init('abc');  //=> 'ab'
   *      R.init('ab');   //=> 'a'
   *      R.init('a');    //=> ''
   *      R.init('');     //=> ''
   */

  var init = slice(0, -1);

  /**
   * 接受一个 predicate `pred` 、列表 `xs` 和 `ys` ，返回列表 `xs'`。依次取出 `xs` 中的元素，若通过 `pred` 判断等于 `ys` 中的一个或多个元素，则放入 `xs'` 。
   *
   * `pred` 必须为二元函数，两个参数分别来自于对应两个列表中的元素。
   *
   * `xs`、`ys` 和 `xs'` 被当作集合处理，所以从语义上讲，元素的顺序并不重要，但由于 `xs'` 是列表（列表中元素有排列顺序），所以本实现保证 `xs'` 中元素的顺序与 `xs` 中的一致。重复的元素也不会被移除，因此，若 `xs` 中含重复元素，`xs'` 中也会包含元素。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Relation
   * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
   * @param {Function} pred
   * @param {Array} xs
   * @param {Array} ys
   * @return {Array}
   * @see R.intersection
   * @example
   *
   *      R.innerJoin(
   *        (record, id) => record.id === id,
   *        [{id: 824, name: 'Richie Furay'},
   *         {id: 956, name: 'Dewey Martin'},
   *         {id: 313, name: 'Bruce Palmer'},
   *         {id: 456, name: 'Stephen Stills'},
   *         {id: 177, name: 'Neil Young'}],
   *        [177, 456, 999]
   *      );
   *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
   */

  var innerJoin = _curry3(function innerJoin(pred, xs, ys) {
    return _filter(function (x) {
      return _includesWith(pred, x, ys);
    }, xs);
  });

  /**
   * 将元素插入到 list 指定索引处。注意，该函数是非破坏性的：返回处理后列表的拷贝。<small>函数运行过程中不会破坏任何列表。</small>
   *
   * @func
   * @memberOf R
   * @since v0.2.2
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} index The position to insert the element
   * @param {*} elt The element to insert into the Array
   * @param {Array} list The list to insert into
   * @return {Array} A new Array with `elt` inserted at `index`.
   * @example
   *
   *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
   */

  var insert = _curry3(function insert(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
  });

  /**
   * 将子 list 插入到 list 指定索引处。注意，该函数是非破坏性的：返回处理后列表的拷贝。<small>函数运行过程中不会破坏任何列表。</small>
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category List
   * @sig Number -> [a] -> [a] -> [a]
   * @param {Number} index The position to insert the sub-list
   * @param {Array} elts The sub-list to insert into the Array
   * @param {Array} list The list to insert the sub-list into
   * @return {Array} A new Array with `elts` inserted starting at `index`.
   * @example
   *
   *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
   */

  var insertAll = _curry3(function insertAll(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
  });

  function XUniqBy(f, xf) {
    this.xf = xf;
    this.f = f;
    this.set = new _Set();
  }

  XUniqBy.prototype['@@transducer/init'] = _xfBase.init;
  XUniqBy.prototype['@@transducer/result'] = _xfBase.result;

  XUniqBy.prototype['@@transducer/step'] = function (result, input) {
    return this.set.add(this.f(input)) ? this.xf['@@transducer/step'](result, input) : result;
  };

  var _xuniqBy = _curry2(function _xuniqBy(f, xf) {
    return new XUniqBy(f, xf);
  });

  /**
   * 返回无重复元素的列表。元素通过给定的函数的返回值以及 [`R.equals`](#equals) 进行相同性判断。如果给定的函数返回值相同，保留第一个元素。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> b) -> [a] -> [a]
   * @param {Function} fn A function used to produce a value to use during comparisons.
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
   */

  var uniqBy = _curry2(_dispatchable([], _xuniqBy, function (fn, list) {
    var set = new _Set();
    var result = [];
    var idx = 0;
    var appliedItem, item;

    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);

      if (set.add(appliedItem)) {
        result.push(item);
      }

      idx += 1;
    }

    return result;
  }));

  /**
   * 列表去重操作。返回无重复元素的列表。通过 [`R.equals`](#equals) 函数进行相等性判断。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [a]
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
   *      R.uniq([1, '1']);     //=> [1, '1']
   *      R.uniq([[42], [42]]); //=> [[42]]
   */

  var uniq = uniqBy(identity);

  /**
   * 取出两个 list 中相同的元素组成的 set （集合：没有重复元素）。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The list of elements found in both `list1` and `list2`.
   * @see R.innerJoin
   * @example
   *
   *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
   */

  var intersection = _curry2(function intersection(list1, list2) {
    var lookupList, filteredList;

    if (list1.length > list2.length) {
      lookupList = list1;
      filteredList = list2;
    } else {
      lookupList = list2;
      filteredList = list1;
    }

    return uniq(_filter(flip(_includes)(lookupList), filteredList));
  });

  /**
   * 在列表的元素之间插入分割元素。
   *
   * 若第二个参数自身存在 `intersperse` 方法，则调用自身的 `intersperse` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} separator The element to add to the list.
   * @param {Array} list The list to be interposed.
   * @return {Array} The new list.
   * @example
   *
   *      R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
   */

  var intersperse = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
    var out = [];
    var idx = 0;
    var length = list.length;

    while (idx < length) {
      if (idx === length - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }

      idx += 1;
    }

    return out;
  }));

  function _objectAssign(target) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);
    var idx = 1;
    var length = arguments.length;

    while (idx < length) {
      var source = arguments[idx];

      if (source != null) {
        for (var nextKey in source) {
          if (_has(nextKey, source)) {
            output[nextKey] = source[nextKey];
          }
        }
      }

      idx += 1;
    }

    return output;
  }

  var _objectAssign$1 = typeof Object.assign === 'function' ? Object.assign : _objectAssign;

  /**
   * 创建一个包含单个键值对的对象。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Object
   * @sig String -> a -> {String:a}
   * @param {String} key
   * @param {*} val
   * @return {Object}
   * @see R.pair
   * @example
   *
   *      const matchPhrases = R.compose(
   *        R.objOf('must'),
   *        R.map(R.objOf('match_phrase'))
   *      );
   *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
   */

  var objOf = _curry2(function objOf(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
  });

  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function transducerStep(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function transducerStep(a, b) {
      return a + b;
    },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function transducerStep(result, input) {
      return _objectAssign$1(result, _isArrayLike(input) ? objOf(input[0], input[1]) : input);
    },
    '@@transducer/result': _identity
  };
  function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }

    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }

    if (typeof obj === 'string') {
      return _stepCatString;
    }

    if (_typeof(obj) === 'object') {
      return _stepCatObject;
    }

    throw new Error('Cannot create transformer for ' + obj);
  }

  /**
   * 使用 transducer 对 list 中的元素进行转换，然后使用基于 accumulator 的类型的迭代器函数将转换后的元素依次添加到 accumulator 上。
   *
   * accumulator 的类型可以是：array、string、object 或者 transformer 。如果 accumulator 类型是 array 或 string，则迭代元素将被添加到数组或连接到字符串上；如果是对象，迭代元素将会被直接合并；如果是二元素数组，迭代元素会以键值对形式进行合并。
   *
   * accumulator 也可作为 transformer 对象，提供 transformer 所需要的二元 reducing iterator、step、零元 init 和 一元 result 函数。step 作为 reduce 过程中的迭代函数；result 将最终的 accumulator 转换为需要的返回类型（通常为 R.identity）；init 提供初始 accumulator。
   *
   * 在 transducer 初始化之后，使用 [`R.reduce`](#reduce) 进行迭代操作。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig a -> (b -> b) -> [c] -> a
   * @param {*} acc The initial accumulator value.
   * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.transduce
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
   *
   *      R.into([], transducer, numbers); //=> [2, 3]
   *
   *      const intoArray = R.into([]);
   *      intoArray(transducer, numbers); //=> [2, 3]
   */

  var into = _curry3(function into(acc, xf, list) {
    return _isTransformer(acc) ? _reduce(xf(acc), acc['@@transducer/init'](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
  });

  /**
   * 与 [`R.invertObj`](#invertObj) 类似，但会将值放入数组中，来处理一个键对应多个值的情况。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {s: x} -> {x: [ s, ... ]}
   * @param {Object} obj The object or array to invert
   * @return {Object} out A new object with keys in an array.
   * @see R.invertObj
   * @example
   *
   *      const raceResultsByFirstName = {
   *        first: 'alice',
   *        second: 'jake',
   *        third: 'alice',
   *      };
   *      R.invert(raceResultsByFirstName);
   *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
   */

  var invert = _curry1(function invert(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};

    while (idx < len) {
      var key = props[idx];
      var val = obj[key];
      var list = _has(val, out) ? out[val] : out[val] = [];
      list[list.length] = key;
      idx += 1;
    }

    return out;
  });

  /**
   * 将对象的键、值交换位置：值作为键，对应的键作为值。交换后的键会被强制转换为字符串。注意，如果原对象同一值对应多个键，采用最后遍历到的键。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig {s: x} -> {x: s}
   * @param {Object} obj The object or array to invert
   * @return {Object} out A new object
   * @see R.invert
   * @example
   *
   *      const raceResults = {
   *        first: 'alice',
   *        second: 'jake'
   *      };
   *      R.invertObj(raceResults);
   *      //=> { 'alice': 'first', 'jake':'second' }
   *
   *      // Alternatively:
   *      const raceResults = ['alice', 'jake'];
   *      R.invertObj(raceResults);
   *      //=> { 'alice': '0', 'jake':'1' }
   */

  var invertObj = _curry1(function invertObj(obj) {
    var props = keys(obj);
    var len = props.length;
    var idx = 0;
    var out = {};

    while (idx < len) {
      var key = props[idx];
      out[obj[key]] = key;
      idx += 1;
    }

    return out;
  });

  /**
   * 将具有指定元数（参数个数）的具名方法，转换为可以被给定参数和目标对象直接调用的函数。
   *
   * 返回的函数是柯里化的，它接收 `arity + 1` 个参数，其中最后一个参数是目标对象。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
   * @param {Number} arity Number of arguments the returned function should take
   *        before the target object.
   * @param {String} method Name of any of the target object's methods to call.
   * @return {Function} A new curried function.
   * @see R.construct
   * @example
   *
   *      const sliceFrom = R.invoker(1, 'slice');
   *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
   *      const sliceFrom6 = R.invoker(2, 'slice')(6);
   *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
   *
   *      const dog = {
   *        speak: async () => 'Woof!'
   *      };
   *      const speak = R.invoker(0, 'speak');
   *      speak(dog).then(console.log) //~> 'Woof!'
   *
   * @symb R.invoker(0, 'method')(o) = o['method']()
   * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
   * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
   */

  var invoker = _curry2(function invoker(arity, method) {
    return curryN(arity + 1, function () {
      var target = arguments[arity];

      if (target != null && _isFunction(target[method])) {
        return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
      }

      throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
    });
  });

  /**
   * 检测一个对象（`val`）是否是给定构造函数的实例。该函数会依次检测其原型链，如果存在的话。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Type
   * @sig (* -> {*}) -> a -> Boolean
   * @param {Object} ctor A constructor
   * @param {*} val The value to test
   * @return {Boolean}
   * @example
   *
   *      R.is(Object, {}); //=> true
   *      R.is(Number, 1); //=> true
   *      R.is(Object, 1); //=> false
   *      R.is(String, 's'); //=> true
   *      R.is(String, new String('')); //=> true
   *      R.is(Object, new String('')); //=> true
   *      R.is(Object, 's'); //=> false
   *      R.is(Number, {}); //=> false
   */

  var is = _curry2(function is(Ctor, val) {
    return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === 'Object' && _typeof(val) === 'object');
  });

  /**
   * 检测给定值是否为其所属类型的空值，若是则返回 `true` ；否则返回 `false` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Logic
   * @sig a -> Boolean
   * @param {*} x
   * @return {Boolean}
   * @see R.empty
   * @example
   *
   *      R.isEmpty([1, 2, 3]);           //=> false
   *      R.isEmpty([]);                  //=> true
   *      R.isEmpty('');                  //=> true
   *      R.isEmpty(null);                //=> false
   *      R.isEmpty({});                  //=> true
   *      R.isEmpty({length: 0});         //=> false
   *      R.isEmpty(Uint8Array.from('')); //=> true
   */

  var isEmpty = _curry1(function isEmpty(x) {
    return x != null && equals(x, empty(x));
  });

  /**
   * 将列表中所有元素通过 `分隔符` 串连为一个字符串。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig String -> [a] -> String
   * @param {Number|String} separator The string used to separate the elements.
   * @param {Array} xs The elements to join into a string.
   * @return {String} str The string made by concatenating `xs` with `separator`.
   * @see R.split
   * @example
   *
   *      const spacer = R.join(' ');
   *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
   *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
   */

  var join = invoker(1, 'join');

  /**
   * `juxt` 将函数列表作用于值列表。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Function
   * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
   * @param {Array} fns An array of functions
   * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
   * @see R.applySpec
   * @example
   *
   *      const getRange = R.juxt([Math.min, Math.max]);
   *      getRange(3, 4, 9, -3); //=> [-3, 9]
   * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
   */

  var juxt = _curry1(function juxt(fns) {
    return converge(function () {
      return Array.prototype.slice.call(arguments, 0);
    }, fns);
  });

  /**
   * 返回给定对象所有属性（包括 prototype 属性）的属性名组成的列表。注意，不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @sig {k: v} -> [k]
   * @param {Object} obj The object to extract properties from
   * @return {Array} An array of the object's own and prototype properties.
   * @see R.keys, R.valuesIn
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.keysIn(f); //=> ['x', 'y']
   */

  var keysIn = _curry1(function keysIn(obj) {
    var prop;
    var ks = [];

    for (prop in obj) {
      ks[ks.length] = prop;
    }

    return ks;
  });

  /**
   * 返回数组中某元素最后一次出现的位置，如果数组中不包含该项则返回 -1 。通过 [`R.equals`](#equals) 函数进行相等性判断。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> Number
   * @param {*} target The item to find.
   * @param {Array} xs The array to search in.
   * @return {Number} the index of the target, or -1 if the target is not found.
   * @see R.indexOf, R.findLastIndex
   * @example
   *
   *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
   *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
   */

  var lastIndexOf = _curry2(function lastIndexOf(target, xs) {
    if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
      return xs.lastIndexOf(target);
    } else {
      var idx = xs.length - 1;

      while (idx >= 0) {
        if (equals(xs[idx], target)) {
          return idx;
        }

        idx -= 1;
      }

      return -1;
    }
  });

  function _isNumber(x) {
    return Object.prototype.toString.call(x) === '[object Number]';
  }

  /**
   * 通过 `list.length`，返回数组的大小（数组中元素的数量）。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [a] -> Number
   * @param {Array} list The array to inspect.
   * @return {Number} The length of the array.
   * @example
   *
   *      R.length([]); //=> 0
   *      R.length([1, 2, 3]); //=> 3
   */

  var length = _curry1(function length(list) {
    return list != null && _isNumber(list.length) ? list.length : NaN;
  });

  /**
   * 返回封装了给定 getter 和 setter 方法的 lens 。 getter 和 setter 分别用于 “获取” 和 “设置” 焦点（`lens` 聚焦的值）。setter 不会改变原数据。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
   * @param {Function} getter
   * @param {Function} setter
   * @return {Lens}
   * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
   * @example
   *
   *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
   *
   *      R.view(xLens, {x: 1, y: 2});            //=> 1
   *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
   *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
   */

  var lens = _curry2(function lens(getter, setter) {
    return function (toFunctorFn) {
      return function (target) {
        return map(function (focus) {
          return setter(focus, target);
        }, toFunctorFn(getter(target)));
      };
    };
  });

  /**
   * 替换数组中指定索引处的值。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category List
   * @sig Number -> a -> [a] -> [a]
   * @param {Number} idx The index to update.
   * @param {*} x The value to exist at the given index of the returned array.
   * @param {Array|Arguments} list The source array-like object to be updated.
   * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
   * @see R.adjust
   * @example
   *
   *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
   *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
   * @symb R.update(-1, a, [b, c]) = [b, a]
   * @symb R.update(0, a, [b, c]) = [a, c]
   * @symb R.update(1, a, [b, c]) = [b, a]
   */

  var update = _curry3(function update(idx, x, list) {
    return adjust(idx, always(x), list);
  });

  /**
   * 返回聚焦到指定索引的 lens。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Number -> Lens s a
   * @param {Number} n
   * @return {Lens}
   * @see R.view, R.set, R.over, R.nth
   * @example
   *
   *      const headLens = R.lensIndex(0);
   *
   *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
   *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
   *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
   */

  var lensIndex = _curry1(function lensIndex(n) {
    return lens(nth(n), update(n));
  });

  /**
   * 提取对象中指定路径数组（paths）上的对应的值（values）
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category Object
   * @typedefn Idx = [String | Int | Symbol]
   * @sig [Idx] -> {a} -> [a | Undefined]
   * @param {Array} pathsArray The array of paths to be fetched.
   * @param {Object} obj The object to retrieve the nested properties from.
   * @return {Array} A list consisting of values at paths specified by "pathsArray".
   * @see R.path
   * @example
   *
   *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
   *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
   */

  var paths = _curry2(function paths(pathsArray, obj) {
    return pathsArray.map(function (paths) {
      var val = obj;
      var idx = 0;
      var p;

      while (idx < paths.length) {
        if (val == null) {
          return;
        }

        p = paths[idx];
        val = _isInteger(p) ? nth(p, val) : val[p];
        idx += 1;
      }

      return val;
    });
  });

  /**
   * 取出给定路径上的值。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig [Idx] -> {a} -> a | Undefined
   * @param {Array} path The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path`.
   * @see R.prop, R.nth
   * @example
   *
   *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
   *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
   *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
   */

  var path = _curry2(function path(pathAr, obj) {
    return paths([pathAr], obj)[0];
  });

  /**
   * 返回聚焦到指定路径的 lens。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig [Idx] -> Lens s a
   * @param {Array} path The path to use.
   * @return {Lens}
   * @see R.view, R.set, R.over
   * @example
   *
   *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
   *
   *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> 2
   *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
   *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
   *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
   */

  var lensPath = _curry1(function lensPath(p) {
    return lens(path(p), assocPath(p));
  });

  /**
   * 返回聚焦到指定属性的 lens。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig String -> Lens s a
   * @param {String} k
   * @return {Lens}
   * @see R.view, R.set, R.over
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.view(xLens, {x: 1, y: 2});            //=> 1
   *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
   *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
   */

  var lensProp = _curry1(function lensProp(k) {
    return lens(prop(k), assoc(k));
  });

  /**
   * 如果首个参数小于第二个参数，返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {*} a
   * @param {*} b
   * @return {Boolean}
   * @see R.gt
   * @example
   *
   *      R.lt(2, 1); //=> false
   *      R.lt(2, 2); //=> false
   *      R.lt(2, 3); //=> true
   *      R.lt('a', 'z'); //=> true
   *      R.lt('z', 'a'); //=> false
   */

  var lt = _curry2(function lt(a, b) {
    return a < b;
  });

  /**
   * 如果首个参数小于或等于第二个参数，返回 `true`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> Boolean
   * @param {Number} a
   * @param {Number} b
   * @return {Boolean}
   * @see R.gte
   * @example
   *
   *      R.lte(2, 1); //=> false
   *      R.lte(2, 2); //=> true
   *      R.lte(2, 3); //=> true
   *      R.lte('a', 'z'); //=> true
   *      R.lte('z', 'a'); //=> false
   */

  var lte = _curry2(function lte(a, b) {
    return a <= b;
  });

  /**
   * `mapAccum` 的行为类似于 map 和 reduce 的组合；它将迭代函数作用于列表中的每个元素，从左往右传递经迭代函数计算的累积值，并将最后的累积值和由所有中间的累积值组成的列表一起返回。

   * 迭代函数接收两个参数，*acc* 和 *value*， 返回一个元组 *[acc, value]*。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.scan, R.addIndex, R.mapAccumRight
   * @example
   *
   *      const digits = ['1', '2', '3', '4'];
   *      const appender = (a, b) => [a + b, a + b];
   *
   *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
   * @symb R.mapAccum(f, a, [b, c, d]) = [
   *   f(f(f(a, b)[0], c)[0], d)[0],
   *   [
   *     f(a, b)[1],
   *     f(f(a, b)[0], c)[1],
   *     f(f(f(a, b)[0], c)[0], d)[1]
   *   ]
   * ]
   */

  var mapAccum = _curry3(function mapAccum(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [acc];

    while (idx < len) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx += 1;
    }

    return [tuple[0], result];
  });

  /**
   * `mapAccumRight` 的行为类似于 map 和 reduce 的组合；它将迭代函数作用于列表中的每个元素，从右往左传递经迭代函数计算的累积值，并将最后的累积值和由所有中间的累积值组成的列表一起返回。
   *
   * 和 [`mapAccum`](#mapAccum) 类似，除了列表遍历顺序是从右往左的。
   *
   * 迭代函数接收两个参数，*acc* 和 *value* ，返回一个元组 *[acc, value]*。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
   * @param {Function} fn The function to be called on every element of the input `list`.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.addIndex, R.mapAccum
   * @example
   *
   *      const digits = ['1', '2', '3', '4'];
   *      const appender = (a, b) => [b + a, b + a];
   *
   *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
   * @symb R.mapAccumRight(f, a, [b, c, d]) = [
   *   f(f(f(a, d)[0], c)[0], b)[0],
   *   [
   *     f(a, d)[1],
   *     f(f(a, d)[0], c)[1],
   *     f(f(f(a, d)[0], c)[0], b)[1]
   *   ]
   * ]
   */

  var mapAccumRight = _curry3(function mapAccumRight(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [acc];

    while (idx >= 0) {
      tuple = fn(tuple[0], list[idx]);
      result[idx] = tuple[1];
      idx -= 1;
    }

    return [tuple[0], result];
  });

  /**
   * `Object` 版本的 [`map`](#map)。mapping function 接受三个参数： *(value, key, obj)* 。如果仅用到参数 *value*，则用 [`map`](#map) 即可。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Object
   * @sig ((*, String, Object) -> *) -> Object -> Object
   * @param {Function} fn
   * @param {Object} obj
   * @return {Object}
   * @see R.map
   * @example
   *
   *      const xyz = { x: 1, y: 2, z: 3 };
   *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
   *
   *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
   */

  var mapObjIndexed = _curry2(function mapObjIndexed(fn, obj) {
    return _reduce(function (acc, key) {
      acc[key] = fn(obj[key], key, obj);
      return acc;
    }, {}, keys(obj));
  });

  /**
   * 正则匹配字符串。注意，如果没有匹配项，则返回空数组。和 [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) 不同，后者在没有匹配项时会返回 `null`。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category String
   * @sig RegExp -> String -> [String | Undefined]
   * @param {RegExp} rx A regular expression.
   * @param {String} str The string to match against
   * @return {Array} The list of matches or empty array.
   * @see R.test
   * @example
   *
   *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
   *      R.match(/a/, 'b'); //=> []
   *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
   */

  var match = _curry2(function match(rx, str) {
    return str.match(rx) || [];
  });

  /**
   * `mathMod` 和算术取模操作类似，而不像 `%` 操作符 （或 [`R.modulo`](#modulo)）。所以 `-17 % 5` 等于 `-2`，而 `mathMod(-17, 5)` 等于 `3` 。`mathMod` 要求参数为整型，并且当模数等于 0 或者负数时返回 NaN 。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} m The dividend.
   * @param {Number} p the modulus.
   * @return {Number} The result of `b mod a`.
   * @see R.modulo
   * @example
   *
   *      R.mathMod(-17, 5);  //=> 3
   *      R.mathMod(17, 5);   //=> 2
   *      R.mathMod(17, -5);  //=> NaN
   *      R.mathMod(17, 0);   //=> NaN
   *      R.mathMod(17.2, 5); //=> NaN
   *      R.mathMod(17, 5.3); //=> NaN
   *
   *      const clock = R.mathMod(R.__, 12);
   *      clock(15); //=> 3
   *      clock(24); //=> 0
   *
   *      const seventeenMod = R.mathMod(17);
   *      seventeenMod(3);  //=> 2
   *      seventeenMod(4);  //=> 1
   *      seventeenMod(10); //=> 7
   */

  var mathMod = _curry2(function mathMod(m, p) {
    if (!_isInteger(m)) {
      return NaN;
    }

    if (!_isInteger(p) || p < 1) {
      return NaN;
    }

    return (m % p + p) % p;
  });

  /**
   * 接收一个函数和两个值，返回使给定函数执行结果较大的值。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Relation
   * @sig Ord b => (a -> b) -> a -> a -> a
   * @param {Function} f
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.max, R.minBy
   * @example
   *
   *      //  square :: Number -> Number
   *      const square = n => n * n;
   *
   *      R.maxBy(square, -3, 2); //=> -3
   *
   *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
   *      R.reduce(R.maxBy(square), 0, []); //=> 0
   */

  var maxBy = _curry3(function maxBy(f, a, b) {
    return f(b) > f(a) ? b : a;
  });

  /**
   * 对数组中所有元素求和。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list An array of numbers
   * @return {Number} The sum of all the numbers in the list.
   * @see R.reduce
   * @example
   *
   *      R.sum([2,4,6,8,100,1]); //=> 121
   */

  var sum = reduce(add, 0);

  /**
   * 返回给定数字列表的平均值。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @see R.median
   * @example
   *
   *      R.mean([2, 7, 9]); //=> 6
   *      R.mean([]); //=> NaN
   */

  var mean = _curry1(function mean(list) {
    return sum(list) / list.length;
  });

  /**
   * 返回给定数字列表的中位数。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list
   * @return {Number}
   * @see R.mean
   * @example
   *
   *      R.median([2, 9, 7]); //=> 7
   *      R.median([7, 2, 10, 9]); //=> 8
   *      R.median([]); //=> NaN
   */

  var median = _curry1(function median(list) {
    var len = list.length;

    if (len === 0) {
      return NaN;
    }

    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return mean(Array.prototype.slice.call(list, 0).sort(function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
  });

  /**
   * 创建一个新函数，当调用时，会执行原函数，输出结果；并且缓存本次的输入参数及其对应的结果。
   * 后续，若用相同的参数对缓存函数进行调用，不会再执行原函数，而是直接返回该参数对应的缓存值。
   *
   * `memoizeWith` 接受两个函数，第一个会将输入参数序列化为缓存键值对的“键值”，第二个是需要缓存的函数。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Function
   * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
   * @param {Function} fn The function to generate the cache key.
   * @param {Function} fn The function to memoize.
   * @return {Function} Memoized version of `fn`.
   * @example
   *
   *      let count = 0;
   *      const factorial = R.memoizeWith(Number, n => {
   *        count += 1;
   *        return R.product(R.range(1, n + 1));
   *      });
   *      factorial(5); //=> 120
   *      factorial(5); //=> 120
   *      factorial(5); //=> 120
   *      count; //=> 1
   */

  var memoizeWith = _curry2(function memoizeWith(mFn, fn) {
    var cache = {};
    return _arity(fn.length, function () {
      var key = mFn.apply(this, arguments);

      if (!_has(key, cache)) {
        cache[key] = fn.apply(this, arguments);
      }

      return cache[key];
    });
  });

  /**
   * 将对象类型列表合并为一个对象。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig [{k: v}] -> {k: v}
   * @param {Array} list An array of objects
   * @return {Object} A merged object.
   * @see R.reduce
   * @example
   *
   *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
   *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
   * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
   */

  var mergeAll = _curry1(function mergeAll(list) {
    return _objectAssign$1.apply(null, [{}].concat(list));
  });

  /**
   * 使用给定的两个对象自身属性（不包括 prototype 属性）来创建一个新对象。
   *
   * 如果某个 key 在两个对象中都存在，则使用给定的函数对该 key 和每个对象该 key 对应的 value 进行处理，处理结果作为新对象该 key 对应的值。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeDeepWithKey, R.merge, R.mergeWith
   * @example
   *
   *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
   *      R.mergeWithKey(concatValues,
   *                     { a: true, thing: 'foo', values: [10, 20] },
   *                     { b: true, thing: 'bar', values: [15, 35] });
   *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
   * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
   */

  var mergeWithKey = _curry3(function mergeWithKey(fn, l, r) {
    var result = {};
    var k;
    l = l || {};
    r = r || {};

    for (k in l) {
      if (_has(k, l)) {
        result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
      }
    }

    for (k in r) {
      if (_has(k, r) && !_has(k, result)) {
        result[k] = r[k];
      }
    }

    return result;
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
   *
   * - 并且两个关联的值都是对象，则继续递归合并这两个值。
   * - 否则，使用给定函数对该 key 和对应的两个值进行处理，并将返回值作为该 key 的新值。
   *
   * 如果某 key 只存在于一个对象中，该键值对将作为结果对象的键值对。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.mergeWithKey, R.mergeDeepWith
   * @example
   *
   *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
   *      R.mergeDeepWithKey(concatValues,
   *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
   *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
   *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
   */

  var mergeDeepWithKey = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
    return mergeWithKey(function (k, lVal, rVal) {
      if (_isObject(lVal) && _isObject(rVal)) {
        return mergeDeepWithKey(fn, lVal, rVal);
      } else {
        return fn(k, lVal, rVal);
      }
    }, lObj, rObj);
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
   *
   * - 并且两个值都是对象，则继续递归合并这两个值。
   * - 否则，采用第一个对象的值。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig {a} -> {a} -> {a}
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
   *                      { age: 40, contact: { email: 'baa@example.com' }});
   *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
   */

  var mergeDeepLeft = _curry2(function mergeDeepLeft(lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return lVal;
    }, lObj, rObj);
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
   *
   * - 并且两个值都是对象，则继续递归合并这两个值。
   * - 否则，采用第二个对象的值。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig {a} -> {a} -> {a}
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
   *                       { age: 40, contact: { email: 'baa@example.com' }});
   *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
   */

  var mergeDeepRight = _curry2(function mergeDeepRight(lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return rVal;
    }, lObj, rObj);
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在：
   *
   * - 并且两个关联的值都是对象，则继续递归合并这两个值。
   * - 否则，使用给定函数对两个值进行处理，并将返回值作为该 key 的新值。
   *
   * 如果某 key 只存在于一个对象中，该键值对将作为结果对象的键值对。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Object
   * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} lObj
   * @param {Object} rObj
   * @return {Object}
   * @see R.mergeWith, R.mergeDeepWithKey
   * @example
   *
   *      R.mergeDeepWith(R.concat,
   *                      { a: true, c: { values: [10, 20] }},
   *                      { b: true, c: { values: [15, 35] }});
   *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
   */

  var mergeDeepWith = _curry3(function mergeDeepWith(fn, lObj, rObj) {
    return mergeDeepWithKey(function (k, lVal, rVal) {
      return fn(lVal, rVal);
    }, lObj, rObj);
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在，使用前一个对象对应的属性值。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
   * @example
   *
   *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const resetToDefault = R.mergeLeft({x: 0});
   *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
   * @symb R.mergeLeft(a, b) = {...b, ...a}
   */

  var mergeLeft = _curry2(function mergeLeft(l, r) {
    return _objectAssign$1({}, r, l);
  });

  /**
   * 合并两个对象的自身属性（不包括 prototype 属性）。如果某个 key 在两个对象中都存在，使用后一个对象对应的属性值。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Object
   * @sig {k: v} -> {k: v} -> {k: v}
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
   * @example
   *
   *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
   *      //=> { 'name': 'fred', 'age': 40 }
   *
   *      const withDefaults = R.mergeRight({x: 0, y: 0});
   *      withDefaults({y: 2}); //=> {x: 0, y: 2}
   * @symb R.mergeRight(a, b) = {...a, ...b}
   */

  var mergeRight = _curry2(function mergeRight(l, r) {
    return _objectAssign$1({}, l, r);
  });

  /**
   * 使用给定的两个对象自身属性（不包括 prototype 属性）来创建一个新对象。
   *
   * 如果某个 key 在两个对象中都存在，则使用给定的函数对每个对象该 key 对应的 value 进行处理，处理结果作为新对象该 key 对应的值。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Object
   * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
   * @param {Function} fn
   * @param {Object} l
   * @param {Object} r
   * @return {Object}
   * @see R.mergeDeepWith, R.merge, R.mergeWithKey
   * @example
   *
   *      R.mergeWith(R.concat,
   *                  { a: true, values: [10, 20] },
   *                  { b: true, values: [15, 35] });
   *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
   */

  var mergeWith = _curry3(function mergeWith(fn, l, r) {
    return mergeWithKey(function (_, _l, _r) {
      return fn(_l, _r);
    }, l, r);
  });

  /**
   * 返回两个参数中的较小值。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord a => a -> a -> a
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.minBy, R.max
   * @example
   *
   *      R.min(789, 123); //=> 123
   *      R.min('a', 'b'); //=> 'a'
   */

  var min = _curry2(function min(a, b) {
    return b < a ? b : a;
  });

  /**
   * 接收一个函数和两个值，返回使给定函数执行结果较小的值。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Relation
   * @sig Ord b => (a -> b) -> a -> a -> a
   * @param {Function} f
   * @param {*} a
   * @param {*} b
   * @return {*}
   * @see R.min, R.maxBy
   * @example
   *
   *      //  square :: Number -> Number
   *      const square = n => n * n;
   *
   *      R.minBy(square, -3, 2); //=> 2
   *
   *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
   *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
   */

  var minBy = _curry3(function minBy(f, a, b) {
    return f(b) < f(a) ? b : a;
  });

  /**
   * Makes a shallow clone of an object, applying the given fn to the specified
   * property with the given value. Note that this copies and flattens prototype
   * properties onto the new object as well. All non-primitive properties are
   * copied by reference.
   *
   * @private
   * @param {String|Number} prop The property name to set
   * @param {Function} fn The function to apply to the property
   * @param {Object|Array} obj The object to clone
   * @return {Object|Array} A new object equivalent to the original except for the changed property.
   */

  function _modify(prop, fn, obj) {
    if (_isInteger(prop) && _isArray(obj)) {
      var arr = [].concat(obj);
      arr[prop] = fn(arr[prop]);
      return arr;
    }

    var result = {};

    for (var p in obj) {
      result[p] = obj[p];
    }

    result[prop] = fn(result[prop]);
    return result;
  }

  /**
   *  将 `fn` 作用于给定 path 的对象，并返回一个新的浅拷贝对象。
   *
   * 如果对象上没有对应的属性，那个这个函数不会被调用，且对象不会被改变。
   * 所以的非基础类型的是通过引用拷贝到新的对象上的。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Object
   * @sig [Idx] -> (v -> v) -> {k: v} -> {k: v}
   * @param {Array} path The path to be modified.
   * @param {Function} fn The function to apply to the path.
   * @param {Object} object The object to be transformed.
   * @return {Object} The transformed object.
   * @example
   *
   *      const person = {name: 'James', address: { zipCode: '90216' }};
   *      R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
   *
   *      // Can handle arrays too
   *      const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
   *      R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
   */

  var modifyPath = _curry3(function modifyPath(path, fn, object) {
    if (!_isObject(object) && !_isArray(object) || path.length === 0) {
      return object;
    }

    var idx = path[0];

    if (!_has(idx, object)) {
      return object;
    }

    if (path.length === 1) {
      return _modify(idx, fn, object);
    }

    var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[idx]);

    if (val === object[idx]) {
      return object;
    }

    return _assoc(idx, val, object);
  });

  /**
   * 将 `fn` 作用于给定 `prop` 的对象，并返回一个拷贝的对象。
   *
   * 如果对象上没有对应的属性，那个这个函数不会被调用，且对象不会被改变。
   * 所以的非基础类型的是通过引用拷贝到新的对象上的。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Object
   * @sig Idx -> (v -> v) -> {k: v} -> {k: v}
   * @param {String|Number} prop The property to be modified.
   * @param {Function} fn The function to apply to the property.
   * @param {Object} object The object to be transformed.
   * @return {Object} The transformed object.
   * @example
   *
   *      const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
   *      R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
   *      R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
   */

  var modify = _curry3(function modify(prop, fn, object) {
    return modifyPath([prop], fn, object);
  });

  /**
   * 用第一个参数除以第二个参数，并返回余数。注意，该函数是 JavaScript-style 的求模操作。数学求模另见 `mathMod`。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The value to the divide.
   * @param {Number} b The pseudo-modulus
   * @return {Number} The result of `b % a`.
   * @see R.mathMod
   * @example
   *
   *      R.modulo(17, 3); //=> 2
   *      // JS behavior:
   *      R.modulo(-17, 3); //=> -2
   *      R.modulo(17, -3); //=> 2
   *
   *      const isOdd = R.modulo(R.__, 2);
   *      isOdd(42); //=> 0
   *      isOdd(21); //=> 1
   */

  var modulo = _curry2(function modulo(a, b) {
    return a % b;
  });

  /**
   * 将列表中 `from` 索引处的元素移动到索引 `to` 处。
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category List
   * @sig Number -> Number -> [a] -> [a]
   * @param {Number} from The source index
   * @param {Number} to The destination index
   * @param {Array} list The list which will serve to realise the move
   * @return {Array} The new list reordered
   * @example
   *
   *      R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
   *      R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
   */

  var move = _curry3(function (from, to, list) {
    var length = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length + from : from;
    var positiveTo = to < 0 ? length + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
  });

  /**
   * 两数相乘，等价于柯里化的 `a * b` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a * b`.
   * @see R.divide
   * @example
   *
   *      const double = R.multiply(2);
   *      const triple = R.multiply(3);
   *      double(3);       //=>  6
   *      triple(4);       //=> 12
   *      R.multiply(2, 5);  //=> 10
   */

  var multiply = _curry2(function multiply(a, b) {
    return a * b;
  });

  var _this = undefined;
  /**
   * 接受两个参数：函数 `f` 和对象 `o1`，返回一个函数 `g`。当 `g` 调用，将 `g` 的参数对象 `o2` 和 `o1` 深度合并后传给 `f`，并返回 `f` 的执行结果。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Function
   * @sig (({ a, b, c, ..., n }) -> x) -> { a, b, c, ...} -> ({ d, e, f, ..., n } -> x)
   * @param {Function} f
   * @param {Object} props
   * @return {Function}
   * @see R.partial, R.partialRight, R.curry, R.mergeDeepRight
   * @example
   *
   *      const multiply2 = ({ a, b }) => a * b;
   *      const double = R.partialObject(multiply2, { a: 2 });
   *      double({ b: 2 }); //=> 4
   *
   *      const greet = ({ salutation, title, firstName, lastName }) =>
   *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
   *
   *      const sayHello = R.partialObject(greet, { salutation: 'Hello' });
   *      const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
   *      sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
   * @symb R.partialObject(f, { a, b })({ c, d }) = f({ a, b, c, d })
   */

  var partialObject = _curry2(function (f, o) {
    return function (props) {
      return f.call(_this, mergeDeepRight(o, props));
    };
  });

  /**
   * 取反操作。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Math
   * @sig Number -> Number
   * @param {Number} n
   * @return {Number}
   * @example
   *
   *      R.negate(42); //=> -42
   */

  var negate = _curry1(function negate(n) {
    return -n;
  });

  /**
   * 如果列表中的元素都不满足 predicate，返回 `true`；否则返回 `false`。
   *
   * 若第二个参数自身存在 `none` 方法，则调用自身的 `none` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> Boolean
   * @param {Function} fn The predicate function.
   * @param {Array} list The array to consider.
   * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
   * @see R.all, R.any
   * @example
   *
   *      const isEven = n => n % 2 === 0;
   *      const isOdd = n => n % 2 !== 0;
   *
   *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
   *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
   */

  var none = _curry2(function none(fn, input) {
    return all(_complement(fn), input);
  });

  /**
   * 返回一个函数，该函数返回它的第 n 个参数。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category Function
   * @sig Number -> *... -> *
   * @param {Number} n
   * @return {Function}
   * @example
   *
   *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
   *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
   * @symb R.nthArg(-1)(a, b, c) = c
   * @symb R.nthArg(0)(a, b, c) = a
   * @symb R.nthArg(1)(a, b, c) = b
   */

  var nthArg = _curry1(function nthArg(n) {
    var arity = n < 0 ? 1 : n + 1;
    return curryN(arity, function () {
      return nth(n, arguments);
    });
  });

  /**
   * `o` 是一个柯里化组合函数，返回一元函数。
   *
   * 类似于 [`compose`](＃compose)，`o` 从右到左执行函数组合。但与 [`compose`](＃compose) 不同的是，传递给 `o` 的最右边的函数为一元函数。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category Function
   * @sig (b -> c) -> (a -> b) -> a -> c
   * @param {Function} f
   * @param {Function} g
   * @return {Function}
   * @see R.compose, R.pipe
   * @example
   *
   *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
   *      const yellGreeting = R.o(R.toUpper, classyGreeting);
   *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
   *
   *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
   *
   * @symb R.o(f, g, x) = f(g(x))
   */

  var o = _curry3(function o(f, g, x) {
    return f(g(x));
  });

  function _of(x) {
    return [x];
  }

  /**
   * 将给定值作为元素，封装成单元素数组。
   *
   * 注意，`R.of` 与 ES6 的 `of` 不同；详见 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of 。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category Function
   * @sig a -> [a]
   * @param {*} x any value
   * @return {Array} An array wrapping `x`.
   * @example
   *
   *      R.of(null); //=> [null]
   *      R.of([42]); //=> [[42]]
   */

  var of = _curry1(_of);

  /**
   * 删除对象中给定的 keys 对应的属性。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [String] -> {String: *} -> {String: *}
   * @param {Array} names an array of String property names to omit from the new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with properties from `names` not on it.
   * @see R.pick
   * @example
   *
   *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
   */

  var omit = _curry2(function omit(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;

    while (idx < len) {
      index[names[idx]] = 1;
      idx += 1;
    }

    for (var prop in obj) {
      if (!index.hasOwnProperty(prop)) {
        result[prop] = obj[prop];
      }
    }

    return result;
  });

  /**
   * 接收一个二元函数 `f`，一个一元函数 `g` 和两个值。将两个值应用到函数 `g` 上，在把返回的结果应用到函数 `f` 上。
   *
   * 也被称为 P combinator。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Function
   * @sig ((a, a) -> b) -> (c -> a) -> c -> c -> b
   * @param {Function} f a binary function
   * @param {Function} g a unary function
   * @param {any} a any value
   * @param {any} b any value
   * @return {any} The result of `f`
   * @example
   *
   *      const eqBy = R.on((a, b) => a === b);
   *      eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
   *
   *      const containsInsensitive = R.on(R.contains, R.toLower);
   *      containsInsensitive('o', 'FOO'); //=> true
   * @symb R.on(f, g, a, b) = f(g(a), g(b))
   */

  var on = _curryN(4, [], function on(f, g, a, b) {
    return f(g(a), g(b));
  });

  /**
   * 创建一个只执行一次的函数。
   *
   * 将给定函数 `fn` 封装到新函数`fn'`中，`fn'` 确保 `fn` 只能调用一次。重复调用`fn'` ，只会返回第一次执行时的结果。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (a... -> b) -> (a... -> b)
   * @param {Function} fn The function to wrap in a call-only-once wrapper.
   * @return {Function} The wrapped function.
   * @example
   *
   *      const addOneOnce = R.once(x => x + 1);
   *      addOneOnce(10); //=> 11
   *      addOneOnce(addOneOnce(50)); //=> 11
   */

  var once = _curry1(function once(fn) {
    var called = false;
    var result;
    return _arity(fn.length, function () {
      if (called) {
        return result;
      }

      called = true;
      result = fn.apply(this, arguments);
      return result;
    });
  });

  function _assertPromise(name, p) {
    if (p == null || !_isFunction(p.then)) {
      throw new TypeError('`' + name + '` expected a Promise, received ' + _toString(p, []));
    }
  }

  /**
   * 将 onFailure 函数应用于一个失败 Promise 的内部值，并将计算结果放入新的 Promise 中返回。这对于处理函数组合内的 rejected promises 很有用。
   *
   * 相当于 `Promise` 的 `catch`。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Function
   * @sig (e -> b) -> (Promise e a) -> (Promise e b)
   * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
   * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
   * @param {Promise} p
   * @return {Promise} The result of calling `p.then(null, onFailure)`
   * @see R.andThen
   * @example
   *
   *      const failedFetch = id => Promise.reject('bad ID');
   *      const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
   *
   *      //recoverFromFailure :: String -> Promise ({ firstName, lastName })
   *      const recoverFromFailure = R.pipe(
   *        failedFetch,
   *        R.otherwise(useDefault),
   *        R.andThen(R.pick(['firstName', 'lastName'])),
   *      );
   *      recoverFromFailure(12345).then(console.log);
   */

  var otherwise = _curry2(function otherwise(f, p) {
    _assertPromise('otherwise', p);

    return p.then(null, f);
  });

  // transforms the held value with the provided function.

  var Identity = function Identity(x) {
    return {
      value: x,
      map: function map(f) {
        return Identity(f(x));
      }
    };
  };
  /**
   * 对数据结构中被 lens 聚焦的部分进行函数变换。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> (a -> a) -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.view, R.set, R.lens, R.lensIndex, R.lensProp, R.lensPath
   * @example
   *
   *      const headLens = R.lensIndex(0);
   *
   *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
   */


  var over = _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function (y) {
      return Identity(f(y));
    })(x).value;
  });

  /**
   * 接收两个参数，`fst` 和 `snd`，返回数组 `[fst, snd]`。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category List
   * @sig a -> b -> (a,b)
   * @param {*} fst
   * @param {*} snd
   * @return {Array}
   * @see R.objOf, R.of
   * @example
   *
   *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
   */

  var pair = _curry2(function pair(fst, snd) {
    return [fst, snd];
  });

  function _createPartialApplicator(concat) {
    return _curry2(function (fn, args) {
      return _arity(Math.max(0, fn.length - args.length), function () {
        return fn.apply(this, concat(args, arguments));
      });
    });
  }

  /**
   * 部分应用。
   *
   * 接收两个参数：函数 `f` 和 参数列表，返回函数 `g`。当调用 `g` 时，将初始参数和 `g` 的参数顺次传给 `f`，并返回 `f` 的执行结果。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
   * @param {Function} f
   * @param {Array} args
   * @return {Function}
   * @see R.partialRight, R.curry
   * @example
   *
   *      const multiply2 = (a, b) => a * b;
   *      const double = R.partial(multiply2, [2]);
   *      double(3); //=> 6
   *
   *      const greet = (salutation, title, firstName, lastName) =>
   *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
   *
   *      const sayHello = R.partial(greet, ['Hello']);
   *      const sayHelloToMs = R.partial(sayHello, ['Ms.']);
   *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
   * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
   */

  var partial = _createPartialApplicator(_concat);

  /**
   * 部分应用。
   *
   * 接收两个参数：函数 `f` 和 参数列表，返回函数 `g`。当调用 `g` 时，将 `g` 的参数和初始参数顺序传给 `f`，并返回 `f` 的执行结果。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category Function
   * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
   * @param {Function} f
   * @param {Array} args
   * @return {Function}
   * @see R.partial
   * @example
   *
   *      const greet = (salutation, title, firstName, lastName) =>
   *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
   *
   *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
   *
   *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
   * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
   */

  var partialRight = _createPartialApplicator(flip(_concat));

  /**
   * 通过 predicate 将列表或 "Filterable" （可过滤的）对象分成两部分，分别为满足 predicate 的元素和不满足 predicate 的元素。元素类型保持不变。Filterable 类型包括 plain object 或者任何带有 filter 方法的类型，如 `Array` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.4
   * @category List
   * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
   * @param {Function} pred A predicate to determine which side the element belongs to.
   * @param {Array} filterable the list (or other filterable) to partition.
   * @return {Array} An array, containing first the subset of elements that satisfy the
   *         predicate, and second the subset of elements that do not satisfy.
   * @see R.filter, R.reject
   * @example
   *
   *      R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
   *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
   *
   *      R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
   *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
   */

  var partition = juxt([filter, reject]);

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

  /**
   * 如果非空对象在给定路径上存在值，则将该值返回；否则返回给定的默认值。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Object
   * @typedefn Idx = String | Int | Symbol
   * @sig a -> [Idx] -> {a} -> a
   * @param {*} d The default value.
   * @param {Array} p The path to use.
   * @param {Object} obj The object to retrieve the nested property from.
   * @return {*} The data at `path` of the supplied object or the default value.
   * @example
   *
   *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
   *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
   */

  var pathOr = _curry3(function pathOr(d, p, obj) {
    return defaultTo(d, path(p, obj));
  });

  /**
   * 如果对象的给定路径上的属性满足 predicate，返回 `ture`；否则返回 `false`。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Logic
   * @typedefn Idx = String | Int | Symbol
   * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
   * @param {Function} pred
   * @param {Array} propPath
   * @param {*} obj
   * @return {Boolean}
   * @see R.propSatisfies, R.path
   * @example
   *
   *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
   *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
   */

  var pathSatisfies = _curry3(function pathSatisfies(pred, propPath, obj) {
    return pred(path(propPath, obj));
  });

  /**
   * 返回对象的部分拷贝，其中仅包含指定键对应的属性。如果某个键不存在，则忽略该属性。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to copy onto a new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties from `names` on it.
   * @see R.omit, R.props
   * @example
   *
   *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
   *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
   */

  var pick = _curry2(function pick(names, obj) {
    var result = {};
    var idx = 0;

    while (idx < names.length) {
      if (names[idx] in obj) {
        result[names[idx]] = obj[names[idx]];
      }

      idx += 1;
    }

    return result;
  });

  /**
   * 与 `pick` 类似，但 `pickAll` 会将不存在的属性以 `key: undefined` 键值对的形式返回。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> {k: v}
   * @param {Array} names an array of String property names to copy onto a new object
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties from `names` on it.
   * @see R.pick
   * @example
   *
   *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
   *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
   */

  var pickAll = _curry2(function pickAll(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;

    while (idx < len) {
      var name = names[idx];
      result[name] = obj[name];
      idx += 1;
    }

    return result;
  });

  /**
   * 返回对象的部分拷贝，其中仅包含 key 满足 predicate 的属性。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Object
   * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
   * @param {Function} pred A predicate to determine whether or not a key
   *        should be included on the output object.
   * @param {Object} obj The object to copy from
   * @return {Object} A new object with only properties that satisfy `pred`
   *         on it.
   * @see R.pick, R.filter
   * @example
   *
   *      const isUpperCase = (val, key) => key.toUpperCase() === key;
   *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
   */

  var pickBy = _curry2(function pickBy(test, obj) {
    var result = {};

    for (var prop in obj) {
      if (test(obj[prop], prop, obj)) {
        result[prop] = obj[prop];
      }
    }

    return result;
  });

  /**
   * 在列表头部之前拼接一个元素。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig a -> [a] -> [a]
   * @param {*} el The item to add to the head of the output list.
   * @param {Array} list The array to add to the tail of the output list.
   * @return {Array} A new array.
   * @see R.append
   * @example
   *
   *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
   */

  var prepend = _curry2(function prepend(el, list) {
    return _concat([el], list);
  });

  /**
   * 列表中的所有元素相乘。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig [Number] -> Number
   * @param {Array} list An array of numbers
   * @return {Number} The product of all the numbers in the list.
   * @see R.reduce
   * @example
   *
   *      R.product([2,4,6,8,100,1]); //=> 38400
   */

  var product = reduce(multiply, 1);

  /**
   * 接受一个函数 `fn` 和一个 transformer 函数的列表，返回一个柯里化的新函数。当被调用时，新函数将每个参数转发给对应位置的 transformer 函数，然后将每个 transformer 函数的计算结果作为参数传递给 `fn`，`fn` 的计算结果即新函数的返回值。
   *
   * 如果新函数传传入参数的数量比 transformer 函数的数量多，多出的参数会作为附加参数直接传给 `fn` 。如果不需要处理多出的那部分参数，除了忽略之外，也可以用 identity 函数来作为 transformer ，以保证新函数的参数数量是确定的。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
   * @param {Function} fn The function to wrap.
   * @param {Array} transformers A list of transformer functions
   * @return {Function} The wrapped function.
   * @see R.converge
   * @example
   *
   *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
   *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
   *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
   *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
   * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
   */

  var useWith = _curry2(function useWith(fn, transformers) {
    return curryN(transformers.length, function () {
      var args = [];
      var idx = 0;

      while (idx < transformers.length) {
        args.push(transformers[idx].call(this, arguments[idx]));
        idx += 1;
      }

      return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
  });

  /**
   * 模拟 SQL 中的 `select` 语句。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @category Relation
   * @sig [k] -> [{k: v}] -> [{k: v}]
   * @param {Array} props The property names to project
   * @param {Array} objs The objects to query
   * @return {Array} An array of objects with just the `props` properties.
   * @see R.pluck, R.props, R.prop
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
   *      const kids = [abby, fred];
   *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
   */

  var project = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

  function _promap(f, g, profunctor) {
    return function (x) {
      return g(profunctor(f(x)));
    };
  }

  function XPromap(f, g, xf) {
    this.xf = xf;
    this.f = f;
    this.g = g;
  }

  XPromap.prototype['@@transducer/init'] = _xfBase.init;
  XPromap.prototype['@@transducer/result'] = _xfBase.result;

  XPromap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, _promap(this.f, this.g, input));
  };

  var _xpromap = _curry3(function _xpromap(f, g, xf) {
    return new XPromap(f, g, xf);
  });

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

  /**
   * 如果指定对象属性与给定的值相等，则返回 `true` ；否则返回 `false` 。通过 [`R.equals`](#equals) 函数进行相等性判断。可以使用 [`R.whereEq`](#whereEq) 进行多个属性的相等性判断。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig String -> a -> Object -> Boolean
   * @param {String} name
   * @param {*} val
   * @param {*} obj
   * @return {Boolean}
   * @see R.whereEq, R.propSatisfies, R.equals
   * @example
   *
   *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
   *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
   *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
   *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
   *      const kids = [abby, fred, rusty, alois];
   *      const hasBrownHair = R.propEq('hair', 'brown');
   *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
   */

  var propEq = _curry3(function propEq(name, val, obj) {
    return equals(val, prop(name, obj));
  });

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

  /**
   * 对于给定的非空对象，如果指定属性存在，则返回该属性值；否则返回给定的默认值。
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category Object
   * @sig a -> String -> Object -> a
   * @param {*} val The default value.
   * @param {String} p The name of the property to return.
   * @param {Object} obj The object to query.
   * @return {*} The value of given property of the supplied object or the default value.
   * @example
   *
   *      const alice = {
   *        name: 'ALICE',
   *        age: 101
   *      };
   *      const favorite = R.prop('favoriteLibrary');
   *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
   *
   *      favorite(alice);  //=> undefined
   *      favoriteWithDefault(alice);  //=> 'Ramda'
   */

  var propOr = _curry3(function propOr(val, p, obj) {
    return defaultTo(val, prop(p, obj));
  });

  /**
   * 如果指定的对象属性满足 predicate，返回 `true`；否则返回 `false`。可以使用 [`R.where`](#where) 进行多个属性的判断。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Logic
   * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
   * @param {Function} pred
   * @param {String} name
   * @param {*} obj
   * @return {Boolean}
   * @see R.where, R.propEq, R.propIs
   * @example
   *
   *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
   */

  var propSatisfies = _curry3(function propSatisfies(pred, name, obj) {
    return pred(prop(name, obj));
  });

  /**
   * 返回 `prop` 的数组：输入为 keys 数组，输出为对应的 values 数组。values 数组的顺序与 keys 的相同。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Object
   * @sig [k] -> {k: v} -> [v]
   * @param {Array} ps The property names to fetch
   * @param {Object} obj The object to query
   * @return {Array} The corresponding values or partially applied function.
   * @see R.prop, R.pluck, R.project
   * @example
   *
   *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
   *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
   *
   *      const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
   *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
   */

  var props = _curry2(function props(ps, obj) {
    return ps.map(function (p) {
      return path([p], obj);
    });
  });

  /**
   * 返回从 `from` 到 `to` 之间的所有数的升序列表。左闭右开（包含 `from`，不包含 `to`）。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig Number -> Number -> [Number]
   * @param {Number} from The first number in the list.
   * @param {Number} to One more than the last number in the list.
   * @return {Array} The list of numbers in the set `[a, b)`.
   * @example
   *
   *      R.range(1, 5);    //=> [1, 2, 3, 4]
   *      R.range(50, 53);  //=> [50, 51, 52]
   */

  var range = _curry2(function range(from, to) {
    if (!(_isNumber(from) && _isNumber(to))) {
      throw new TypeError('Both arguments to range must be numbers');
    }

    var result = [];
    var n = from;

    while (n < to) {
      result.push(n);
      n += 1;
    }

    return result;
  });

  /**
   * 右折叠操作。
   *
   * 遍历列表，相继调用二元迭代函数（参数为累积值和从数组中取出的当前元素），将本次迭代结果作为下次迭代的累积值。返回最终累积值。
   *
   * 类似于 [`reduce`](#reduce)，除了遍历列表的顺序是从右向左的。
   *
   * `reduceRight` 的迭代函数接收两个参数 *(value, acc)*。与之对应的，`reduce` 的迭代函数的参数顺序为 *(acc, value)*
   *
   * 注意：`R.reduceRight` 与原生 `Array.prototype.reduceRight` 方法不同，它不会跳过删除或未分配的索引项（稀疏矩阵）。更多关于原生 reduceRight 的行为，请参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> b) -> b -> [a] -> b
   * @param {Function} fn The iterator function. Receives two values, the current element from the array
   *        and the accumulator.
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.addIndex, R.reduced
   * @example
   *
   *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
   *      //    -               -2
   *      //   / \              / \
   *      //  1   -            1   3
   *      //     / \              / \
   *      //    2   -     ==>    2  -1
   *      //       / \              / \
   *      //      3   -            3   4
   *      //         / \              / \
   *      //        4   0            4   0
   *
   * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
   */

  var reduceRight = _curry3(function reduceRight(fn, acc, list) {
    var idx = list.length - 1;

    while (idx >= 0) {
      acc = fn(list[idx], acc);

      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }

      idx -= 1;
    }

    return acc;
  });

  /**
   * 与 [`reduce`](#reduce) 类似， `reduceWhile` 会遍历列表，相继调用二元迭代函数，并返回最终累积值。`reduceWhile` 在每次调用迭代函数前，先使用 predicate 进行判断，如果 predicate 返回 `false` ，则提前终止遍历操作，并返回当前累积值。
   *
   * @func
   * @memberOf R
   * @since v0.22.0
   * @category List
   * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} pred The predicate. It is passed the accumulator and the
   *        current element.
   * @param {Function} fn The iterator function. Receives two values, the
   *        accumulator and the current element.
   * @param {*} a The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.reduced
   * @example
   *
   *      const isOdd = (acc, x) => x % 2 !== 0;
   *      const xs = [1, 3, 5, 60, 777, 800];
   *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
   *
   *      const ys = [2, 4, 6]
   *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
   */

  var reduceWhile = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
    return _reduce(function (acc, x) {
      return pred(acc, x) ? fn(acc, x) : _reduced(acc);
    }, a, list);
  });

  /**
   * 返回一个封装的值，该值代表 `reduce` 或 `transduce` 操作的最终结果。
   *
   * 返回值是一个黑盒：不保证其内部结构的稳定性。
   *
   * 注意：这个优化不适用于上面未明确列出的函数。例如，现在还不支持 `reduceRight`。
   *
   * @func
   * @memberOf R
   * @since v0.15.0
   * @category List
   * @sig a -> *
   * @param {*} x The final value of the reduce.
   * @return {*} The wrapped value.
   * @see R.reduce, R.reduceWhile, R.reduceBy, R.reduceRight, R.transduce
   * @example
   *
   *     R.reduce(
   *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
   *       [],
   *       [1, 2, 3, 4, 5]) // [1, 2, 3]
   */

  var reduced = _curry1(_reduced);

  /**
   * 执行输入的函数 `n` 次，返回由函数执行结果组成的数组。
   *
   * `fn` 为一元函数，n 次调用接收的参数为：从 `0` 递增到 `n-1` 。
   *
   * @func
   * @memberOf R
   * @since v0.2.3
   * @category List
   * @sig (Number -> a) -> Number -> [a]
   * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
   * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
   * @return {Array} An array containing the return values of all calls to `fn`.
   * @see R.repeat
   * @example
   *
   *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
   * @symb R.times(f, 0) = []
   * @symb R.times(f, 1) = [f(0)]
   * @symb R.times(f, 2) = [f(0), f(1)]
   */

  var times = _curry2(function times(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;

    if (len < 0 || isNaN(len)) {
      throw new RangeError('n must be a non-negative number');
    }

    list = new Array(len);

    while (idx < len) {
      list[idx] = fn(idx);
      idx += 1;
    }

    return list;
  });

  /**
   * 生成包含 `n` 个同一元素的数组。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category List
   * @sig a -> n -> [a]
   * @param {*} value The value to repeat.
   * @param {Number} n The desired size of the output list.
   * @return {Array} A new array containing `n` `value`s.
   * @see R.times
   * @example
   *
   *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
   *
   *      const obj = {};
   *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
   *      repeatedObjs[0] === repeatedObjs[1]; //=> true
   * @symb R.repeat(a, 0) = []
   * @symb R.repeat(a, 1) = [a]
   * @symb R.repeat(a, 2) = [a, a]
   */

  var repeat = _curry2(function repeat(value, n) {
    return times(always(value), n);
  });

  /**
   * 替换字符串的子串或正则匹配到的值。
   *
   * @func
   * @memberOf R
   * @since v0.7.0
   * @category String
   * @sig RegExp|String -> String -> String -> String
   * @param {RegExp|String} pattern A regular expression or a substring to match.
   * @param {String} replacement The string to replace the matches with.
   * @param {String} str The String to do the search and replacement in.
   * @return {String} The result.
   * @example
   *
   *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
   *
   *      // Use the "g" (global) flag to replace all occurrences:
   *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
   */

  var replace = _curry3(function replace(regex, replacement, str) {
    return str.replace(regex, replacement);
  });

  /**
   * Scan 与 [`reduce`](#reduce) 类似，但会将每次迭代计算的累积值记录下来，组成一个列表返回。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig ((a, b) -> a) -> a -> [b] -> [a]
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array
   * @param {*} acc The accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {Array} A list of all intermediately reduced values.
   * @see R.reduce, R.mapAccum
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
   * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
   */

  var scan = _curry3(function scan(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [acc];

    while (idx < len) {
      acc = fn(acc, list[idx]);
      result[idx + 1] = acc;
      idx += 1;
    }

    return result;
  });

  /**
   * 将一个 [Applicative](https://github.com/fantasyland/fantasy-land#applicative) 的 [Traversable](https://github.com/fantasyland/fantasy-land#traversable) 转换成一个 Traversable 类型的 Applicative。
   *
   * 如果第二个参数自身存在 `sequence` 方法，则调用自身的 `sequence`。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
   * @param {Function} of
   * @param {*} traversable
   * @return {*}
   * @see R.traverse
   * @example
   *
   *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
   *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
   *
   *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
   *      R.sequence(R.of, Nothing());       //=> [Nothing()]
   */

  var sequence = _curry2(function sequence(of, traversable) {
    return typeof traversable.sequence === 'function' ? traversable.sequence(of) : reduceRight(function (x, acc) {
      return ap(map(prepend, x), acc);
    }, of([]), traversable);
  });

  /**
   * 通过 lens 对数据结构聚焦的部分进行设置。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> a -> s -> s
   * @param {Lens} lens
   * @param {*} v
   * @param {*} x
   * @return {*}
   * @see R.view, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
   *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
   */

  var set = _curry3(function set(lens, v, x) {
    return over(lens, always(v), x);
  });

  /**
   * 使用比较函数对列表进行排序。比较函数每次接受两个参数，如果第一个值较小，则返回负数；如果第一个值较大，则返回正数；如果两值相等，返回零。注意，返回的是列表的 ** 拷贝 ** ，不会修改原列表。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, a) -> Number) -> [a] -> [a]
   * @param {Function} comparator A sorting function :: a -> b -> Int
   * @param {Array} list The list to sort
   * @return {Array} a new array with its elements sorted by the comparator function.
   * @see R.ascend, R.descend
   * @example
   *
   *      const diff = function(a, b) { return a - b; };
   *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
   */

  var sort = _curry2(function sort(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
  });

  /**
   * 根据给定的函数对列表进行排序。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig Ord b => (a -> b) -> [a] -> [a]
   * @param {Function} fn
   * @param {Array} list The list to sort.
   * @return {Array} A new list sorted by the keys generated by `fn`.
   * @example
   *
   *      const sortByFirstItem = R.sortBy(R.prop(0));
   *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
   *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
   *
   *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
   *      const alice = {
   *        name: 'ALICE',
   *        age: 101
   *      };
   *      const bob = {
   *        name: 'Bob',
   *        age: -10
   *      };
   *      const clara = {
   *        name: 'clara',
   *        age: 314.159
   *      };
   *      const people = [clara, bob, alice];
   *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
   */

  var sortBy = _curry2(function sortBy(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
      var aa = fn(a);
      var bb = fn(b);
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
  });

  /**
   * 依据比较函数列表对输入列表进行排序。
   *
   * @func
   * @memberOf R
   * @since v0.23.0
   * @category Relation
   * @sig [(a, a) -> Number] -> [a] -> [a]
   * @param {Array} functions A list of comparator functions.
   * @param {Array} list The list to sort.
   * @return {Array} A new list sorted according to the comarator functions.
   * @see R.ascend, R.descend
   * @example
   *
   *      const alice = {
   *        name: 'alice',
   *        age: 40
   *      };
   *      const bob = {
   *        name: 'bob',
   *        age: 30
   *      };
   *      const clara = {
   *        name: 'clara',
   *        age: 40
   *      };
   *      const people = [clara, bob, alice];
   *      const ageNameSort = R.sortWith([
   *        R.descend(R.prop('age')),
   *        R.ascend(R.prop('name'))
   *      ]);
   *      ageNameSort(people); //=> [alice, clara, bob]
   */

  var sortWith = _curry2(function sortWith(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
      var result = 0;
      var i = 0;

      while (result === 0 && i < fns.length) {
        result = fns[i](a, b);
        i += 1;
      }

      return result;
    });
  });

  /**
   * 根据指定的分隔符将字符串拆分为字符串类型的数组。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category String
   * @sig (String | RegExp) -> String -> [String]
   * @param {String|RegExp} sep The pattern.
   * @param {String} str The string to separate into an array.
   * @return {Array} The array of strings from `str` separated by `sep`.
   * @see R.join
   * @example
   *
   *      const pathComponents = R.split('/');
   *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
   *
   *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
   */

  var split = invoker(1, 'split');

  /**
   * 在指定的索引处拆分列表或者字符串。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig Number -> [a] -> [[a], [a]]
   * @sig Number -> String -> [String, String]
   * @param {Number} index The index where the array/string is split.
   * @param {Array|String} array The array/string to be split.
   * @return {Array}
   * @example
   *
   *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
   *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
   *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
   */

  var splitAt = _curry2(function splitAt(index, array) {
    return [slice(0, index, array), slice(index, length(array), array)];
  });

  /**
   * 将列表拆分成指定长度的子列表集。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig Number -> [a] -> [[a]]
   * @sig Number -> String -> [String]
   * @param {Number} n
   * @param {Array} list
   * @return {Array}
   * @example
   *
   *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
   *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
   */

  var splitEvery = _curry2(function splitEvery(n, list) {
    if (n <= 0) {
      throw new Error('First argument to splitEvery must be a positive integer');
    }

    var result = [];
    var idx = 0;

    while (idx < list.length) {
      result.push(slice(idx, idx += n, list));
    }

    return result;
  });

  /**
   * 查找列表中首个满足 predicate 的元素，在该处将列表拆分为两部分。首个满足 predicate 的元素包含在后一部分。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [[a], [a]]
   * @param {Function} pred The predicate that determines where the array is split.
   * @param {Array} list The array to be split.
   * @return {Array}
   * @example
   *
   *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
   */

  var splitWhen = _curry2(function splitWhen(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];

    while (idx < len && !pred(list[idx])) {
      prefix.push(list[idx]);
      idx += 1;
    }

    return [prefix, Array.prototype.slice.call(list, idx)];
  });

  /**
   * 根据列表中每个元素是否满足 predicate 来拆分数组。
   *
   * @func
   * @memberOf R
   * @since v0.26.1
   * @category List
   * @sig (a -> Boolean) -> [a] -> [[a]]
   * @param {Function} pred The predicate that determines where the array is split.
   * @param {Array} list The array to be split.
   * @return {Array}
   * @example
   *
   *      R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); //=> [[1], [3], [4, 5], [6, 7]]
   */

  var splitWhenever = _curryN(2, [], function splitWhenever(pred, list) {
    var acc = [];
    var curr = [];

    for (var i = 0; i < list.length; i = i + 1) {
      if (!pred(list[i])) {
        curr.push(list[i]);
      }

      if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
        acc.push(curr);
        curr = [];
      }
    }

    return acc;
  });

  /**
   * 检查列表是否以给定的值开头。
   *
   * @func
   * @memberOf R
   * @since v0.24.0
   * @category List
   * @sig [a] -> [a] -> Boolean
   * @sig String -> String -> Boolean
   * @param {*} prefix
   * @param {*} list
   * @return {Boolean}
   * @see R.endsWith
   * @example
   *
   *      R.startsWith('a', 'abc')                //=> true
   *      R.startsWith('b', 'abc')                //=> false
   *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
   *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
   */

  var startsWith = _curry2(function (prefix, list) {
    return equals(take(prefix.length, list), prefix);
  });

  /**
   * 首个参数减去第二个参数。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Math
   * @sig Number -> Number -> Number
   * @param {Number} a The first value.
   * @param {Number} b The second value.
   * @return {Number} The result of `a - b`.
   * @see R.add
   * @example
   *
   *      R.subtract(10, 8); //=> 2
   *
   *      const minus5 = R.subtract(R.__, 5);
   *      minus5(17); //=> 12
   *
   *      const complementaryAngle = R.subtract(90);
   *      complementaryAngle(30); //=> 60
   *      complementaryAngle(72); //=> 18
   */

  var subtract = _curry2(function subtract(a, b) {
    return Number(a) - Number(b);
  });

  /**
   * 求对称差集。所有不属于两列表交集元素的集合，其元素在且仅在给定列表中的一个里面出现。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` or `list2`, but not both.
   * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
   * @example
   *
   *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
   *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
   */

  var symmetricDifference = _curry2(function symmetricDifference(list1, list2) {
    return concat(difference(list1, list2), difference(list2, list1));
  });

  /**
   * 求对称差集。所有不属于两列表交集元素的集合。交集的元素由条件函数的返回值决定。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The elements in `list1` or `list2`, but not both.
   * @see R.symmetricDifference, R.difference, R.differenceWith
   * @example
   *
   *      const eqA = R.eqBy(R.prop('a'));
   *      const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
   *      const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
   *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
   */

  var symmetricDifferenceWith = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
    return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
  });

  /**
   * 从后往前取出列表元素，直到遇到首个不满足 predicate 的元素为止。取出的元素中不包含首个不满足 predicate 的元素。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.dropLastWhile, R.addIndex
   * @example
   *
   *      const isNotOne = x => x !== 1;
   *
   *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
   *
   *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
   */

  var takeLastWhile = _curry2(function takeLastWhile(fn, xs) {
    var idx = xs.length - 1;

    while (idx >= 0 && fn(xs[idx])) {
      idx -= 1;
    }

    return slice(idx + 1, Infinity, xs);
  });

  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;

  XTakeWhile.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  var _xtakeWhile = _curry2(function _xtakeWhile(f, xf) {
    return new XTakeWhile(f, xf);
  });

  /**
   * 从前往后取出列表元素，直到遇到首个不满足 predicate 的元素为止。取出的元素中不包含首个不满足 predicate 的元素。
   *
   * 若第二个参数自身存在 `takeWhile` 方法，则调用自身的 `takeWhile` 方法
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig (a -> Boolean) -> [a] -> [a]
   * @sig (a -> Boolean) -> String -> String
   * @param {Function} fn The function called per iteration.
   * @param {Array} xs The collection to iterate over.
   * @return {Array} A new array.
   * @see R.dropWhile, R.transduce, R.addIndex
   * @example
   *
   *      const isNotFour = x => x !== 4;
   *
   *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
   *
   *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
   */

  var takeWhile = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, xs) {
    var idx = 0;
    var len = xs.length;

    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }

    return slice(0, idx, xs);
  }));

  function XTap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XTap.prototype['@@transducer/init'] = _xfBase.init;
  XTap.prototype['@@transducer/result'] = _xfBase.result;

  XTap.prototype['@@transducer/step'] = function (result, input) {
    this.f(input);
    return this.xf['@@transducer/step'](result, input);
  };

  var _xtap = _curry2(function _xtap(f, xf) {
    return new XTap(f, xf);
  });

  /**
   * 对输入的值执行给定的函数，然后返回输入的值。
   *
   * 若在列表位置给出 transformer，则用做 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Function
   * @sig (a -> *) -> a -> a
   * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
   * @param {*} x
   * @return {*} `x`.
   * @example
   *
   *      const sayX = x => console.log('x is ' + x);
   *      R.tap(sayX, 100); //=> 100
   *      // logs 'x is 100'
   * @symb R.tap(f, a) = a
   */

  var tap = _curry2(_dispatchable([], _xtap, function tap(fn, x) {
    fn(x);
    return x;
  }));

  function _isRegExp(x) {
    return Object.prototype.toString.call(x) === '[object RegExp]';
  }

  /**
   * 检测字符串是否匹配给定的正则表达式。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category String
   * @sig RegExp -> String -> Boolean
   * @param {RegExp} pattern
   * @param {String} str
   * @return {Boolean}
   * @see R.match
   * @example
   *
   *      R.test(/^x/, 'xyz'); //=> true
   *      R.test(/^y/, 'xyz'); //=> false
   */

  var test = _curry2(function test(pattern, str) {
    if (!_isRegExp(pattern)) {
      throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString$1(pattern));
    }

    return _cloneRegExp(pattern).test(str);
  });

  /**
   * 将 onSuccess 函数应用于一个 fulfilled Promise 的内部值，并将计算结果放入新的 Promise 中返回。这对于处理函数组合内的 promises 很有用。
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category Function
   * @sig (a -> b) -> (Promise e a) -> (Promise e b)
   * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
   * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
   * @param {Promise} p
   * @return {Promise} The result of calling `p.then(onSuccess)`
   * @see R.otherwise
   * @example
   *
   *      const makeQuery = email => ({ query: { email }});
   *      const fetchMember = request =>
   *        Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 });
   *
   *      //getMemberName :: String -> Promise ({ firstName, lastName })
   *      const getMemberName = R.pipe(
   *        makeQuery,
   *        fetchMember,
   *        R.andThen(R.pick(['firstName', 'lastName']))
   *      );
   *
   *      getMemberName('bob@gmail.com').then(console.log);
   */

  var andThen = _curry2(function andThen(f, p) {
    _assertPromise('andThen', p);

    return p.then(f);
  });

  /**
   * 将字符串转换成小写。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to lower case.
   * @return {String} The lower case version of `str`.
   * @see R.toUpper
   * @example
   *
   *      R.toLower('XYZ'); //=> 'xyz'
   */

  var toLower = invoker(0, 'toLowerCase');

  /**
   * 将一个对象的属性转换成键、值二元组类型的数组，只处理对象自身的属性。注意：不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Object
   * @sig {String: *} -> [[String,*]]
   * @param {Object} obj The object to extract from
   * @return {Array} An array of key, value arrays from the object's own properties.
   * @see R.fromPairs, R.keys, R.values
   * @example
   *
   *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
   */

  var toPairs = _curry1(function toPairs(obj) {
    var pairs = [];

    for (var prop in obj) {
      if (_has(prop, obj)) {
        pairs[pairs.length] = [prop, obj[prop]];
      }
    }

    return pairs;
  });

  /**
   * 将一个对象的属性转换成键、值二元组类型的数组，包括原型链上的属性。注意，不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.4.0
   * @category Object
   * @sig {String: *} -> [[String,*]]
   * @param {Object} obj The object to extract from
   * @return {Array} An array of key, value arrays from the object's own
   *         and prototype properties.
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
   */

  var toPairsIn = _curry1(function toPairsIn(obj) {
    var pairs = [];

    for (var prop in obj) {
      pairs[pairs.length] = [prop, obj[prop]];
    }

    return pairs;
  });

  /**
   * 将字符串转换为大写。
   *
   * @func
   * @memberOf R
   * @since v0.9.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to upper case.
   * @return {String} The upper case version of `str`.
   * @see R.toLower
   * @example
   *
   *      R.toUpper('abc'); //=> 'ABC'
   */

  var toUpper = invoker(0, 'toUpperCase');

  /**
   * 用 iterator function 初始化 transducer ，生成一个 transformed iterator function。然后顺次遍历列表，对每个列表元素先进行转换，然后与累积值进行归约，返回值作为下一轮迭代的累积值。最终返回与初始累积值类型相同的一个累积值。
   *
   * iterator function 接收两个参数： *(acc, value)* ，iterator function 会被封装为 transformer 来初始化 transducer 。可以直接传递 transformer 来代替 iterator function。这两种情况下，可以使用 [`R.reduced`](#reduced) 提前终止迭代操作。
   *
   * transducer 函数接受一个 transformer ，返回一个新的 transformer ，并且 transducer 函数可以直接组合。
   *
   * transformer 是一个对象，其中包含二元 reducing iterator、step、零元 init 和 一元 result 函数。step 作为 reduce 过程中的迭代函数；result 将最终的累积值转换为需要的返回类型（通常为 [`R.identity`](#identity) ）；init 提供初始累积值，但通常会被 `transduce` 函数忽略。
   *
   * 在 transducer 初始化之后，使用 [`R.reduce`](#reduce) 进行迭代操作。
   *
   * @func
   * @memberOf R
   * @since v0.12.0
   * @category List
   * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
   * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
   * @param {Function} fn The iterator function. Receives two values, the accumulator and the
   *        current element from the array. Wrapped as transformer, if necessary, and used to
   *        initialize the transducer
   * @param {*} acc The initial accumulator value.
   * @param {Array} list The list to iterate over.
   * @return {*} The final, accumulated value.
   * @see R.reduce, R.reduced, R.into
   * @example
   *
   *      const numbers = [1, 2, 3, 4];
   *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
   *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
   *
   *      const isOdd = (x) => x % 2 !== 0;
   *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
   *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
   */

  var transduce = curryN(4, function transduce(xf, fn, acc, list) {
    return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
  });

  /**
   * 二维数组行列转置。输入 `n` 个长度为 `x` 的数组，输出 `x` 个长度为 `n` 的数组。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [[a]] -> [[a]]
   * @param {Array} list A 2D list
   * @return {Array} A 2D list
   * @example
   *
   *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
   *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
   *
   *      // If some of the rows are shorter than the following rows, their elements are skipped:
   *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
   * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
   * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
   * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
   */

  var transpose = _curry1(function transpose(outerlist) {
    var i = 0;
    var result = [];

    while (i < outerlist.length) {
      var innerlist = outerlist[i];
      var j = 0;

      while (j < innerlist.length) {
        if (typeof result[j] === 'undefined') {
          result[j] = [];
        }

        result[j].push(innerlist[j]);
        j += 1;
      }

      i += 1;
    }

    return result;
  });

  /**
   * 将返回值为 [Applicative](https://github.com/fantasyland/fantasy-land#applicative) 类型的函数映射到一个 [Traversable](https://github.com/fantasyland/fantasy-land#traversable) 上。然后使用 [`sequence`](#sequence) 将结果由 Traversable of Applicative 转换为 Applicative of Traversable。
   *
   * 若第三个参数自身存在 `traverse` 方法，则调用自身的 `traverse` 方法。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
   * @param {Function} of
   * @param {Function} f
   * @param {*} traversable
   * @return {*}
   * @see R.sequence
   * @example
   *
   *      // Returns `Maybe.Nothing` if the given divisor is `0`
   *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
   *
   *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
   *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
   */

  var traverse = _curry3(function traverse(of, f, traversable) {
    return typeof traversable['fantasy-land/traverse'] === 'function' ? traversable['fantasy-land/traverse'](f, of) : typeof traversable.traverse === 'function' ? traversable.traverse(f, of) : sequence(of, map(f, traversable));
  });

  var ws = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" + "\u2029\uFEFF";
  var zeroWidth = "\u200B";
  var hasProtoTrim = typeof String.prototype.trim === 'function';
  /**
   * 删除字符串首、尾两端的空白字符。
   *
   * @func
   * @memberOf R
   * @since v0.6.0
   * @category String
   * @sig String -> String
   * @param {String} str The string to trim.
   * @return {String} Trimmed version of `str`.
   * @example
   *
   *      R.trim('   xyz  '); //=> 'xyz'
   *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
   */

  var trim = !hasProtoTrim || ws.trim() || !zeroWidth.trim() ? _curry1(function trim(str) {
    var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
    var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
    return str.replace(beginRx, '').replace(endRx, '');
  }) : _curry1(function trim(str) {
    return str.trim();
  });

  /**
   * `tryCatch` 接受两个函数：`tryer` 和 `catcher`，生成的函数执行 `tryer`，若未抛出异常，则返回执行结果。若抛出异常，则执行 `catcher`，返回 `catcher` 的执行结果。注意，为了有效的组合该函数，`tryer` 和 `catcher` 应返回相同类型的值。
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Function
   * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
   * @param {Function} tryer The function that may throw.
   * @param {Function} catcher The function that will be evaluated if `tryer` throws.
   * @return {Function} A new function that will catch exceptions and send them to the catcher.
   * @example
   *
   *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
   *      R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
   *      'caught'
   *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
   *      R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
   */

  var tryCatch = _curry2(function _tryCatch(tryer, catcher) {
    return _arity(tryer.length, function () {
      try {
        return tryer.apply(this, arguments);
      } catch (e) {
        return catcher.apply(this, _concat([e], arguments));
      }
    });
  });

  /**
   * 输入一个只接收单个数组作为参数的函数，返回一个新函数：
   *
   *   - 接收任意个参数；
   *   - 将参数组成数组传递给 `fn` ；
   *   - 返回执行结果。
   *
   * 换言之，`R.unapply` 将一个使用数组作为参数的函数，变为一个不定参函数。 `R.unapply` 是 [`R.apply`](#apply) 的逆函数。
   *
   * @func
   * @memberOf R
   * @since v0.8.0
   * @category Function
   * @sig ([*...] -> a) -> (*... -> a)
   * @param {Function} fn
   * @return {Function}
   * @see R.apply
   * @example
   *
   *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
   * @symb R.unapply(f)(a, b) = f([a, b])
   */

  var unapply = _curry1(function unapply(fn) {
    return function () {
      return fn(Array.prototype.slice.call(arguments, 0));
    };
  });

  /**
   * 将任意元（包括零元）函数封装成一元函数。任何额外的参数都不会传递给被封装的函数。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Function
   * @sig (a -> b -> c -> ... -> z) -> (a -> z)
   * @param {Function} fn The function to wrap.
   * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
   *         arity 1.
   * @see R.binary, R.nAry
   * @example
   *
   *      const takesTwoArgs = function(a, b) {
   *        return [a, b];
   *      };
   *      takesTwoArgs.length; //=> 2
   *      takesTwoArgs(1, 2); //=> [1, 2]
   *
   *      const takesOneArg = R.unary(takesTwoArgs);
   *      takesOneArg.length; //=> 1
   *      // Only 1 argument is passed to the wrapped function
   *      takesOneArg(1, 2); //=> [1, undefined]
   * @symb R.unary(f)(a, b, c) = f(a)
   */

  var unary = _curry1(function unary(fn) {
    return nAry(1, fn);
  });

  /**
   * 将一个柯里化的函数转换为一个 `n` 元函数。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Function
   * @sig Number -> (a -> b -> c ... -> z) -> ((a -> b -> c ...) -> z)
   * @param {Number} length The arity for the returned function.
   * @param {Function} fn The function to uncurry.
   * @return {Function} A new function.
   * @see R.curry, R.curryN
   * @example
   *
   *      const addFour = a => b => c => d => a + b + c + d;
   *
   *      const uncurriedAddFour = R.uncurryN(4, addFour);
   *      uncurriedAddFour(1, 2, 3, 4); //=> 10
   */

  var uncurryN = _curry2(function uncurryN(depth, fn) {
    return curryN(depth, function () {
      var currentDepth = 1;
      var value = fn;
      var idx = 0;
      var endIdx;

      while (currentDepth <= depth && typeof value === 'function') {
        endIdx = currentDepth === depth ? arguments.length : idx + value.length;
        value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
        currentDepth += 1;
        idx = endIdx;
      }

      return value;
    });
  });

  /**
   * 通过一个种子值（ seed ）创建一个列表。`unfold` 接受一个迭代函数：该函数或者返回 false 停止迭代，或者返回一个长度为 2 的数组：数组首个元素添加到结果列表，第二个元素作为种子值传给下一轮迭代使用。
   *
   * 迭代函数接受单个参数： *(seed)*。
   *
   * @func
   * @memberOf R
   * @since v0.10.0
   * @category List
   * @sig (a -> [b]) -> * -> [b]
   * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
   *        either false to quit iteration or an array of length two to proceed. The element
   *        at index 0 of this array will be added to the resulting array, and the element
   *        at index 1 will be passed to the next call to `fn`.
   * @param {*} seed The seed value.
   * @return {Array} The final list.
   * @example
   *
   *      const f = n => n > 50 ? false : [-n, n + 10];
   *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
   * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
   */

  var unfold = _curry2(function unfold(fn, seed) {
    var pair = fn(seed);
    var result = [];

    while (pair && pair.length) {
      result[result.length] = pair[0];
      pair = fn(pair[1]);
    }

    return result;
  });

  /**
   * 集合并运算，合并两个列表为新列表（新列表中无重复元素）。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig [*] -> [*] -> [*]
   * @param {Array} as The first list.
   * @param {Array} bs The second list.
   * @return {Array} The first and second lists concatenated, with
   *         duplicates removed.
   * @example
   *
   *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
   */

  var union = _curry2(compose(uniq, _concat));

  function XUniqWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.items = [];
  }

  XUniqWith.prototype['@@transducer/init'] = _xfBase.init;
  XUniqWith.prototype['@@transducer/result'] = _xfBase.result;

  XUniqWith.prototype['@@transducer/step'] = function (result, input) {
    if (_includesWith(this.pred, input, this.items)) {
      return result;
    } else {
      this.items.push(input);
      return this.xf['@@transducer/step'](result, input);
    }
  };

  var _xuniqWith = _curry2(function _xuniqWith(pred, xf) {
    return new XUniqWith(pred, xf);
  });

  /**
   * 返回无重复元素的列表。元素通过 predicate 进行相同性判断。如果通过 predicate 判断两元素相同，保留第一个元素。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category List
   * @sig ((a, a) -> Boolean) -> [a] -> [a]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list The array to consider.
   * @return {Array} The list of unique items.
   * @example
   *
   *      const strEq = R.eqBy(String);
   *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
   *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
   *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
   *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
   */

  var uniqWith = _curry2(_dispatchable([], _xuniqWith, function (pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;

    while (idx < len) {
      item = list[idx];

      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }

      idx += 1;
    }

    return result;
  }));

  /**
   * 集合并运算，合并两个列表为新列表（新列表中无重复元素）。由 predicate 的返回值决定两元素是否重复。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category Relation
   * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
   * @param {Function} pred A predicate used to test whether two items are equal.
   * @param {Array} list1 The first list.
   * @param {Array} list2 The second list.
   * @return {Array} The first and second lists concatenated, with
   *         duplicates removed.
   * @see R.union
   * @example
   *
   *      const l1 = [{a: 1}, {a: 2}];
   *      const l2 = [{a: 1}, {a: 4}];
   *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
   */

  var unionWith = _curry3(function unionWith(pred, list1, list2) {
    return uniqWith(pred, _concat(list1, list2));
  });

  /**
   * 判断输入值是否满足 predicate，若不符合，则将输入值传给 `whenFalseFn` 处理，并将处理结果作为返回；若符合，则将输入值原样返回。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
   * @param {Function} pred        A predicate function
   * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
   *                               to a falsy value.
   * @param {*}        x           An object to test with the `pred` function and
   *                               pass to `whenFalseFn` if necessary.
   * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
   * @see R.ifElse, R.when, R.cond
   * @example
   *
   *      let safeInc = R.unless(R.isNil, R.inc);
   *      safeInc(null); //=> null
   *      safeInc(1); //=> 2
   */

  var unless = _curry3(function unless(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
  });

  /**
   * `R.chain(R.identity)` 的简写, 对 [Chain](https://github.com/fantasyland/fantasy-land#chain) 类型的数据消除一层嵌套.
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig Chain c => c (c a) -> c a
   * @param {*} list
   * @return {*}
   * @see R.flatten, R.chain
   * @example
   *
   *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
   *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
   */

  var unnest = chain(_identity);

  /**
   * 接受一个 predicate ，transform function 和 初始值，返回一个与初始值相同类型的值。对输入值进行 transform ，直到 transform 的结果满足 predicate，此时返回这个满足 predicate 的值。
   *
   * @func
   * @memberOf R
   * @since v0.20.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> a) -> a -> a
   * @param {Function} pred A predicate function
   * @param {Function} fn The iterator function
   * @param {*} init Initial value
   * @return {*} Final value that satisfies predicate
   * @example
   *
   *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
   */

  var until = _curry3(function until(pred, fn, init) {
    var val = init;

    while (!pred(val)) {
      val = fn(val);
    }

    return val;
  });

  /**
   * 如果指定属性的值为数组，其结果为相同顺序的对象数组，对象里指定属性的值被数组对应元素替换，其余属性和原对象属性一致。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Object
   * @sig String -> {k: [v]} -> [{k: v}]
   * @param {String} key The key to determine which property of the object should be unwind
   * @param {Object} object The object containing list under property named as key which is to unwind
   * @return {List} A new list of object containing the value of input key having list replaced by each element in the object.
   * @example
   *
   * R.unwind('hobbies', {
   *   name: 'alice',
   *   hobbies: ['Golf', 'Hacking'],
   *   colors: ['red', 'green'],
   * });
   * // [
   * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
   * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
   * // ]
   */

  var unwind = _curry2(function (key, object) {
    // If key is not in object or key is not as a list in object
    if (!(key in object && _isArray(object[key]))) {
      return [object];
    } // Map over object[key] which is a list and assoc each element with key


    return _map(function (item) {
      return _assoc(key, item, object);
    }, object[key]);
  });

  /**
   * 返回对象所有属性的值，包括原型链上的属性。注意：不同 JS 运行环境输出数组的顺序可能不一致。
   *
   * @func
   * @memberOf R
   * @since v0.2.0
   * @category Object
   * @sig {k: v} -> [v]
   * @param {Object} obj The object to extract values from
   * @return {Array} An array of the values of the object's own and prototype properties.
   * @see R.values, R.keysIn
   * @example
   *
   *      const F = function() { this.x = 'X'; };
   *      F.prototype.y = 'Y';
   *      const f = new F();
   *      R.valuesIn(f); //=> ['X', 'Y']
   */

  var valuesIn = _curry1(function valuesIn(obj) {
    var prop;
    var vs = [];

    for (prop in obj) {
      vs[vs.length] = obj[prop];
    }

    return vs;
  });

  var Const = function Const(x) {
    return {
      value: x,
      'fantasy-land/map': function fantasyLandMap() {
        return this;
      }
    };
  };
  /**
   * 返回数据结构中，lens 聚焦的部分。lens 的焦点决定了数据结构中的哪部分是可见的。
   *
   * @func
   * @memberOf R
   * @since v0.16.0
   * @category Object
   * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
   * @sig Lens s a -> s -> a
   * @param {Lens} lens
   * @param {*} x
   * @return {*}
   * @see R.set, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
   * @example
   *
   *      const xLens = R.lensProp('x');
   *
   *      R.view(xLens, {x: 1, y: 2});  //=> 1
   *      R.view(xLens, {x: 4, y: 2});  //=> 4
   */


  var view = _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });

  /**
   * 判断输入值是否满足 predicate，若符合，则将输入值传给 `whenTrueFn` 处理，并将处理结果作为返回；若不符合，则将输入值原样返回。
   *
   * @func
   * @memberOf R
   * @since v0.18.0
   * @category Logic
   * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
   * @param {Function} pred       A predicate function
   * @param {Function} whenTrueFn A function to invoke when the `condition`
   *                              evaluates to a truthy value.
   * @param {*}        x          An object to test with the `pred` function and
   *                              pass to `whenTrueFn` if necessary.
   * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
   * @see R.ifElse, R.unless, R.cond
   * @example
   *
   *      // truncate :: String -> String
   *      const truncate = R.when(
   *        R.propSatisfies(R.gt(R.__, 10), 'length'),
   *        R.pipe(R.take(10), R.append('…'), R.join(''))
   *      );
   *      truncate('12345');         //=> '12345'
   *      truncate('0123456789ABC'); //=> '0123456789…'
   */

  var when = _curry3(function when(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
  });

  /**
   * 接受一个测试规范对象和一个待检测对象，如果测试满足规范，则返回 true，否则返回 false。测试规范对象的每个属性值都必须是 predicate 。每个 predicate 作用于待检测对象对应的属性值，如果所有 predicate 都返回 true，则 `where` 返回 true，否则返回 false 。
   *
   * `where` 非常适合于需要声明式表示约束的函数，比如 [`filter`](#filter) 和 [`find`](#find) 。
   *
   * @func
   * @memberOf R
   * @since v0.1.1
   * @category Object
   * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
   * @param {Object} spec
   * @param {Object} testObj
   * @return {Boolean}
   * @see R.propSatisfies, R.whereEq
   * @example
   *
   *      // pred :: Object -> Boolean
   *      const pred = R.where({
   *        a: R.equals('foo'),
   *        b: R.complement(R.equals('bar')),
   *        x: R.gt(R.__, 10),
   *        y: R.lt(R.__, 20)
   *      });
   *
   *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
   *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
   *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
   *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
   *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
   */

  var where = _curry2(function where(spec, testObj) {
    for (var prop in spec) {
      if (_has(prop, spec) && !spec[prop](testObj[prop])) {
        return false;
      }
    }

    return true;
  });

  /**
   * 接受一个测试规范对象和一个待检测对象，测试规范对象的每个属性值都必须是 predicate 。
   * 每个 predicate 作用于待检测对象对应的属性值，只要有一个 predicate 返回 true，则 `whereAny` 返回 true，否则返回 false 。
   *
   * `whereAny` 非常适合于需要声明式表示约束的函数比如 [`filter`](#filter) and [`find`](#find)。
   *
   * @func
   * @memberOf R
   * @since v0.28.0
   * @category Object
   * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
   * @param {Object} spec
   * @param {Object} testObj
   * @return {Boolean}
   * @see R.propSatisfies, R.where
   * @example
   *
   *      // pred :: Object -> Boolean
   *      const pred = R.whereAny({
   *        a: R.equals('foo'),
   *        b: R.complement(R.equals('xxx')),
   *        x: R.gt(R.__, 10),
   *        y: R.lt(R.__, 20)
   *      });
   *
   *      pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
   *      pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
   *      pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
   *      pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
   *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
   */

  var whereAny = _curry2(function whereAny(spec, testObj) {
    for (var prop in spec) {
      if (_has(prop, spec) && spec[prop](testObj[prop])) {
        return true;
      }
    }

    return false;
  });

  /**
   * 接受一个测试规范对象和一个待检测对象，如果测试满足规范，则返回 true，否则返回 false。如果对于每一个测试规范对象的属性值，待检测对象中都有一个对应的相同属性值，则 `where` 返回 true，否则返回 false 。
   *
   * `whereEq` 是 [`where`](#where) 的一种特殊形式。
   *
   * @func
   * @memberOf R
   * @since v0.14.0
   * @category Object
   * @sig {String: *} -> {String: *} -> Boolean
   * @param {Object} spec
   * @param {Object} testObj
   * @return {Boolean}
   * @see R.propEq, R.where
   * @example
   *
   *      // pred :: Object -> Boolean
   *      const pred = R.whereEq({a: 1, b: 2});
   *
   *      pred({a: 1});              //=> false
   *      pred({a: 1, b: 2});        //=> true
   *      pred({a: 1, b: 2, c: 3});  //=> true
   *      pred({a: 1, b: 1});        //=> false
   */

  var whereEq = _curry2(function whereEq(spec, testObj) {
    return where(map(equals, spec), testObj);
  });

  /**
   * 求第二个列表中，未包含在第一个列表中的任一元素的集合。通过 [`R.equals`](#equals) 函数进行相等性判断。
   *
   * 若在列表位置中给出 transfomer，则用作 transducer 。
   *
   * @func
   * @memberOf R
   * @since v0.19.0
   * @category List
   * @sig [a] -> [a] -> [a]
   * @param {Array} list1 The values to be removed from `list2`.
   * @param {Array} list2 The array to remove values from.
   * @return {Array} The new array without values in `list1`.
   * @see R.transduce, R.difference, R.remove
   * @example
   *
   *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
   */

  var without = _curry2(function (xs, list) {
    return reject(flip(_includes)(xs), list);
  });

  /**
   * 异或操作。
   *
   * 如果其中一个参数为真，另一个参数为假，则返回`true` ；否则返回`false`。
   *
   * @func
   * @memberOf R
   * @since v0.27.1
   * @category Logic
   * @sig a -> b -> Boolean
   * @param {Any} a
   * @param {Any} b
   * @return {Boolean} true if one of the arguments is truthy and the other is falsy
   * @see R.or, R.and
   * @example
   *
   *      R.xor(true, true); //=> false
   *      R.xor(true, false); //=> true
   *      R.xor(false, true); //=> true
   *      R.xor(false, false); //=> false
   */

  var xor = _curry2(function xor(a, b) {
    return Boolean(!a ^ !b);
  });

  /**
   * 将两个列表的元素两两组合，生成一个新的元素对列表。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b] -> [[a,b]]
   * @param {Array} as The first list.
   * @param {Array} bs The second list.
   * @return {Array} The list made by combining each possible pair from
   *         `as` and `bs` into pairs (`[a, b]`).
   * @example
   *
   *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
   * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
   */

  var xprod = _curry2(function xprod(a, b) {
    // = xprodWith(prepend); (takes about 3 times as long...)
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];

    while (idx < ilen) {
      j = 0;

      while (j < jlen) {
        result[result.length] = [a[idx], b[j]];
        j += 1;
      }

      idx += 1;
    }

    return result;
  });

  /**
   * 将两个列表对应位置的元素组合，生成一个新的元素对列表。生成的列表长度取决于较短的输入列表的长度。
   *
   * 注意，`zip` 等价于 `zipWith(function(a, b) { return [a, b] })` 。
   *
   * @func
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig [a] -> [b] -> [[a,b]]
   * @param {Array} list1 The first array to consider.
   * @param {Array} list2 The second array to consider.
   * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
   * @example
   *
   *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
   * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
   */

  var zip = _curry2(function zip(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);

    while (idx < len) {
      rv[idx] = [a[idx], b[idx]];
      idx += 1;
    }

    return rv;
  });

  /**
   * 将两个列表对应位置的元素作为键值对组合，生成一个新的键值对的列表。生成的列表长度取决于较短的输入列表的长度。
   *
   * 注意，`zipObj` 等价于 `pipe(zip, fromPairs)` 。
   *
   * @func
   * @memberOf R
   * @since v0.3.0
   * @category List
   * @sig [String] -> [*] -> {String: *}
   * @param {Array} keys The array that will be properties on the output object.
   * @param {Array} values The list of values on the output object.
   * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
   * @example
   *
   *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
   */

  var zipObj = _curry2(function zipObj(keys, values) {
    var idx = 0;
    var len = Math.min(keys.length, values.length);
    var out = {};

    while (idx < len) {
      out[keys[idx]] = values[idx];
      idx += 1;
    }

    return out;
  });

  /**
   * 将两个列表对应位置的元素通过一个函数处理，生成一个新的元素的列表。生成的列表长度取决于较短的输入列表的长度。
   *
   * @function
   * @memberOf R
   * @since v0.1.0
   * @category List
   * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
   * @param {Function} fn The function used to combine the two elements into one value.
   * @param {Array} list1 The first array to consider.
   * @param {Array} list2 The second array to consider.
   * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
   *         using `fn`.
   * @example
   *
   *      const f = (x, y) => {
   *        // ...
   *      };
   *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
   *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
   * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
   */

  var zipWith = _curry3(function zipWith(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);

    while (idx < len) {
      rv[idx] = fn(a[idx], b[idx]);
      idx += 1;
    }

    return rv;
  });

  /**
   * 创建一个 thunk 版本的函数。 thunk 会延迟计算直到需要其结果，从而实现惰性求值。
   *
   * @func
   * @memberOf R
   * @since v0.26.0
   * @category Function
   * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
   * @param {Function} fn A function to wrap in a thunk
   * @return {Function} Expects arguments for `fn` and returns a new function
   *  that, when called, applies those arguments to `fn`.
   * @see R.partial, R.partialRight
   * @example
   *
   *      R.thunkify(R.identity)(42)(); //=> 42
   *      R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
   */

  var thunkify = _curry1(function thunkify(fn) {
    return curryN(fn.length, function createThunk() {
      var fnArgs = arguments;
      return function invokeThunk() {
        return fn.apply(this, fnArgs);
      };
    });
  });

  exports.F = F;
  exports.T = T;
  exports.__ = __;
  exports.add = add;
  exports.addIndex = addIndex;
  exports.adjust = adjust;
  exports.all = all;
  exports.allPass = allPass;
  exports.always = always;
  exports.and = and;
  exports.andThen = andThen;
  exports.any = any;
  exports.anyPass = anyPass;
  exports.ap = ap;
  exports.aperture = aperture;
  exports.append = append;
  exports.apply = apply;
  exports.applySpec = applySpec;
  exports.applyTo = applyTo;
  exports.ascend = ascend;
  exports.assoc = assoc;
  exports.assocPath = assocPath;
  exports.binary = binary;
  exports.bind = bind;
  exports.both = both;
  exports.call = call;
  exports.chain = chain;
  exports.clamp = clamp;
  exports.clone = clone;
  exports.collectBy = collectBy;
  exports.comparator = comparator;
  exports.complement = complement;
  exports.compose = compose;
  exports.composeWith = composeWith;
  exports.concat = concat;
  exports.cond = cond;
  exports.construct = construct;
  exports.constructN = constructN;
  exports.converge = converge;
  exports.count = count;
  exports.countBy = countBy;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.dec = dec;
  exports.defaultTo = defaultTo;
  exports.descend = descend;
  exports.difference = difference;
  exports.differenceWith = differenceWith;
  exports.dissoc = dissoc;
  exports.dissocPath = dissocPath;
  exports.divide = divide;
  exports.drop = drop;
  exports.dropLast = dropLast$1;
  exports.dropLastWhile = dropLastWhile$1;
  exports.dropRepeats = dropRepeats;
  exports.dropRepeatsWith = dropRepeatsWith;
  exports.dropWhile = dropWhile;
  exports.either = either;
  exports.empty = empty;
  exports.endsWith = endsWith;
  exports.eqBy = eqBy;
  exports.eqProps = eqProps;
  exports.equals = equals;
  exports.evolve = evolve;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.findLast = findLast;
  exports.findLastIndex = findLastIndex;
  exports.flatten = flatten;
  exports.flip = flip;
  exports.forEach = forEach;
  exports.forEachObjIndexed = forEachObjIndexed;
  exports.fromPairs = fromPairs;
  exports.groupBy = groupBy;
  exports.groupWith = groupWith;
  exports.gt = gt;
  exports.gte = gte;
  exports.has = has;
  exports.hasIn = hasIn;
  exports.hasPath = hasPath;
  exports.head = head;
  exports.identical = identical;
  exports.identity = identity;
  exports.ifElse = ifElse;
  exports.inc = inc;
  exports.includes = includes;
  exports.indexBy = indexBy;
  exports.indexOf = indexOf;
  exports.init = init;
  exports.innerJoin = innerJoin;
  exports.insert = insert;
  exports.insertAll = insertAll;
  exports.intersection = intersection;
  exports.intersperse = intersperse;
  exports.into = into;
  exports.invert = invert;
  exports.invertObj = invertObj;
  exports.invoker = invoker;
  exports.is = is;
  exports.isEmpty = isEmpty;
  exports.isNil = isNil;
  exports.join = join;
  exports.juxt = juxt;
  exports.keys = keys;
  exports.keysIn = keysIn;
  exports.last = last;
  exports.lastIndexOf = lastIndexOf;
  exports.length = length;
  exports.lens = lens;
  exports.lensIndex = lensIndex;
  exports.lensPath = lensPath;
  exports.lensProp = lensProp;
  exports.lift = lift;
  exports.liftN = liftN;
  exports.lt = lt;
  exports.lte = lte;
  exports.map = map;
  exports.mapAccum = mapAccum;
  exports.mapAccumRight = mapAccumRight;
  exports.mapObjIndexed = mapObjIndexed;
  exports.match = match;
  exports.mathMod = mathMod;
  exports.max = max;
  exports.maxBy = maxBy;
  exports.mean = mean;
  exports.median = median;
  exports.memoizeWith = memoizeWith;
  exports.mergeAll = mergeAll;
  exports.mergeDeepLeft = mergeDeepLeft;
  exports.mergeDeepRight = mergeDeepRight;
  exports.mergeDeepWith = mergeDeepWith;
  exports.mergeDeepWithKey = mergeDeepWithKey;
  exports.mergeLeft = mergeLeft;
  exports.mergeRight = mergeRight;
  exports.mergeWith = mergeWith;
  exports.mergeWithKey = mergeWithKey;
  exports.min = min;
  exports.minBy = minBy;
  exports.modify = modify;
  exports.modifyPath = modifyPath;
  exports.modulo = modulo;
  exports.move = move;
  exports.multiply = multiply;
  exports.nAry = nAry;
  exports.negate = negate;
  exports.none = none;
  exports.not = not;
  exports.nth = nth;
  exports.nthArg = nthArg;
  exports.o = o;
  exports.objOf = objOf;
  exports.of = of;
  exports.omit = omit;
  exports.on = on;
  exports.once = once;
  exports.or = or;
  exports.otherwise = otherwise;
  exports.over = over;
  exports.pair = pair;
  exports.partial = partial;
  exports.partialObject = partialObject;
  exports.partialRight = partialRight;
  exports.partition = partition;
  exports.path = path;
  exports.pathEq = pathEq;
  exports.pathOr = pathOr;
  exports.pathSatisfies = pathSatisfies;
  exports.paths = paths;
  exports.pick = pick;
  exports.pickAll = pickAll;
  exports.pickBy = pickBy;
  exports.pipe = pipe;
  exports.pipeWith = pipeWith;
  exports.pluck = pluck;
  exports.prepend = prepend;
  exports.product = product;
  exports.project = project;
  exports.promap = promap;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.propIs = propIs;
  exports.propOr = propOr;
  exports.propSatisfies = propSatisfies;
  exports.props = props;
  exports.range = range;
  exports.reduce = reduce;
  exports.reduceBy = reduceBy;
  exports.reduceRight = reduceRight;
  exports.reduceWhile = reduceWhile;
  exports.reduced = reduced;
  exports.reject = reject;
  exports.remove = remove;
  exports.repeat = repeat;
  exports.replace = replace;
  exports.reverse = reverse;
  exports.scan = scan;
  exports.sequence = sequence;
  exports.set = set;
  exports.slice = slice;
  exports.sort = sort;
  exports.sortBy = sortBy;
  exports.sortWith = sortWith;
  exports.split = split;
  exports.splitAt = splitAt;
  exports.splitEvery = splitEvery;
  exports.splitWhen = splitWhen;
  exports.splitWhenever = splitWhenever;
  exports.startsWith = startsWith;
  exports.subtract = subtract;
  exports.sum = sum;
  exports.symmetricDifference = symmetricDifference;
  exports.symmetricDifferenceWith = symmetricDifferenceWith;
  exports.tail = tail;
  exports.take = take;
  exports.takeLast = takeLast;
  exports.takeLastWhile = takeLastWhile;
  exports.takeWhile = takeWhile;
  exports.tap = tap;
  exports.test = test;
  exports.thunkify = thunkify;
  exports.times = times;
  exports.toLower = toLower;
  exports.toPairs = toPairs;
  exports.toPairsIn = toPairsIn;
  exports.toString = toString$1;
  exports.toUpper = toUpper;
  exports.transduce = transduce;
  exports.transpose = transpose;
  exports.traverse = traverse;
  exports.trim = trim;
  exports.tryCatch = tryCatch;
  exports.type = type;
  exports.unapply = unapply;
  exports.unary = unary;
  exports.uncurryN = uncurryN;
  exports.unfold = unfold;
  exports.union = union;
  exports.unionWith = unionWith;
  exports.uniq = uniq;
  exports.uniqBy = uniqBy;
  exports.uniqWith = uniqWith;
  exports.unless = unless;
  exports.unnest = unnest;
  exports.until = until;
  exports.unwind = unwind;
  exports.update = update;
  exports.useWith = useWith;
  exports.values = values;
  exports.valuesIn = valuesIn;
  exports.view = view;
  exports.when = when;
  exports.where = where;
  exports.whereAny = whereAny;
  exports.whereEq = whereEq;
  exports.without = without;
  exports.xor = xor;
  exports.xprod = xprod;
  exports.zip = zip;
  exports.zipObj = zipObj;
  exports.zipWith = zipWith;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
