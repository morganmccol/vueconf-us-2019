# Natalia Tepluhina

## Building Desktop Applications with Vue

View [slides](https://www.slideshare.net/NataliaTepluhina/desktop-apps).

* Why use JS for Desktop applications?
  * Cross Platform
* Electron
  * HTML + CSS + JavaScript
  * Main Process
    * One main process
    * Knows nothing about document object model
    * Windowless
  * Renderer Process
    * For every single window
    * Access to window and document
  * How to do it with Vue
    * Create main file
    * Update config
    * Vue-router is fine
    * Vuex is complicated due to multiple windows
    * Mentioned vuex-electron
    * Vue-CLI plugin allows for electron-builder
      * Creator is 16-year-old
  * ~130 MB on build
* NW.JS
  * HTML + CSS + JavaScript
  * Works with Chromium and Node
  * Main Entry Point
    * HTML file
  * Chromium Usage
    * Pulls the whole chromium and is much larger than electron
  * **Source Code Protection**
    * Built in protection to obfuscate code on build
    * Electron does not do this
  * How to do it with Vue
    * Modify package.json
    * Run app
    * Build app by installing nw and specifying version
    * Vue-route and Vuex work out of the box
    * Vue-CLI plugin created by presenter
  * ~230 MB on build (can be reduced significantly)
* Vuido
  * No HTML + CSS
  * Powered by Libui-Node
  * Native GUI Components
  * How to do it with Vue
    * Webpack-vue boilerplate
    * Uses native components
    * No styling AT ALL
    * Uses launchui-packager
    * Cannot use vue-router, vuex OK
  * ~32 MB on build
* **Desktop PWA**
  * Chrome 73 supports for MacOS (already on Windows and Linux platforms)
  * Allows installation of application to mobile and desktop
  * Can install directly from chrome
  * Vue-CLI has plugin for PWA
  * ~516 KB on build
* Find what serves best for you
