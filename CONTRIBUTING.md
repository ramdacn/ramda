# Contributing

1.  Fork the project and clone your fork.

2.  Create a local feature branch:

        $ git checkout -b <branch>

3.  If adding a function `R.foo`, define it in __src/foo.js__, require it in
    __index.js__, and include unit tests in __test/foo.js__. It is not necessary
    to include the `@since` annotation for new functions as it will be set
    during the release process of the following release. If adding an internal
    function `_foo`, define it in __src/internal/_foo.js__.

4.  Make one or more atomic commits. Each commit should have a descriptive
    commit message, wrapped at 72 characters. Do not commit changes to
    __dist/ramda.js__.

5.  Run `npm test` (or `make test lint`) and address any errors. It will install
    needed dependencies locally.  Preferably, fix commits in place using `git
    rebase` or `git commit --amend` to make the changes easier to review and to
    keep the history tidy.

6.  Push to your fork:

        $ git push origin <branch>

7.  Open a pull request.

# 中文翻译规范

1. 英文和中文之间需要空格隔开。

2. 第一期只翻译最基本的注释，不翻译下面的参数注释等。

3. predicate 直接写成 predicate 后面不用加“方法” 和 “函数” 等字样？

4. 每一段文字是一行，段落之间空一行。

5. 如果遇到原文错误，可以直接给 ramda 仓库提 pr

6. 反引号 "`" 包裹的内容，与其他元素之间空格隔开。

7. takes 统一为 “接收” 

8. filterable ***able 等是翻译，还是保留？

9. given 统一为 “给定” ， specified -> 指定

10. default -> 默认

11. otherwise -> 否则，并且否则前面用 分号 ；隔开

12. copy 拷贝

13. 每段话如无特殊情况以句号结尾，检查一下，（也有可能是冒号：，然后下面是解释）

14. is equivalent to -> 等价于

15. left-to-right -> 从左往右，right-to-left

16. in `R.equals` terms -> 通过 ` R.equals` 函数进行相等性判断

17. list -> 列表
