import React from "react";
const { shell } = require("electron");
import withStyles from "react-jss";
import classNames from "classnames";
import { style } from "./Help.style";

/**
 * Contains the html shown in `help` tab
 */
const Help = ({ classes }) => (
  <div>
    <div className={classes.help} data-test-id="help">
      <p className={classNames(classes.heading, classes.top)}>
        <b>1. Find video</b>
      </p>
      <p className={classes.text}>
        Find a video,stream or playlist from a plattform like{" "}
        <a
          className={classes.link}
          onClick={() => shell.openExternal("https://youtube.com")}
        >
          Youtube
        </a>
        ,{" "}
        <a
          className={classes.link}
          onClick={() => shell.openExternal("https://twitch.tv")}
        >
          Twitch
        </a>{" "}
        or{" "}
        <a
          className={classes.link}
          onClick={() => shell.openExternal("https://dailymotion.com")}
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

export default withStyles(style)(Help);
