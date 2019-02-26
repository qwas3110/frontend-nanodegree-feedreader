/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

/*
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
    * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('订阅阅读器测试', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
        */
        function  notEmpty(data) {
            expect(data).toBeDefined();
            expect(data.length).not.toBe(0);
            expect(data).not.toBeNull();
        }


        it('allFeeds变量被定义了而且不是空的', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
         */

        it('有链接字段，并且不是空的', function () {
            for (let feed of allFeeds) {
                notEmpty(feed.url);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
         */

        it('有名字，并且不是空的', function () {
            for (let feed of allFeeds) {
                notEmpty(feed.name);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */

    describe('表单',function () {
        let body = document.querySelector("body");
        let menu = document.querySelector('.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO:
         * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
         * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
         */

        it('表单是否为隐藏的', function () {
            expect(body.className.includes('menu-hidden')).toBe(true);
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

         /* TODO:
         * 写一个测试用例保证当菜单图标被点击的时候菜单会切换可见状态。这个
         * 测试应该包含两个 expectation ： 党点击图标的时候菜单是否显示，
         * 再次点击的时候是否隐藏。
         */
        it('测试表单是否可以正常显示和隐藏', function () {
            menu.click();
            expect(body.className.includes('menu-hidden')).toBe(false);
            menu.click();
            expect(body.className.includes('menu-hidden')).toBe(true);
        });
    })

    /* TODO: Write a new test suite named "Initial Entries" */
    /* TODO: 13. 写一个叫做 "Initial Entries" 的测试用例 */

    describe("初始条目",function () {
        let feed = document.querySelector('.feed');

        beforeEach(function (done) {
            loadFeed(0,done);
        });

        /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */


         /* TODO:
         * 写一个测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素
         * 里面至少有一个 .entry 的元素。
         *
         * 记住 loadFeed() 函数是异步的所以这个而是应该使用 Jasmine 的 beforeEach
         * 和异步的 done() 函数。
         */

        it('.feed容器元素里面至少有一个 .entry的元素 ', function () {
            let entry = feed.querySelectorAll('.entry');
            expect(entry.length).toBeGreaterThan(0);
        });


    })

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('条目选择测试', function () {
        let file1,file2;

        beforeEach(function (done) {
            loadFeed(1,function () {
                file1 = document.querySelector('.feed').innerText;
                loadFeed(2,function () {
                    file2 = document.querySelector('.feed').innerText;
                    done();
                });
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */

        it('条目是否正常切换', function (done) {
            expect(file1).not.toBe(file2);
            done();
        });


    })
}());
