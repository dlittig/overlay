import React from 'react'
import { connect } from 'react-redux'
import { style } from './Dropdown.style'
import VideoAction from '../../store/actions/Video'
import withStyles from 'react-jss'

const Dropdown = ({classes, setResolution, resolution}) => {
  return (
    <select value={resolution} onChange={event => setResolution(event.target.value)} id="form-stacked-select" className={classes.select}>
      <option value="480" className={classes.option}>480p</option>
      <option value="720" className={classes.option}>720p</option>
      <option value="1080" className={classes.option}>1080p</option>
      <option value="1440" className={classes.option}>1440p</option>
      <option value="2160" className={classes.option}>2160p</option>
    </select>
  )
}

const mapStateToProps = ({video: {resolution}}) => ({resolution})

const mapDispatchToProps = {
  setResolution: VideoAction.setResolution
}

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(Dropdown))
