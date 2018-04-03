/** @jsx etch.dom */
import etch from 'etch'
const { shell } = require('electron')

/**
 * Contains the html shown in `help` tab
 */
export default class Help {
  constructor() {
    // Do stuff
    etch.initialize(this)
  }

  render() {
    return (
      <div>
        <h6 className="uk-heading-divider"><b>1. Find video</b></h6>
        <p className="uk-text-small">Find a video,stream or playlist from a plattform like <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://youtube.com')}}>Youtube</a>
        , <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://twitch.tv')}}>Twitch</a> or <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://dailymotion.com')}}>Dailymotion</a>.</p>

        <h6 className="uk-heading-divider"><b>2. Paste a link</b></h6>
        <p className="uk-text-small">Click on the video tab on the main window and paste the link into the input field.</p>
        
        <h6 className="uk-heading-divider"><b>3. Open other videos</b></h6>
        <p className="uk-text-small">You can open multiple windows from various plattforms at the same time. Just add another link to the input field.</p>
      </div>
    )
  }

  update() {
    return etch.update(this)
  }
}