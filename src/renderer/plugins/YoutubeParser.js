import { notify, getQueryParameters } from '../utils/utils';

const YOUTUBE = /.*youtube\.com\/watch\?v=(.*?)/; // Used for clean video links
const YOUTUBE_APPENDIX = /.*youtube\.com\/watch\?v=(.*?)(&(.*))/; // Used for videos with multiple query parameters following
const YOUTUBE_SHORT = /.*youtu\.be\/(.*)/;
const YOUTUBE_SHORT_APPENDIX = /.*youtu\.be\/(.*)\?(.*)/;
const YOUTUBE_PLAYLIST = /.*youtube\.com\/watch\?v=(.*)&list=(.*)/;

/**
 * Parser for youtube videos
 */
export default class YoutubeParser {
  /**
   * Creates embed link for youtube video. Spawns notification otherwise
   * @param {*} url URL of the video
   * @param {*} resolution Resolution the user selected for the video
   */
  parse(url, resolution) {
    // Parse parameters to get index
    const parameters = getQueryParameters(url);
    let video = '';

    if (YOUTUBE_SHORT_APPENDIX.test(url) === true) {
      video = url.replace(YOUTUBE_SHORT_APPENDIX, '$1');

      if (parameters.t) {
        const { t } = parameters;
        return `https://youtube.com/embed/${video}?vq=${this.map(
          resolution
        )}&start=${t}`;
      }

      return `https://youtube.com/embed/${video}?vq=${this.map(resolution)}`;
    }
    if (YOUTUBE_SHORT.test(url) === true) {
      video = url.replace(YOUTUBE_SHORT, '$1');

      return `https://youtube.com/embed/${video}?vq=${this.map(resolution)}`;
    }
    if (YOUTUBE_PLAYLIST.test(url) === true) {
      video = url.replace(YOUTUBE_PLAYLIST, '$2');

      if (parameters.index) {
        const { index } = parameters;
        return `https://youtube.com/embed/videoseries?list=${video}&index=${index}`;
      }

      return `https://youtube.com/embed/videoseries?list=${video}`;
    }
    if (YOUTUBE_APPENDIX.test(url) === true) {
      video = url.replace(YOUTUBE_APPENDIX, '$1');

      if (parameters.t) {
        const { t } = parameters;
        return `https://youtube.com/embed/${video}?vq=${this.map(
          resolution
        )}&start=${t}`;
      }

      return `https://youtube.com/embed/${video}?vq=${this.map(resolution)}`;
    }
    if (YOUTUBE.test(url) === true) {
      video = url.replace(YOUTUBE, '$1');

      return `https://youtube.com/embed/${video}?vq=${this.map(resolution)}`;
    }

    // Return error on UI
    notify('Failed to parse Youtube link', 2);
    return null;
  }

  /**
   * Maps resolution from select field to corresponding tags
   * @param {*} resolution Resolution selected by user
   */
  /* eslint-disable-next-line class-methods-use-this */
  map(resolution) {
    switch (resolution) {
      case '480':
        return 'large';
      case '720':
        return 'hd720';
      case '1080':
        return 'hd1080';
      case '1440':
        return 'highres';
      case '2160':
        return 'highres';
      default:
        return 'hd720';
    }
  }
}
