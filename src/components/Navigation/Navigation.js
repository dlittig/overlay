import React from 'react'
import Item from './Item'
import { style } from './Navigation.style'
import { MdVideoLibrary } from "react-icons/md"

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
    return (
      <div className="Navigation" style={style.navigation}>
        <Item text="Overlay" icon={<MdVideoLibrary />} />
        { this.props.children }
      </div>
    )
  }

}

export default Navigation
