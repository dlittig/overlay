/** @jsx etch.dom */
import Video from './routes/Video'
import Help from './routes/Help'
import About from './routes/About'
import etch from 'etch'

const style = {
  switcher: {
    paddingLeft: '10px',
    paddingRight: '10px'
  }
}

/**
 * App is the root of all components
 */
class App {
  constructor() {
    // Do stuff
    etch.initialize(this)
  }

  render() {
    return (
      <div>
        <ul attributes = {{ 'uk-tab' : '' }}  className="uk-tab uk-sticky"> 
          <li className="uk-active" id = "video-tab"><a href="#">Video</a></li>
          <li id = "help-tab"><a href="#">Help</a></li>
          <li id = "about-tab"><a href="#">About</a></li>
        </ul>

        <ul className="uk-switcher uk-margin uk-light" style = {style.switcher}>
          <li><Video /></li>
          <li><Help /></li>
          <li><About /></li>
        </ul>
      </div>
    )
  }

  update() {
    return etch.update(this)
  }

  async destroy() {
    // call etch.destroy to remove the element and destroy child components
    await etch.destroy(this)
    // then perform custom teardown logic here...
  }
}

// build a component instance in a standard way...
let component = new App()

//Appand the root component to the body
document.body.appendChild(component.element)