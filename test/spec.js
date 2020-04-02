const Application = require("spectron").Application;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const path = require("path");
const process = require("process");

const electronPath = path.join(
  __dirname,
  "../node_modules",
  ".bin",
  "electron"
);

import DailymotionParser from "../src/plugins/DailymotionParser";
import YoutubeParser from "../src/plugins/YoutubeParser";
import TwitchParser from "../src/plugins/TwitchParser";
import Parser from "../src/plugins/Parser";
import FacebookParser from "../src/plugins/FacebookParser";

chai.should();
chai.use(chaiAsPromised);

let app;

describe("overlay", function() {
  this.timeout(20000);

  before(
    () =>
      new Promise(resolve => {
        // Use electron-compile to activate babel and webpack
        // Following this scheme: https://github.com/electron-userland/electron-compile/issues/178
        app = new Application({
          path: electronPath,
          args: [path.join(__dirname, "..", "src", "main.js")]
        });

        app.start().then(resolve);
      })
  );

  before(function() {
    chaiAsPromised.transferPromiseness = app.transferPromiseness;
  });

  after(function() {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  describe("ui", function() {
    it("opens a window", function() {
      return app.client
        .waitUntilWindowLoaded()
        .getWindowCount()
        .should.eventually.have.at.least(1)
        .browserWindow.isMinimized()
        .should.eventually.be.false.browserWindow.isVisible()
        .should.eventually.be.true.browserWindow.isFocused()
        .should.eventually.be.true.browserWindow.getBounds()
        .should.eventually.have.property("width")
        .and.be.above(0)
        .browserWindow.getBounds()
        .should.eventually.have.property("height")
        .and.be.above(0);
    });

    it("shows input field", function() {
      return app.client.elementIdValue("input#video-url").should.be.not.null;
    });

    it("responds to click on button", function() {
      return app.client
        .setValue(
          "input#video-url",
          "https://www.youtube.com/watch?v=kN1Czs0m1SU"
        )
        .element("button#open")
        .isEnabled()
        .should.eventually.be.true.click("button#open")
        .waitUntilWindowLoaded(5000)
        .getWindowCount()
        .should.eventually.have.at.least(2)
        .setValue("input#video-url", "");
    });

    it("pastes from clipboard", function() {
      return app.electron.clipboard
        .writeText("https://www.youtube.com/watch?v=kN1Czs0m1SU")
        .setValue("input#video-url", "")
        .element("button#paste-url")
        .click()
        .getValue("input#video-url")
        .should.eventually.equal("https://www.youtube.com/watch?v=kN1Czs0m1SU");
    });

    it("opens help", function() {
      return app.client.element("div#help-tab").click();
    });

    it("opens about", function() {
      return app.client.element("div#about-tab").click();
    });
  });

  describe("parsers", function() {
    describe("all parsers", function() {
      it("accepts link", function() {
        return new Parser()
          .parse(
            "https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar",
            "720"
          )
          .should.equal(
            "https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
          );
      });

      it("denies link", function() {
        return new Parser().parse("") === null;
      });
    });

    describe("youtube", function() {
      it("accepts long link", function() {
        return new YoutubeParser()
          .parse("https://www.youtube.com/watch?v=2RxHQoiDctI", "720")
          .should.equal("https://youtube.com/embed/2RxHQoiDctI?vq=hd720");
      });

      it("accepts short link", function() {
        return new YoutubeParser()
          .parse("https://youtu.be/2RxHQoiDctI", "720")
          .should.equal("https://youtube.com/embed/2RxHQoiDctI?vq=hd720");
      });

      it("creates timestamp link", function() {
        return new YoutubeParser()
          .parse("https://youtu.be/2RxHQoiDctI?t=10", "720")
          .should.equal(
            "https://youtube.com/embed/2RxHQoiDctI?vq=hd720&start=10"
          );
      });

      it("accepts playlist link", function() {
        return new YoutubeParser()
          .parse(
            "https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
          )
          .should.equal(
            "https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
          );
      });

      it("denies corrupted link", function() {
        return (
          new YoutubeParser().parse(
            "https://www.yue.com/watch?v=2RxHQoiDctI"
          ) === null
        );
      });
    });

    describe("dailymotion", function() {
      it("accepts link", function() {
        return new DailymotionParser()
          .parse("https://www.dailymotion.com/video/x209qoh", "720")
          .should.equal(
            "https://dailymotion.com/embed/video/x209qoh?quality=720"
          );
      });

      it("denies link", function() {
        return new DailymotionParser().parse("") === null;
      });
    });

    describe("facebook", function() {
      it("accepts link", function() {
        return new FacebookParser()
          .parse(
            "https://www.facebook.com/facebook/videos/10153231379946729/",
            "720"
          )
          .should.equal(
            "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F"
          );
      });

      it("denies link", function() {
        return new DailymotionParser().parse("") === null;
      });
    });

    describe("twitch", function() {
      it("accepts link", function() {
        return new TwitchParser()
          .parse("https://twitch.tv/dhalucard", "720")
          .should.equal(
            "https://player.twitch.tv/?channel=dhalucard&quality=high"
          );
      });

      it("denies link", function() {
        return new TwitchParser().parse("https://twitch.t/dhalucard") === null;
      });
    });
  });
});
