import React from 'react'
import Video from '../../routes/Video'
import Help from '../../routes/Help'
import About from '../../routes/About'
import Content from '../../components/Content'
import Navigation from '../../components/Navigation'
import NavigationItem from '../../components/Navigation/Item'
import { MdOndemandVideo, MdHelp, MdInfo } from "react-icons/md"

import { style } from './App.style'

const pages = [
  <Video />,
  <Help />,
  <About />
]

/**
 * App is the root of all components
 */
export default class App extends React.Component {
  state = {
    selected: 0
  }

  onSelect = selected => this.setState({selected})

  render() {
    return (
      <div style={style.container}>
        <Navigation>
          <NavigationItem text="Video" onSelect={this.onSelect} icon={<MdOndemandVideo />} />
          <NavigationItem text="Help" onSelect={this.onSelect} icon={<MdHelp />} />
          <NavigationItem text="About" onSelect={this.onSelect} icon={<MdInfo />} />
        </Navigation>
        <Content>
          { pages[this.state.selected] }
        </Content>
      </div>
    )
  }
}

