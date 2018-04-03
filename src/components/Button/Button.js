/** @jsx etch.dom */
import etch from 'etch'

/**
 * This is the button that opens a new window on click
 */
export default class Button {
  constructor(props) {
    // Do stuff
    const { label, onClick } = props
    this.state = { label, onClick }

    etch.initialize(this)
  }

  render() {
    return (
      <button 
        className="uk-button uk-button-small uk-button-default uk-width-1-1 uk-margin-small-bottom open" 
        on = { {click: this.state.onClick } } 
      >
        {this.state.label}&nbsp;
        <span attributes={{'uk-icon' : 'icon: push; ratio: 0.8'}}></span>
      </button>
    )
  }

  update() {
    return etch.update(this)
  }

  async destroy() {
    // call etch.destroy to remove the element and destroy child components
    await etch.destroy(this)
    // then perform custom teardown logic here...
  }
}