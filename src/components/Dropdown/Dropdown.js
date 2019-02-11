import React from 'react'

const style = {
  select: {
    marginTop: '-11px'
  }
}

export default class Dropdown extends React.Component {
  state = {
    resolution: '720'
  }

  render() {
    return (
      <div className="uk-inline uk-width-1-4" style={style.select}>
        <select value={this.state.resolution} onChange={event => this.setState({resolution: event.target.value})} className="uk-select" id="form-stacked-select" style={{backgroundColor : '#383838'}}>
          <option value="480">480p</option>
          <option value="720">720p</option>
          <option value="1080">1080p</option>
          <option value="1440">1440p</option>
          <option value="2160">2160p</option>
        </select>
      </div>
    )
  }
}
