import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { MdOpenInNew } from 'react-icons/md';
import { style } from './Button.style';

/**
 * This is the button that opens a new window on click
 */
const Button = ({ classes, onClick, label }) => (
  <button id="open" className={classes.button} type="button" onClick={onClick}>
    {`${label} `}
    <MdOpenInNew />
  </button>
);

Button.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(style)(Button);
