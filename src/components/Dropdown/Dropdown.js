import React from 'react'
import { connect } from 'react-redux'
import VideoAction from '../../store/actions/Video'

const style = {
  select: {
    marginTop: '-10px'
  },
  dropdown: {
    backgroundColor: '#383838'
  },
  option: {
    color: 'white'
  }
}

const Dropdown = props => {
  const {dispatch, resolution} = props
  return (
    <div className="uk-inline uk-width-1-4" style={style.select}>
      <select value={resolution} onChange={event => dispatch(VideoAction.setResolution(event.target.value))} className="uk-select" id="form-stacked-select" style={style.dropdown}>
        <option value="480" style={style.option}>480p</option>
        <option value="720" style={style.option}>720p</option>
        <option value="1080" style={style.option}>1080p</option>
        <option value="1440" style={style.option}>1440p</option>
        <option value="2160" style={style.option}>2160p</option>
      </select>
    </div>
  )
}

const mapStateToProps = ({video: {resolution}}) => ({resolution})

export default connect(mapStateToProps)(Dropdown)
