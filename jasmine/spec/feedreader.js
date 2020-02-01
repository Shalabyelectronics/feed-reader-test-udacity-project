$(
  (function() {
    describe("RSS Feeds", () => {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it("are defined", () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });
      /* I Wrote a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("each has url", () => {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.constructor).toBe(String);
          expect(feed.url.length).not.toBe(0);
        }
      });

      /* I Wrote a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it("each has name", () => {
        for (let feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name.constructor).toBe(String);
          expect(feed.name.length).not.toBe(0);
        }
      });
    });

    describe("the menu", () => {
      /* I Wrote a test that ensures the menu element is
       * hidden by default.
       */
      it("hidden by default", () => {
        let isHidden = document.body.classList.contains("menu-hidden");
        expect(isHidden).toBe(true);
      });

      it("toggles view when icon is clicked", () => {
        /* I Wrote a test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        let menuIcon = document.querySelector("a.menu-icon-link");
        menuIcon.click();
        expect(document.body.classList.contains("menu-hidden")).toBe(false);
        menuIcon.click();
        expect(document.body.classList.contains("menu-hidden")).toBe(true);
      });
    });

    describe("Initial Entries", () => {
      /* I Wrote a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
      beforeEach(function(done) {
        loadFeed(1, done);
      });

      it("has entries in feed container", () => {
        let feedContainer = document.querySelector("div.feed");
        let entries = feedContainer.querySelectorAll("article.entry");
        expect(entries.length).toBeGreaterThan(0);
      });
    });

    describe("New Feed Selection", () => {
      /* I Wrote a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
      let firstFeed, secondFeed;
      beforeEach(function(done) {
        loadFeed(3, () => {
          firstFeed = document.querySelector("div.feed").innerHTML;
          loadFeed(2, () => {
            secondFeed = document.querySelector("div.feed").innerHTML;
            done();
          });
        });
      });
      it("load new feeds", () => {
        expect(firstFeed).not.toBe(secondFeed);
      });
    });
  })()
);
