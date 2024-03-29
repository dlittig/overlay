import {
  SET_RESOLUTION,
  SET_URL,
  SET_PARSED_LINK,
  RESET,
} from '../../actions/Video';

const initialState = {
  resolution: '720',
  url: '',
  parsedLink: '',
};

function video(state = initialState, action) {
  switch (action.type) {
    case SET_RESOLUTION:
      return { ...state, resolution: action.resolution };
    case SET_URL: {
      return { ...state, url: action.url };
    }
    case SET_PARSED_LINK: {
      return { ...state, parsedLink: action.parsedLink };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default video;
