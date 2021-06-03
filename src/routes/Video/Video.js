import React from "react";
import { connect } from "react-redux";
import { style } from "./Video.style";
import withStyles from "react-jss";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Window from "../../components/Window";
import Dropdown from "../../components/Dropdown";
import Parser from "../../plugins/Parser";
import VideoAction from "../../store/actions/Video";

/**
 * Click listener for button to open new window
 * @param {*} url The url the user has typed into the input field
 */
const onOpen = (setParsedLink, url, resolution) => {
  const parser = new Parser();
  const parsedLink = parser.parse(url, resolution) || "";

  setParsedLink(parsedLink);
  if (parsedLink !== "" && parsedLink !== null) {
    new Window(parsedLink);
  }
};

/**
 * Wraps around the input field and represents the `video` tab
 */
const Video = ({ classes, setParsedLink, url, resolution }) => {
  return (
    <div className={classes.video} data-test-id="video">
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
