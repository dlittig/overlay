/** @jsx etch.dom */
import etch from 'etch'
import Input from '../../components/Input'

/**
 * Wraps around the input field and represents the `video` tab
 */
export default class Video {
  constructor() {
    // Do stuff
    etch.initialize(this)
  }

  render() {
    return (
      <div className="uk-margin-xlarge-top">
        <Input />
      </div>
    )
  }

  update() {
    return etch.update(this)
  }
}