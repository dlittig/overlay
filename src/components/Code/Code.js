import React from 'react'
import withStyles from 'react-jss'
import {style} from './Code.style'

const Code = ({children, classes}) => (
  <span className={classes.code}>{children}</span>
)

export default withStyles(style)(Code)
