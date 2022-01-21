import TwitchParser from './TwitchParser';
import YoutubeParser from './YoutubeParser';
import DailymotionParser from './DailymotionParser';
import FacebookParser from './FacebookParser';
import { notify } from '../utils/utils';

/**
 * The front entity that passes the url to the correct parser
 */
export default class Parser {
  /**
   * Checks which parser should parse the video
   * @param {*} url URL passed by the user
   * @param {*} resolution Resolution the user selected for the video
   */
  /* eslint-disable-next-line class-methods-use-this */
  parse(url, resolution) {
    let parser = null;
    if (url.includes('twitch.tv')) {
      parser = TwitchParser();
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      parser = new YoutubeParser();
    } else if (url.includes('dailymotion.com')) {
      parser = new DailymotionParser();
    } else if (url.includes('facebook.com')) {
      parser = new FacebookParser();
    } else {
      notify('This URL is not supported.', 2);
      return null;
    }

    return parser.parse(url, resolution);
  }
}
