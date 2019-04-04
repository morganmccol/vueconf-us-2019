# Gregg Pollack

## Getting Started with Nuxt.js

View [article](https://medium.com/vue-mastery/free-nuxt-js-tutorial-creating-an-app-1a531bc6045).

* Nuxt is opinionated
* Part 1: Build a Nuxt App
  * Real-world-nuxt, none, linter + formatter prettier axios, none, none, universal, npm
  * Gives one directory for components
  * In next, there’s no src directory all folders go in root
  * Components
    * contain reusable vue components
    * `default.vue`
  * Layouts
    * contain layouts (home layout, blog layout)
    * `index.vue`
  * Pages
    * contains top level views used to generate routes
    * `index.vue`
  * Store
    * Vuex Store files
  * Static
    * Logos
  * Assets
    * Uncompiled assets (stylus, SASS, images, fonts)
    * Uses version hashes for caching or inlines directly
  * Plugins
    * Plugins to load before starting the vue app
  * Middleware
    * Custom functions to run before rendering a layout or page
  * Don’t have to create a router because nuxt makes one automatically from pages
  * Fixing conflicts in vetur with prettier
    * default formatter HTML: none
* Part 2: Universal Mode
  * Normal website client that returns an html page
  * SPA returns index.html where vue router loads up o page (slow)
  * To view a page, browser must download `index.html`, download vue application, initialize, do additional API calls to fetch data, then render templates
  * Quick after initial load
  * In universal mode, user visits client, which requests url from server, which renders vue components to html, return html, shows the page (fast because vue hasn’t loaded), requests javascript files from server, then starts up SPA
  * Nuxt code-splits pages into separate javascript files which results in faster loading as not all templates are loaded upfront
  * HTML is rendered server-side before it was sent over
  * Nuxt uses virtual nodes to make DOM (also learned yesterday!)
  * Prefetches pages when nuxt-links become visible
  * Universal mode increases speed of initial page load (SSR basically)
* Part 3: SEO with vue-meta
  * SPAs aren’t great for SEO
  * Search crawlers may not support javascript as google is the only engine that tries to render javascript and errors can cause the page to not be indexed at all
