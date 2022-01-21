import React from 'react';
import { shell } from 'electron';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GoMarkGithub, GoHeart } from 'react-icons/go';

import { style } from './About.style';
import Code from '../../components/Code';
import packageJson from '../../../../package.json';

const getVersion = () => packageJson.version;

/**
 * Contains the html for the `about` tab
 */
const About = ({ classes }) => (
  <div className={classes.about} data-testid="about">
    <p className={classNames(classes.heading, classes.top)}>
      <b>Author:</b>
    </p>
    <p>
      Overlay is built with <GoHeart /> by David Littig
    </p>
    <p>
      <button
        type="button"
        className={classes.button}
        onClick={() => shell.openExternal('https://github.com/dlittig')}
      >
        <GoMarkGithub /> Github
      </button>
    </p>

    <p className={classes.heading}>
      <b>Version:</b>
    </p>
    <p>
      <span>
        <Code>{getVersion()}</Code>
      </span>
    </p>

    <p className={classes.heading}>
      <b>Description:</b>
    </p>
    <p>
      Spawn video windows, that stay on top of others. Implemented using{' '}
      <Code>electron-react-boilerplate</Code>, <Code>react</Code>,{' '}
      <Code>redux</Code> and many more.
    </p>
  </div>
);

About.propTypes = {
  classes: PropTypes.shape({
    about: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(style)(About);
