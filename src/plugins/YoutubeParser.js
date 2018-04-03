import notify from '../utils/utils'

const YOUTUBE = /.*youtube\.com\/watch\?v=(.*?)/ // Used for clean video links
const YOUTUBE_APPENDIX = /.*youtube\.com\/watch\?v=(.*?)(&(.*))/ // Used for videos with multiple query parameters following
const YOUTUBE_SHORT = /.*youtu\.be\/(.*)/
const YOUTUBE_PLAYLIST = /.*youtube\.com\/watch\?v=(.*)&list=(.*)/

/**
 * Parser for youtube videos
 */
export default class YoutubeParser {

  /**
   * Creates embed link for youtube video. Spawns notification otherwise
   * @param {*} url URL of the video
   */
  parse(url) {
    let video = ''

    if(YOUTUBE_SHORT.test(url) === true) {
      video = url.replace(YOUTUBE_SHORT, '$1')
      return `https://youtube.com/embed/${video}`
    } else if(YOUTUBE_PLAYLIST.test(url) === true) {
      video = url.replace(YOUTUBE_PLAYLIST, '$2')
      return `https://youtube.com/embed/videoseries?list=${video}`
    } else if(YOUTUBE_APPENDIX.test(url) === true) {
      video = url.replace(YOUTUBE_APPENDIX, '$1')
      return `https://youtube.com/embed/${video}`
    } else if(YOUTUBE.test(url) === true) {
      video = url.replace(YOUTUBE, '$1')
      return `https://youtube.com/embed/${video}`
    } else {
      // Return error on UI
      notify('Failed to parse Youtube link', 2000)
      return null
    } 
  }
}