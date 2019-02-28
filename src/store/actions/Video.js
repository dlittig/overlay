export const SET_RESOLUTION  = 'SET_RESOLUTION'
export const SET_URL         = 'SET_URL'
export const SET_PARSED_LINK = 'SET_PARSED_LINK'
export const RESET           = 'RESET'

/**
 * Log the user in
 */
const setResolution = resolution => ({
  resolution,
  type: SET_RESOLUTION
})

/**
 * Log the user out
 */
const setUrl = url => ({
  url,
  type: SET_URL
})

const setParsedLink = parsedLink => ({
  parsedLink,
  type: SET_PARSED_LINK
})

const reset = () => ({
  type: RESET
})

const Video = { setResolution, setUrl, setParsedLink, reset }

export default Video
