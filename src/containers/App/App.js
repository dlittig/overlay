import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import Video from '../../routes/Video'
import Help from '../../routes/Help'
import About from '../../routes/About'
import Content from '../../components/Content'
import Notification from '../../components/Notification'
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
class App extends React.Component {
  state = {
    selected: 0
  }

  onSelect = selected => this.setState({selected})

  render() {
    const {classes} = this.props
    const {selected} = this.state

    return (
      <div className={classes.container}>
        <Navigation>
          <NavigationItem
            id="video-tab"
            active={selected === 0}
            text="Video"
            onSelect={() => this.onSelect(0)}
            icon={<MdOndemandVideo />}
          />
          <NavigationItem
            id="help-tab"
            active={selected === 1}
            text="Help"
            onSelect={() => this.onSelect(1)}
            icon={<MdHelp />}
          />
          <NavigationItem
            id="about-tab"
            active={selected === 2}
            text="About"
            onSelect={() => this.onSelect(2)}
            icon={<MdInfo />}
          />
        </Navigation>
        <Content>
          { pages[this.state.selected] }
        </Content>
        <Notification />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(style)(App)
