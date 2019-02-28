import React from 'react'

/**
 * This is the button that opens a new window on click
 */
const Button = props => (
  <button
    className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom open"
    onClick={props.onClick}
  >
    {props.label}&nbsp;
    <span uk-icon="icon: push; ratio: 0.8"></span>
  </button>
)

export default Button
