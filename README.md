# Overlay

Overlay is an app that can be used to watch videos from plattforms like Youtube and Twitch. It lays and stays on top of other windows. The app can be used in Windows, MacOS and Linux.

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
```
yarn make
```

## 3.1 Linux
For linux no other tools are required. To build this application for linux, type this command:
```
yarn make --platform=linux
```

## 3.2 Windows
To deploy the application to the Windows plattform, a few prerequesits are required. 
Make sure to install the following tools before starting to package the application when your host is UNIX based:

* [wine-stable](https://wiki.winehq.org/Ubuntu)
* [mono-devel](http://www.mono-project.com/download/stable/#download-lin-ubuntu)
* `wine-gecko*`

Then we need to setup some exports for wine, so the binaries are reachable from anywhere:
```
export W=/opt/wine-stable
export WINEVERPATH=$W
export PATH=$W/bin:$PATH 
export WINESERVER=$W/bin/wineserver
export WINELOADER=$W/bin/wine
export WINEDLLPATH=$W/lib/wine/fakedlls
```

Load the changes from the file for example with `source ~/.bash_profile`

After this you can start the application bundling with the following command:
```
yarn make --platform=win32
```

## 3 Testing

## Built with

* [yarn](https://github.com/yarnpkg/yarn) - package management
* [electron](https://github.com/electron/electron) - the base for all this stuff
* [electron-forge](https://github.com/electron-userland/electron-forge) - boilerplate and build tools
* [etch](https://github.com/atom/etch) - JSX components and life cycle
* [uikit](https://github.com/uikit/uikit) - UI components
* more

## 4 Upcoming

* Docker image for deployment to prevent dependency requirements

## Authors
* **David Littig** - *Initial work* - [GitHub](https://github.com/dlittig)