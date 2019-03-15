import { notify } from '../utils/utils'

const FACEBOOK = /.*facebook\.com\/facebook\/videos\/(\d*)(\/?)/

/**
 * Parser for dailymotion videos
 */
export default class FacebookParser {

  /**
   * Creates embed link for dailymotion video. Spawns notification otherwise
   * @param {*} url URL of the video
   * @param {*} resolution Resolution the user selected for the video
   */
  parse(url, resolution) {
    if(FACEBOOK.test(url) === true) {
      const video = url.replace(FACEBOOK, '$1')
      return `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${video}%2F`
    } else {
      // Return parser error
      notify('Failed to parse Facebook link', 2000)
      return null
    }
  }
}
