import notify from '../utils/utils'

const TWITCH = /.*twitch\.tv\/(.*)/

/**
 * Parser for twitch videos
 */
export default class TwitchParser {

  /**
   * Creates embed link for twitch video. Spawns notification otherwise
   * @param {*} url URL of the video
   */
  parse(url) {
    if(TWITCH.test(url) === true) {
      const video = url.replace(TWITCH, '$1')
      return `https://player.twitch.tv/?channel=${video}`
    } else {
      // Return parse error
      notify('Failed to parse Twitch link', 2000)
      return null
    }    
  }
}