import React from 'react'
import withStyles from 'react-jss'
import { MdOpenInNew } from "react-icons/md"
import { style } from './Button.style'

/**
 * This is the button that opens a new window on click
 */
const Button = ({classes, onClick, label}) => (
  <button
    id="open"
    className={classes.button}
    onClick={onClick}
  >
    {`${label} `}
    <MdOpenInNew />
  </button>
)

export default withStyles(style)(Button)
