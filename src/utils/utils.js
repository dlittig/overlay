import URL from 'url-parse'

/**
 * Notifies the user about some circumstance
 * @param {*} content The message to be displayed
 * @param {*} time duration in milli seconds
 */
const notify = (content, time) => {
  const UIkit = require('../../node_modules/uikit/dist/js/uikit.js')

  UIkit.notification({
    message: content,
    status: 'primary',
    pos: 'bottom-center',
    timeout: time
  })
}

const getQueryParameters = url => {
  let parameters = new URL(url).query

  // Normalize string to start with the parameter
  if(parameters.startsWith('?')) {
    parameters = parameters.replace('?', '')
  }

  const list = {}
  parameters.split('&').forEach(function(item) {
    const touple = item.split('=')
    list[touple[0]] = touple[1]
  })

  return list
}

export { getQueryParameters, notify }
