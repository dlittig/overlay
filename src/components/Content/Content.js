import React from 'react'
import { style } from './Content.style.js'

export default class Content extends React.Component {
  render() {
    return (
      <div style={style.content}>
        { this.props.children }
      </div>
    )
  }
}
