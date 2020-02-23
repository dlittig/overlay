import React from 'react'
import PropTypes from 'prop-types'

import { style } from './Content.style.js'
import withStyles from 'react-jss'

const Content = ({classes, children}) => (
  <div className={classes.content}>
    { children }
  </div>
)

Content.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(Content)
