import React from 'react'
import Video from './routes/Video'
import Help from './routes/Help'
import About from './routes/About'

const style = {
  switcher: {
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}

/**
 * App is the root of all components
 */
export default class App extends React.Component {
  state = {
    selected: 'video'
  }

  onSelect = selected => this.setState({selected})

  render() {
    return (
      <div>
        <ul uk-tab="true" className="uk-tab uk-sticky">
          <li className="uk-active" id="video-tab" onClick={() => this.onSelect('video')}><a href="#">Video</a></li>
          <li id="help-tab" onClick={() => this.onSelect('help')}><a href="#">Help</a></li>
          <li id="about-tab" onClick={() => this.onSelect('about')}><a href="#">About</a></li>
        </ul>

        <ul className="uk-switcher uk-margin uk-light" style={style.switcher}>
          <li className={(this.state.selected === 'video') ? 'uk-active' : '' }><Video /></li>
          <li className={(this.state.selected === 'help') ? 'uk-active' : '' }><Help /></li>
          <li className={(this.state.selected === 'about') ? 'uk-active' : '' }><About /></li>
        </ul>
      </div>
    )
  }
}
