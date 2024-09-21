# Leetcode Demon Mode

This is an Electron-based application that keeps leetcode open and forces you to do nothing else as it wont let you, by disabling keyboard shortcuts and being in kiosk mode. It will let you out after an hour, or the duration you choose to set in the main.js file

## Features

- **Kiosk Mode**: The app opens in fullscreen, hides the window controls (minimize, maximize, close), and locks the user into the app.
- **URL Blocking**: Only allows browsing within `https://leetcode.com`. Any attempt to access other websites will be blocked.
- **Timed Exit**: The application automatically quits after a set time (default is 10 seconds).
- **Global Shortcut Disabling**: Disables common system shortcuts such as `Alt+Tab` and `Cmd+Tab` to prevent switching out of the app.

## How to Use

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **Electron**: Install Electron by running the following command:

  ```bash
  npm install electron --save-dev


# Running the App

- Clone the Repo or download the source code
- Install the dependecies

    ```bash
    npm install

- Run the Electron App

    ```bash
    npm start
