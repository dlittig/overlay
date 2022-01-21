import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import Item from './Item';
import { style } from './Navigation.style';

const Navigation = ({ classes, children }) => (
  <div className={classes.navigation}>
    <Item brand text="Overlay" />
    {children}
  </div>
);

Navigation.propTypes = {
  classes: PropTypes.shape({
    navigation: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default withStyles(style)(Navigation);
