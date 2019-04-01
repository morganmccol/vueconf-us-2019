# Natalia Tepluhina

## Building Desktop Applications with Vue

View [slides](https://www.slideshare.net/NataliaTepluhina/desktop-apps).

- Senior Frontend Engineer at Gitlab, Google dev expert
- Why use JS for desktop apps?
  - Not Electron only
  - JS is cross platform
- Electron apps are written with:
  - HTML, JS, CSS
  - Chromium browser under the hood
  - Main process
    - knows nothing about the DOM
  - Renderer Process
    - per window
    - Has access to chromium and thus the DOM
  - How to do it with Vue?

    ```bash
    npm install electron --save-dev
    ```

    - create main.js file
    - define url where electron application is running
    - local host or a folder on production
    - open a new browser window app.on.ready
    - npm tasks serve or build
  - Does Vue-Router work fine?
    - yes, no problem
  - Vuex? 
    - Can have different renderer processes
    - How to share state between them?
    - npm has `vuex-electron`
      - vue-cli -> `vue add electron-builder`
    - web application will be shown as a desktop app
  - 130 MB package to make an app
- NW.js
  - HTML, JS, CSS, Chromium, Node.js
  - Main entry point node.js application (url, html file)
    - Chromium usage
  - Source Code Protection
    - to protect binaries
    - with electron your code won't be obfuscated!
  - How to use with Vue?
    - install it with npm
    - modify package.json (add main entry point)
      - npm run serve to `./node_modules/bin/run .`
      - npm install --save-dev nw@sdk
      - nw .
    - Looks like electron, no difference
    - To build need to specify a version nwVersion
    - Vue-Router and Vuex work right out of the box
      - built a Vue-CLI plugin
      - vue add nwjs
      - nwjs-vue boilderplate (outdated) for more advanced stuff
  - 230MB package (can be reduced significantly)
- Vuido
  - NO HTML + CSS
    - used for simple interface without need for fancy UI
  - Powered by Libui-Node
    - Native specifics for each platform
    - Windows:
      - windows-build-tool C++ dev
    - Linux:
      - Build essentials
      - and something else
    - OS X:
      - xcode
  - How to use with Vue?
    - npm install --global @vue/cli @vue/cli-init
    - vue init mimecorg/vuido-webpack-template ... boilerplate creation
    - similar to vue components but these are native components
    - Vue-router not compatible (because no browser window and url)
    - Vuex works
  - **32 MB Package**
- Surprise!
  - week and a half ago, chrome 73 released
  - Desktop PWA (for OSX, previously only linux and windows)
    - can install web app to mobile phone
    - can install web applications to desktop
    - if application is progressive, can install the application
    - after this the app runs
    - all functionality built with vue
      - `vue add pwa`
  - **516 KB footprint**
- What to choose?
  - styles: PWA, NW.JS, Electron
  - source code protection: NW.JS
  - no styles, native look: Vuido
