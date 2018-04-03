/** @jsx etch.dom */
import Button from '../Button'
import Parser from '../../plugins/Parser'
import etch from 'etch'
import Window from '../Window'
const { clipboard } = require('electron')

const style = {
  icon: {
    height: '40px'
  }
}

/**
 * This component is the input field where URLs can be typed in
 */
export default class Input {

  constructor() {
    // Do stuff
    this.state = { url : '' }
    etch.initialize(this)
  }

  render() {
    return (
      <div>
        <div className = "uk-inline uk-width-1-1">
          <a 
            id="paste-url"
            className="uk-form-icon uk-form-icon-flip" 
            style = {style.icon} 
            attributes={{
              'uk-icon' : 'icon: copy; ratio: 0.8',
              'uk-tooltip' : 'title: Paste from clipboard; pos: left; delay: 500'
            }}
            on={ {click: () => this.update({url: clipboard.readText()})} }
          ></a>
          <input 
            id="video-url"
            className="uk-input uk-margin-small-bottom" 
            type="text" 
            placeholder="Paste video link..."
            value = { this.state.url }
            on = {{change: (event) => { this.update({url: event.target.value}) } }}
          />
        </div>

        <Button label = "Open Video" onClick = { () => this.onOpen(this.state.url) } />
      </div>
    )
  }

  update(props) {
    this.state = props
    return etch.update(this)
  }

  async destroy() {
    // call etch.destroy to remove the element and destroy child components
    await etch.destroy(this)
    // then perform custom teardown logic here...
  }

  /**
   * Click listener for button to open new window
   * @param {*} url The url the user has typed into the input field
   */
  onOpen(url) {
    const parser = new Parser()
    const link = parser.parse(url)

    if(link != null) {
      new Window(link)
    }
    this.state.url = ''
    etch.update(this)
  }
}