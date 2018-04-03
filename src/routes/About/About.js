/** @jsx etch.dom */
import etch from 'etch'
import electron from 'electron'
const { shell } = require('electron')

const getVersion = () => electron.remote.app.getVersion()

/**
 * Contains the html for the `about` tab
 */
export default class About {
  constructor() {
    // Do stuff
    etch.initialize(this)
  }

  render() {
    return (
      <div>
        <dl className="uk-description-list uk-description-list-divider">
          <dt>
            <b>Author:</b>
          </dt>
          <dd>
            Overlay is built with <span attributes={{'uk-icon' : 'icon: heart; ratio: 0.8'}}/> by David Littig 
            <p className = "uk-margin-small-top">
              <a on = {{click: () => shell.openExternal('https://github.com/dlittig')}} className="uk-button uk-button-default uk-button-small">
                <span attributes={{'uk-icon' : 'icon: github; ratio: 0.8'}}/> Github
              </a>
            </p>
          </dd>
          <dt>
            <b>Version:</b>
          </dt>
          <dd>
            <span className="uk-badge">&nbsp;{ getVersion() }&nbsp;</span>
          </dd>
          <dt>
            <b>Description:</b>
          </dt>
          <dd>
            Spawn video windows, that stay on top of others. Implemented  
            using <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://github.com/electron/electron')}}>Electron</a>
            , <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://github.com/atom/etch')}}>Etch</a>  
            , <a className="uk-link-muted" on = {{click: () => shell.openExternal('https://github.com/uikit/uikit')}}>UI-Kit</a> and many more.
          </dd>
        </dl>
      </div>
    )
  }

  update() {
    return etch.update(this)
  }
}