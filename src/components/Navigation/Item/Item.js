import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { style } from './Item.style'
import withStyles from 'react-jss'

const Item = ({classes, icon, text, brand, active, onSelect: callback, id}) => {
  return (
    <div
      id={id}
      className={classNames([(brand) ? classes.brandItem : classes.item, (active) ? classes.active : null])}
      onClick={(event) => {callback(this, event)}}
    >
      <span className={classes.icon}>{ icon }</span>
      <span className={classes.text}>{ text }</span>
    </div>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onSelect: PropTypes.func
}

Item.defaultProps = {
  onSelect: () => {}
}

export default withStyles(style)(Item)
