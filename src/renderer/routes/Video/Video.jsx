import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';

import { style } from './Video.style';
import Parser from '../../plugins/Parser';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import VideoAction from '../../store/actions/Video';

/**
 * Click listener for button to open new window
 * @param {*} url The url the user has typed into the input field
 */
const onOpen = (setParsedLink, url, resolution) => {
  const parser = new Parser();
  const parsedLink = parser.parse(url, resolution) || '';

  setParsedLink(parsedLink);
  if (parsedLink !== '' && parsedLink !== null) {
    // Tell the main process to open a new video window
    ipcRenderer.sendSync('overlay-open-video', parsedLink);
  }
};

/**
 * Wraps around the input field and represents the `video` tab
 */
const Video = ({ classes, setParsedLink, url, resolution }) => {
  return (
    <div className={classes.video} data-testid="video">
      <Input />
      <div className={classes.action}>
        <Dropdown />
        <Button
          label="Open Video"
          onClick={() => onOpen(setParsedLink, url, resolution)}
        />
      </div>
    </div>
  );
};

Video.propTypes = {
  classes: PropTypes.shape({
    video: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
  }).isRequired,
  setParsedLink: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  resolution: PropTypes.string.isRequired,
};

const mapStateToProps = ({ video: { url, resolution } }) => ({
  url,
  resolution,
});

const mapDispatchToProps = {
  setParsedLink: VideoAction.setParsedLink,
};

export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(Video)
);
