import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { style } from './Code.style';

const Code = ({ children, classes }) => (
  <span className={classes.code}>{children}</span>
);

Code.propTypes = {
  children: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(style)(Code);
