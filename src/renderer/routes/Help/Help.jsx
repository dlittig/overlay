import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { style } from './Help.style';

const { shell } = require('electron');

/**
 * Contains the html shown in `help` tab
 */
const Help = ({ classes }) => (
  <div>
    <div className={classes.help} data-testid="help">
      <p className={classNames(classes.heading, classes.top)}>
        <b>1. Find video</b>
      </p>
      <p className={classes.text}>
        Find a video,stream or playlist from a plattform like{' '}
        {/* eslint-disable-next-line */}
        <a
          className={classes.link}
          onClick={() => shell.openExternal('https://youtube.com')}
          onKeyDown={() => shell.openExternal('https://youtube.com')}
          rel="noopener noreferrer"
          role="link"
        >
          Youtube
        </a>
        , {/* eslint-disable-next-line */}
        <a
          className={classes.link}
          onClick={() => shell.openExternal('https://twitch.tv')}
          onKeyDown={() => shell.openExternal('https://twitch.tv')}
          rel="noopener noreferrer"
          role="link"
        >
          Twitch
        </a>{' '}
        or {/* eslint-disable-next-line */}
        <a
          className={classes.link}
          onClick={() => shell.openExternal('https://dailymotion.com')}
          onKeyDown={() => shell.openExternal('https://dailymotion.com')}
          rel="noopener noreferrer"
          role="link"
        >
          Dailymotion
        </a>
        .
      </p>

      <p className={classes.heading}>
        <b>2. Paste a link</b>
      </p>
      <p className={classes.text}>
        Click on the video tab on the main window and paste the link into the
        input field. After that choose the preferred quality. By default the
        quality is set to 720p.
      </p>

      <p className={classes.heading}>
        <b>3. Open other videos</b>
      </p>
      <p className={classes.text}>
        You can open multiple windows from various plattforms at the same time.
        Just add another link to the input field.
      </p>
    </div>
  </div>
);

Help.propTypes = {
  classes: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    help: PropTypes.string,
    top: PropTypes.string,
  }).isRequired,
};

export default withStyles(style)(Help);
