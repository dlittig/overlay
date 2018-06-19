import electron from 'electron'
import * as globals from '../../globals'

const path = require('path')

/**
 * This entity represents every new window that can be spawned
 */
export default class Window {

  /**
   * Creates a new BrowserWindow
   * @param {*} url The url the new window should navigate to
   */
  constructor(url) {
    if(url == null) return

    // Get windows from defaults
    const { default: { windows } } = globals

    const window = new electron.remote.BrowserWindow({
      icon: path.join(__dirname, 'assets/icons/favicon.png'),
      show: false,
      width: 640,
      height: 360,
      minimizable: false,
      maximizable: false,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: false,
        sandbox: true,
        webviewTag: false,
        contextIsolation: false,
        preload: path.join(__dirname,'preload.js')
      }
    })

    window.on('closed', () => {
      windows.splice(windows.indexOf(window), 1)
    })

    window.once('ready-to-show', () => {
      window.show()
    })

    window.loadURL(url)
    windows.push(window)
  }
}
