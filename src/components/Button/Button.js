import React from 'react'

/**
 * This is the button that opens a new window on click
 */
export default class Button extends React.Component {
  render() {
    return (
      <button
        className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom open"
        onClick={this.props.onClick}
      >
        {this.props.label}&nbsp;
        <span uk-icon="icon: push; ratio: 0.8"></span>
      </button>
    )
  }
}
