import React from 'react'
import { connect } from 'react-redux'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Window from '../../components/Window'
import Dropdown from '../../components/Dropdown'
import Parser from '../../plugins/Parser'
import VideoAction from '../../store/actions/Video'

/**
 * Click listener for button to open new window
 * @param {*} url The url the user has typed into the input field
 */
const onOpen = (dispatch, url, resolution) => {
  const parser = new Parser()
  const parsedLink = parser.parse(url, resolution) || ''

  dispatch(VideoAction.setParsedLink(parsedLink))
  if(parsedLink !== '' && parsedLink !== null) {
    new Window(parsedLink)
  }
}

/**
 * Wraps around the input field and represents the `video` tab
 */
const Video = props => {
  return (
    <div className="uk-margin-xlarge-top">
      <Input />
      <Dropdown />
      <Button label="Open Video" onClick={() => onOpen(props.dispatch, props.url, props.resolution)} />
    </div>
  )
}

const mapStateToProps = ({video: {url, resolution}}) => ({url, resolution})

export default connect(mapStateToProps)(Video)
