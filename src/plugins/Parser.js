import TwitchParser from './TwitchParser'
import YoutubeParser from './YoutubeParser'
import DailymotionParser from './DailymotionParser'
import notify from '../utils/utils'

/**
 * The front entity that passes the url to the correct parser
 */
export default class Parser {

  /**
   * Checks which parser should parse the video
   * @param {*} url URL passed by the user
   */
  parse(url) {
    let parser = null
    if (url.includes('twitch.tv')) {
      parser = new TwitchParser()
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      parser = new YoutubeParser()
    } else if (url.includes('dailymotion.com')) {
      parser = new DailymotionParser()
    } else {
      notify('This URL is not supported.', 2000)
      return null
    }

    return parser.parse(url)
  }
}