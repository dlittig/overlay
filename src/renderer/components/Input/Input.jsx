import React, { useEffect, useState } from 'react';

import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import { clipboard } from 'electron';
import { connect } from 'react-redux';
import { MdContentPaste } from 'react-icons/md';

import { style } from './Input.style';
import VideoAction from '../../store/actions/Video';

const Input = ({ classes, url, dispatch }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(url);
  }, [url]);

  const onChange = (value) => {
    setText(value);
    dispatch(VideoAction.setUrl(value));
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        className={classes.input}
        id="video-url"
        type="text"
        placeholder="Paste video link..."
        data-testid="video-input-field"
        value={text}
        onChange={(event) => onChange(event.target.value)}
      />
      <button
        type="button"
        id="paste-url"
        className={classes.button}
        onClick={() => onChange(clipboard.readText())}
        title="Paste from clipboard"
      >
        <MdContentPaste />
      </button>
    </div>
  );
};

Input.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    inputWrapper: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ video: { url } }) => ({ url });

export default withStyles(style)(connect(mapStateToProps)(Input));
