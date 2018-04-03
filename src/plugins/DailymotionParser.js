import notify from '../utils/utils'

const DAILYMOTION = /.*dailymotion\.com\/video\/(.*)/

/**
 * Parser for dailymotion videos
 */
export default class DailymotionParser {

  /**
   * Creates embed link for dailymotion video. Spawns notification otherwise
   * @param {*} url URL of the video
   */
  parse(url) {
    if(DAILYMOTION.test(url) === true) {
      const video = url.replace(DAILYMOTION, '$1')
      return `https://dailymotion.com/embed/video/${video}`
    } else {
      // Return parser error
      notify('Failed to parse Dailymotion link', 2000)
      return null
    }
  }
}