import { notify } from '../utils/utils'

const DAILYMOTION = /.*dailymotion\.com\/video\/(.*)/

/**
 * Parser for dailymotion videos
 */
export default class DailymotionParser {

  /**
   * Creates embed link for dailymotion video. Spawns notification otherwise
   * @param {*} url URL of the video
   * @param {*} resolution Resolution the user selected for the video
   */
  parse(url, resolution) {
    if(DAILYMOTION.test(url) === true) {
      const video = url.replace(DAILYMOTION, '$1')
      return `https://dailymotion.com/embed/video/${video}?quality=${resolution}`
    } else {
      // Return parser error
      notify('Failed to parse Dailymotion link', 2)
      return null
    }
  }
}
