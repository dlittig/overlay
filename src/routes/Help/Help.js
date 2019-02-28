import React from 'react'
const { shell } = require('electron')

/**
 * Contains the html shown in `help` tab
 */
const Help = () => (
  <div>
    <h5 className="uk-heading-divider"><b>1. Find video</b></h5>
    <p>Find a video,stream or playlist from a plattform like <a className="uk-link-muted" onClick={() => shell.openExternal('https://youtube.com')}>Youtube</a>
    , <a className="uk-link-muted" onClick={() => shell.openExternal('https://twitch.tv')}>Twitch</a> or <a className="uk-link-muted" onClick={() => shell.openExternal('https://dailymotion.com')}>Dailymotion</a>.</p>

    <h5 className="uk-heading-divider"><b>2. Paste a link</b></h5>
    <p>Click on the video tab on the main window and paste the link into the input field. After that choose the preferred quality. By default the quality is set to 720p.</p>

    <h5 className="uk-heading-divider"><b>3. Open other videos</b></h5>
    <p>You can open multiple windows from various plattforms at the same time. Just add another link to the input field.</p>
  </div>
)

export default Help
