import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import { style } from './Content.style';

const Content = ({ classes, children }) => (
  <div className={classes.content}>{children}</div>
);

Content.propTypes = {
  classes: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.shape({}).isRequired,
};

export default withStyles(style)(Content);
