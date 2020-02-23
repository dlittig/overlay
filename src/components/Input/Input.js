import React from 'react'

import withStyles from 'react-jss'
import VideoAction from '../../store/actions/Video'
import { MdContentPaste } from "react-icons/md"

import { style } from './Input.style'
import { connect } from 'react-redux'
import { clipboard } from 'electron'

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
    const {classes} = this.props

    return (
      <div className={classes.inputWrapper}>
        <input
          className={classes.input}
          id="video-url"
          type="text"
          placeholder="Paste video link..."
          value={this.state.text}
          onChange={event => this.onChange(event.target.value)}
        />
        <button
          id="paste-url"
          className={classes.button}
          onClick={() => this.onChange(clipboard.readText())}
          title="Paste from clipboard"
        >
          <MdContentPaste />
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({video: {url}}) => ({url})

export default withStyles(style)(connect(mapStateToProps)(Input))
