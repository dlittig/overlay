import "@babel/polyfill";
import { app } from "./prepareTest";
import { setupBrowser } from "@testing-library/webdriverio";

import DailymotionParser from "../src/plugins/DailymotionParser";
import YoutubeParser from "../src/plugins/YoutubeParser";
import TwitchParser from "../src/plugins/TwitchParser";
import Parser from "../src/plugins/Parser";
import FacebookParser from "../src/plugins/FacebookParser";

beforeAll(async () => {
  await app.start();
});

afterAll(async () => {
  if (app && app.isRunning()) await app.stop();
});

beforeEach(() => {
  setupBrowser(app.client);
});

describe("App", () => {
  it("should launch app", async () => {
    const isVisible = await app.browserWindow.isVisible();
    expect(isVisible).toBe(true);
  });
});

describe("ui", () => {
  it("opens a window", async () => {
    await app.client.waitUntilWindowLoaded();

    expect(await app.client.getWindowCount()).toBeGreaterThanOrEqual(2);
    expect(await app.browserWindow.isMinimized()).toBe(false);
    expect(await app.browserWindow.isVisible()).toBe(true);
    expect(await app.browserWindow.isFocused()).toBe(true);

    const bounds = await app.browserWindow.getBounds();
    expect(bounds).toHaveProperty("width");
    expect(bounds).toHaveProperty("height");
    expect(bounds.width).toBeGreaterThan(0);
    expect(bounds.height).toBeGreaterThan(0);
  });

  it("shows input field", async () => {
    const element = await app.client.$("input#video-url");
    expect(element).not.toHaveProperty("error");
  });

  it("responds to click on button", async () => {
    const value = "https://www.youtube.com/watch?v=kN1Czs0m1SU";

    const inputElement = await app.client.$("input#video-url");
    await inputElement.setValue(value);
    expect(await inputElement.getValue()).toEqual(value);

    const buttonElement = await app.client.$("button#open");
    expect(await buttonElement.isEnabled()).toBe(true);
    await buttonElement.click();

    await app.client.waitUntilWindowLoaded(3000);
    expect(await app.client.getWindowCount()).toBeGreaterThanOrEqual(3);

    await inputElement.setValue("");
    expect(await inputElement.getValue()).toEqual("");
  });

  it("pastes from clipboard", async () => {
    const value = "https://www.youtube.com/watch?v=kN1Czs0m1SU";
    await app.electron.clipboard.writeText(value);

    const input = await app.client.$("input#video-url");
    await input.setValue("");
    expect(await input.getValue()).toEqual("");

    const button = await app.client.$("button#paste-url");
    await button.click();

    expect(await input.getValue()).toEqual(value);
  });

  it("opens help", async () => {
    const navElement = await app.client.$("div#help-tab");
    await navElement.click();

    const aboutContainer = await app.client.$("[data-test-id='help']");
    expect(aboutContainer).not.toHaveProperty("error");
  });

  it("opens about", async () => {
    const navElement = await app.client.$("div#about-tab");
    await navElement.click();

    const aboutContainer = await app.client.$("[data-test-id='about']");
    expect(aboutContainer).not.toHaveProperty("error");
  });
});

describe("parsers", () => {
  describe("all parsers", () => {
    it("accepts link", () => {
      const parsed = new Parser().parse(
        "https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar",
        "720"
      );
      expect(parsed).toEqual(
        "https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
      );
    });

    it("denies link", () => {
      expect(new Parser().parse("")).toBe(null);
    });
  });

  describe("youtube", () => {
    it("accepts long link", () => {
      const parsed = new YoutubeParser().parse(
        "https://www.youtube.com/watch?v=2RxHQoiDctI",
        "720"
      );
      expect(parsed).toEqual("https://youtube.com/embed/2RxHQoiDctI?vq=hd720");
    });

    it("accepts short link", () => {
      const parsed = new YoutubeParser().parse(
        "https://youtu.be/2RxHQoiDctI",
        "720"
      );
      expect(parsed).toEqual("https://youtube.com/embed/2RxHQoiDctI?vq=hd720");
    });

    it("creates timestamp link", () => {
      const parsed = new YoutubeParser().parse(
        "https://youtu.be/2RxHQoiDctI?t=10",
        "720"
      );
      expect(parsed).toEqual(
        "https://youtube.com/embed/2RxHQoiDctI?vq=hd720&start=10"
      );
    });

    it("accepts playlist link", () => {
      const parsed = new YoutubeParser().parse(
        "https://www.youtube.com/watch?v=SetziJyL8Yg&list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
      );
      expect(parsed).toEqual(
        "https://youtube.com/embed/videoseries?list=PLYxzS__5yYQmocPoLUiEAfD1cJNjhdQar"
      );
    });

    it("denies corrupted link", () => {
      expect(
        new YoutubeParser().parse("https://www.yue.com/watch?v=2RxHQoiDctI")
      ).toBe(null);
    });
  });

  describe("dailymotion", () => {
    it("accepts link", () => {
      const parsed = new DailymotionParser().parse(
        "https://www.dailymotion.com/video/x209qoh",
        "720"
      );
      expect(parsed).toEqual(
        "https://dailymotion.com/embed/video/x209qoh?quality=720"
      );
    });

    it("denies link", () => {
      expect(new DailymotionParser().parse("")).toBe(null);
    });
  });

  describe("facebook", () => {
    it("accepts link", () => {
      const parsed = new FacebookParser().parse(
        "https://www.facebook.com/facebook/videos/10153231379946729/",
        "720"
      );
      expect(parsed).toEqual(
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F"
      );
    });

    it("denies link", () => {
      expect(new FacebookParser().parse("")).toBe(null);
    });
  });

  describe("twitch", () => {
    it("accepts link", () => {
      const parsed = new TwitchParser().parse(
        "https://twitch.tv/dhalucard",
        "720"
      );
      expect(parsed).toEqual(
        "https://player.twitch.tv/?channel=dhalucard&quality=high"
      );
    });

    it("denies link", () => {
      expect(new TwitchParser().parse("https://twitch.t/dhalucard")).toBe(null);
    });
  });
});
