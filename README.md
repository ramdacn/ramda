Ramda
=============

一款实用的 JavaScript 函数式编程库。

[![Build Status](https://travis-ci.org/ramda/ramda.svg?branch=master)](https://travis-ci.org/ramda/ramda)
[![npm module](https://badge.fury.io/js/ramda.svg)](https://www.npmjs.org/package/ramda)
[![dependencies](https://david-dm.org/ramda/ramda.svg)](https://david-dm.org/ramda/ramda)
[![Gitter](https://badges.gitter.im/Join_Chat.svg)](https://gitter.im/ramda/ramda?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Why Ramda?
----------

<img src="http://ramda.jcphillipps.com/logo/ramdaFilled_200x235.png" 
     width="170" height="190" align="right" hspace="12" />

目前已经存在许多优秀的函数式的库。通常，它们作为通用工具包，适合在多种范式下工作。Ramda 有一个更专注的目标。我们想要一个专门为函数式编程风格设计的库，一个更容易创建函数式 pipeline、且从不改变用户数据的库。

What's different?
-----------------

Ramda 主要的独特性质如下：

* Ramda 强调更加纯粹的函数式风格。数据不变性和函数无副作用是其设计理念的核心。这可以帮助你使用简洁、优雅的代码来完成工作。

* Ramda 函数本身都是自动柯里化的。这可以让你在只提供部分参数的情况下，轻松地在已有函数的基础上创建新函数。

* Ramda 函数的参数的排列更便于柯里化。通常最后提供要操作的数据。

* 最后两点一起，使得将多个函数构建为简单的函数序列变得非常容易，每个函数对数据进行变换并将结果传递给下一个函数。Ramda 的设计支持这种风格的编程。

简介
-------------

* [Introducing Ramda](http://buzzdecafe.github.io/code/2014/05/16/introducing-ramda) by Buzz de Cafe
* [Why Ramda?](http://fr.umio.us/why-ramda/) by Scott Sauyet
* [Favoring Curry](http://fr.umio.us/favoring-curry/) by Scott Sauyet
* [Why Curry Helps](https://hughfdjackson.com/javascript/why-curry-helps/) by Hugh Jackson
* [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA&app=desktop) by Brian Lonsdorf
* [Thinking in Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda) by Randy Coulman


理念
----------

使用 Ramda 时，应该感觉像使用原生 JavaScript 一样，它是实用的且函数式的 JavaScript。Ramda 没有在字符串中引入 lambda 表达式，也没有借用 consed 列表，也不是要移植所有的 Clojure 函数。

Ramda 基本的数据结构都是原生 JavaScript 对象，我们常用的集合是 JavaScript 的数组。Ramda 还保留了许多其他原生 JavaScript 特性，例如，函数是具有属性的对象。

函数式编程很大一部分主题是关于对象不变性和函数无副作用两方面。虽然 Ramda 没有特别加强这方面实现，但它足以使这两方面在编程时尽可能自然、方便。

Ramda 的目标是让实现（编程和 API 实现）简洁、优雅。但 API 为王。谓词我们牺牲了大量优雅、简洁的实现。

最后，Ramda 非常注重运行性能。可靠和快速的实现胜过强调函数式的纯度。（需要综合考虑性能和代码实现优雅性两方面。如 [Eweda](https://github.com/CrossEye/eweda) ，过于强调实现的简洁优雅，而失去了实用价值）

安装
------------

使用 node：

```bash
$ npm install ramda
```

然后在 console 中使用：

```javascript
var R = require('ramda');
```

直接在浏览器中使用：

```html
<script src="path/to/yourCopyOf/ramda.js"></script>
```

或使用最小化版本：

```html
<script src="path/to/yourCopyOf/ramda.min.js"></script>
```

或从 CDN 上获取：

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.23.0/ramda.min.js"></script>
```

或使用 [jsDelivr](http://jsdelivr.com) 的以下任意链接：

```html
<script src="//cdn.jsdelivr.net/ramda/0.23.0/ramda.min.js"></script>
<script src="//cdn.jsdelivr.net/ramda/0.23/ramda.min.js"></script>
<script src="//cdn.jsdelivr.net/ramda/latest/ramda.min.js"></script>
```

（注意，使用 `最新` 的版本可能会带来很大的风险，ramda API 的更改可能会对以前代码造成破坏。）

这些脚本标签在浏览器中添加一个全局变量 `R`。

或者也可以借助 [the bookmarklet](https://github.com/ramda/ramda/blob/master/BOOKMARKLET.md)，将 ramda 注入到几乎任何不安全的网站。

### 构建库

* 在基于 Unix 的平台上，运行 `npm run build` 更新 __dist/ramda.js__ 和 __dist/ramda.min.js__
* 在 Windows 上，将 `scripts/build --complete` 的运行结果输出到一个临时文件中，然后将该文件重命名为 __dist/ramda.js__.

#### 部分构建库 

可以生成一个 Ramda 的函数子集来减小库文件大小。Ramda 的构建系统通过命令行标志来支持部分构建。例如，如果要使用 `R.compose`, `R.reduce`, and `R.filter` ，可以创建一个部分构建：

    ./scripts/build -- src/compose.js src/reduce.js src/filter.js > dist/ramda.custom.js

上述命令需要安装 Node/io.js。

文档
-------------

请查看 [API 文档](http://ramdajs.com/docs/).

关于名字
--------

好吧，因为我们喜欢羊，就是这样。名字要简洁、且未被占用。它可以是 `eweda`，然后我们被迫叫它 _eweda lamb!_，但没有想要这个名字。对于非英语国家的人，lambs 是羔羊，ewes 是母羊，rams 是公羊。所以 ramda 可能是一个成年的 lambda ...，也可能不是。（双关，既有 lambda 表示式的意思，也有羔羊的意思，愿 Ramda 发展壮大）



Running The Test Suite
----------------------

**Console:**

To run the test suite from the console, you need to have `mocha` installed:

    npm install -g mocha

Then from the root of the project, you can just call

    mocha

Alternately, if you've installed the dependencies, via:

    npm install

then you can run the tests (and get detailed output) by running:

    npm test

**Browser:**

To run the test suite in the browser, you can simply open `test/index.html`.

Alternatively, you can use [testem](https://github.com/airportyh/testem) to
test across different browsers (or even headlessly), with livereloading of
tests too. Install testem (`npm install -g testem`) and run `testem`. Open the
link provided in your browser and you will see the results in your terminal.

If you have _PhantomJS_ installed, you can run `testem -l phantomjs` to run the
tests completely headlessly.




Acknowledgements
-----------------

Thanks to [J. C. Phillipps](http://www.jcphillipps.com) for the Ramda logo.
Ramda logo artwork &copy; 2014 J. C. Phillipps. Licensed Creative Commons 
[CC BY-NC-SA 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/).
