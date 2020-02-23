import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'
import { style } from './Navigation.style'
import withStyles from 'react-jss'

class Navigation extends React.Component {
  state = {
    selection: 0
  }

  onSelect = event => {
    const { onSelect } = this.props
    this.setState({
      selection: event.target.value
    }, () => {
      onSelect(this.state.selection)
    })
  }

  render() {
    const {classes} = this.props

    return (
      <div className={classes.navigation}>
        <Item brand text="Overlay" />
        { this.props.children }
      </div>
    )
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(Navigation)
