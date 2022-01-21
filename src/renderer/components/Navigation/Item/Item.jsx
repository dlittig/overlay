import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';

import { style } from './Item.style';

const Item = ({
  classes,
  icon,
  text,
  brand,
  active,
  tab,
  onSelect: callback,
  id,
}) => {
  return (
    <div
      id={id}
      data-testid={id}
      tabIndex={tab}
      role="button"
      className={classNames([
        brand ? classes.brandItem : classes.item,
        active ? classes.active : null,
      ])}
      onKeyDown={(event) => callback(this, event)}
      onClick={(event) => {
        callback(this, event);
      }}
    >
      <span className={classes.icon}>{icon}</span>
      <span className={classes.text}>{text}</span>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  brand: PropTypes.bool,
  icon: PropTypes.element,
  onSelect: PropTypes.func,
  tab: PropTypes.number,
  classes: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
    brandItem: PropTypes.string,
    item: PropTypes.string,
    active: PropTypes.string,
  }),
};

Item.defaultProps = {
  onSelect: () => {},
  active: false,
  id: `${Date.now()}`,
  tab: -1,
  brand: false,
  icon: <></>,
  classes: {},
};

export default withStyles(style)(Item);
