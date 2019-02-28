import React from 'react'
import VideoAction from '../../store/actions/Video'
import { connect } from 'react-redux'
import { clipboard } from 'electron'

const style = {
  icon: {
    height: '40px'
  }
}

class Input extends React.Component {
  state = {
    text: ''
  }

  componentWillMount() {
    this.setState({text: this.props.url})
  }

  onChange = value => {
    this.setState({text: value})
    this.props.dispatch(VideoAction.setUrl(value))
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
          onClick={() => this.onChange(clipboard.readText())}
        ></a>
        <input
          id="video-url"
          className="uk-input uk-margin-small-bottom"
          type="text"
          placeholder="Paste video link..."
          value={this.state.text}
          onChange={event => this.onChange(event.target.value)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({video: {url}}) => ({url})

export default connect(mapStateToProps)(Input)
