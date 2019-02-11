import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Window from '../../components/Window'
import Dropdown from '../../components/Dropdown'
import Parser from '../../plugins/Parser'

/**
 * Wraps around the input field and represents the `video` tab
 */
export default class Video extends React.Component {
  render() {
    return (
      <div className="uk-margin-xlarge-top">
        <Input />
        <Dropdown />
        <Button label="Open Video" onClick={() => this.onOpen(this.state.url, this.state.resolution)} />
      </div>
    )
  }

  /**
   * Click listener for button to open new window
   * @param {*} url The url the user has typed into the input field
   */
  onOpen(url, resolution) {
    const parser = new Parser()
    const link = parser.parse(url, resolution)

    if(link != null) {
      new Window(link)
    }
    this.state.url = ''
  }
}
