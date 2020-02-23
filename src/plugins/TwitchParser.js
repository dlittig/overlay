import { notify } from '../utils/utils'

const TWITCH = /.*twitch\.tv\/(.*)/

/**
 * Parser for twitch videos
 */
export default class TwitchParser {

  /**
   * Creates embed link for twitch video. Spawns notification otherwise
   * @param {*} url URL of the video
   * @param {*} resolution Resolution the user selected for the video
   */
  parse(url, resolution) {
    if(TWITCH.test(url) === true) {
      const video = url.replace(TWITCH, '$1')
      return `https://player.twitch.tv/?channel=${video}&quality=${this.map(resolution)}`
    } else {
      // Return parse error
      notify('Failed to parse Twitch link', 2)
      return null
    }
  }

  /**
   * Maps resolution from select field to corresponding tags
   * @param {*} resolution Resolution selected by user
   */
  map(resolution) {
    switch(resolution) {
    case '480': return 'medium'
    case '720': return 'high'
    case '1080': return 'chunked'
    case '1440': return 'chunked'
    case '2160': return 'chunked'
    }
  }
}
