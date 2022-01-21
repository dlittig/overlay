# Overlay

Overlay is an app that can be used to watch videos from plattforms like Youtube and Twitch. It lays and stays on top of other windows. The app can be used on Windows, MacOS and Linux.

![Main window](https://raw.githubusercontent.com/dlittig/overlay/master/docs/main-window.png)

![Video window](https://raw.githubusercontent.com/dlittig/overlay/master/docs/video-window.png)

Use this tool to watch youtube videos for example or learn to code, while keeping the video on top of others without wasting space with black bars.

## Features

* Minimalistic UI
* Support for Youtube, Twitch and Dailymotion
* Portable on Linux and MacOS with `.AppImage` and `.app` format respectively

## 1 Get started
At first we need to setup the environment to develop the app.

### 1.1 Prerequisites
The package manager used here, is `yarn`. First install `yarn` for example with `brew` by typing:
```
brew install yarn
```

### 1.2 Installing
After installing `yarn` the setup is pretty straight forward. The project contains a `package.json` which lists all required packages. The file `yarn.lock` contains all the packages the developer used recently.

Install dependencies by entering:
```
yarn install
```

## 2 Development

### 2.1 Run application
Use the following statement to run the application:
```
yarn start
```

### 2.2 Linting
This project is equipped with ESLint for code quality standards. To lint the whole project you can use the `yarn` script:
```
yarn lint
```


## 3 Deployment
To build an executable for your current plattform use the following command.
```bash
yarn build
```

## 4 Testing

To run all the tests use the following yarn script:
```
yarn test
```

## Built with

* [yarn](https://github.com/yarnpkg/yarn) - package management
* [electron](https://github.com/electron/electron) - the base for all this stuff
* [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) - boilerplate and build tools
* [react](https://github.com/facebook/react) - Reactive web components
* [redux](https://github.com/reduxjs/redux) - Central data store
* more

## Authors
* **David Littig** - *Initial work* - [GitHub](https://github.com/dlittig)

Enjoy!
