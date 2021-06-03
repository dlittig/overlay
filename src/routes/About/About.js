import React from "react";
import electron, { shell } from "electron";
import withStyles from "react-jss";
import classNames from "classnames";
import { style } from "./About.style";
import { GoMarkGithub, GoHeart } from "react-icons/go";
import Code from "../../components/Code";
import packageJson from "../../../package.json";

const getVersion = () => packageJson.version;

/**
 * Contains the html for the `about` tab
 */
const About = ({ classes }) => (
  <div className={classes.about} data-test-id="about">
    <p className={classNames(classes.heading, classes.top)}>
      <b>Author:</b>
    </p>
    <p>
      Overlay is built with <GoHeart /> by David Littig
    </p>
    <p>
      <button
        className={classes.button}
        onClick={() => shell.openExternal("https://github.com/dlittig")}
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
      Spawn video windows, that stay on top of others. Implemented using{" "}
      <Code>electron-forge</Code>, <Code>react</Code>, <Code>redux</Code> and
      many more.
    </p>
  </div>
);

export default withStyles(style)(About);
