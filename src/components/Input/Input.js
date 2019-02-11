import React from 'react'

const { clipboard } = require('electron')

const style = {
  icon: {
    height: '40px'
  }
}

/**
 * This component is the input field where URLs can be typed in
 */
export default class Input extends React.Component {
  state = {
    url : ''
  }

  render() {
    return (
      <div className="uk-inline uk-width-3-4">
        <a
          id="paste-url"
          className="uk-form-icon uk-form-icon-flip"
          style={style.icon}
          uk-icon="icon: copy; ratio: 0.8"
          uk-tooltip="title: Paste from clipboard; pos: left; delay: 500"
          onClick={() => this.setState({url: clipboard.readText()})}
        ></a>
        <input
          id="video-url"
          className="uk-input uk-margin-small-bottom"
          type="text"
          placeholder="Paste video link..."
          value={this.state.url}
          onChange={event => this.setState({url: event.target.value})}
        />
      </div>
    )
  }
}
