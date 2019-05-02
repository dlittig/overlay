import React from 'react'
import PropTypes from 'prop-types'

import { style } from './Item.style'
import withStyles from 'react-jss'

const Item = ({classes, icon, text}) => (
  <div className={classes.item}>
    <span className={classes.icon}>{ icon }</span>
    <span className={classes.text}>{ text }</span>
  </div>
)

Item.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onSelect: PropTypes.func
}

Item.defaultProps = {
  onSelect: () => {}
}

export default withStyles(style)(Item)
