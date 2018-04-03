/**
 * Notifies the user about some circumstance
 * @param {*} content The message to be displayed
 * @param {*} time duration in milli seconds
 */
export default function notify(content, time) {
  const UIkit = require('../../node_modules/uikit/dist/js/uikit.js')

  UIkit.notification({
    message: content,
    status: 'primary',
    pos: 'bottom-center',
    timeout: time
  })
}