/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         // not necessary to repeat describe('RSS..', function())
        it('feed has its url defined and is not ', function() {
          // do not write expect for forEach method!!!
          allFeeds.forEach(function(feed) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toBe(0);
          });
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // ES6 Javascript for forloop
      it('feed has its name defined and is not empty', function() {
        for(let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        }
      });
    });

      // 'toBe',
      // 'toBeCloseTo',
      // 'toBeDefined',
      // 'toBeFalsy',
      // 'toBeGreaterThan',
      // 'toBeLessThan',
      // 'toBeNaN',
      // 'toBeNull',
      // 'toBeTruthy',
      // 'toBeUndefined',
      // 'toContain',
      // 'toEqual',
      // 'toHaveBeenCalled',
      // 'toHaveBeenCalledWith',
      // 'toMatch',
      // 'toThrow',
      // 'toThrowError'

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         // body element has class="menu-hidden"
         // in app.js on line 130 is toggle class apllied for the element
      // Matcher - toContain with classList in Vanila JS
      it('menu element hidden by default', function() {
        expect($('body').hasClass("menu-hidden")).toBe(true);
      }); /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        // <a href="#" class="menu-icon-link"> in html
        // in app.js line 100/130 (click), menuIcon = $('.menu-icon-link');
      it('menu visibility changes when clicked', function() {
        // simulate click on the menu icon to open and hide again
        // needs to turn off first then on - if not => fail
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(false);
        // when click again toggle icon menu to disappear again
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
       /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         // before we start each test we need to load 1st feed (function loadFeed with at least 1 element/feed)
         // beforeEach method and callback fce (done()) help to test this
         // callback fce (done) runs once the previous task is finished
         // we run beforEach, with callback fce where loadFeed with its 1st element and its other callback ..done()ll which makes sure that loadFeed will be loaded fully
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });
      // test whether elements of the .feed container with .entry class
      // check length to be sure at least 1 element exist within feed!!!
      // in ...class feed, is 1 or more ...class entry
      it('has 1 element at least', function() {
        let anyFeeds = $('.feed .entry');
        expect(anyFeeds.length).toBeGreaterThan(0);
      });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    // I call twice this async function - call loadFeed() 2x
    // ? differs new feed from previous one
    // 2 variables to compare
    describe('New Feed Selection', function() {
      // variables with html content
      let firstFeedCont;
      let secondFeedCont;
      // do we have at least 2 feeds to check
      it('container has 2 feeds', function() {
        expect(allFeeds.length).toBeGreaterThan(1);
      });

    // because is async fce loadFeed, we use beforeEach
    // to check it was appropriately fully loaded first
    describe('is loading another feed', function() {
      // we check with callback done() whether both feeds were loaded
      beforeEach(function(done) {
        // we store html content (link in <a>) in variable firstFeedCont
        // callback runs after the previous task is finished (loadFeed fce)
        // nested callbacks firstly - 1st feed, then start 2nd callback with 2nd feed
        loadFeed(1, function() {
          firstFeedCont = $('.feed').html();
        // within firstFeed's callback we will load the second feed as well
        // not forget single quotes!!!
          loadFeed(0, function() {
            secondFeedCont = $('.feed').html();
            // it will wait until is done thanks done()
            done();
            });
        });
      });
      // when loadFeed [0] element first then I need to use afterEach method
    // after everything is loaded and stored in variables =>
    // now we check the content of both variables (their html content)
      it('loaded different content of the feed', function() {
        expect(firstFeedCont).not.toBe(secondFeedCont);
      });
    });
  });
}());












