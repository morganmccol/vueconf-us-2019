# Lightning Talks

## Chris DeMars

### Accessibility for Everyone Or Accessibility 101

* 20% of people have some type of disability
  * Web accessibility means that people with disabilities can use the Web
  * Web accessibility means that EVERYONE can use the web
* Types of Impairments
  * Hearing
    * Sensory neural hearing loss, conductive hearing loss, or mix
  * Vision
    * Color blindness, field of vision
  * Cognitive
    * Math comprehension, reading comprehension
  * Mobility
    * Cerebral palsy, MS
  * Temporary
    * Broken hand, finger, single parent
* Intro Wins
  * Semantic Markup
    * By default is accessible
    * Can be retrofitted
    * Header, main, footer, aside, section, article
  * Alt attributes
    * The most important piece of an image
    * Works regardless if you have an image or not
    * Don’t leave blank
    * Short and descriptive text
  * Aria Labels
    * For non-contextual elements
    * Used on Xs on top of modals
    * Social media icons is just an icon font without a label
  * Colors matter
    * Check contract of foreground and background, then flip them
  * Screen Readers
    * All iOS devices come with voice recorders
  * Audit Tools
    * AXE: The accessibility engine
      * Can be used with testing suites to audit accessibility
      * Manual test by removing mouse, monitor
    * Lighthouse
      * web.dev is lighthouse in the browser
    * WebAIM has an audit tool
    * **Stylelint-a11y can be used on vue**
* Summary
  * Consider all impairments
  * Implement intro wins

## Casie Siekman

### Vue + i18n = Fun!

* Why make the effort to translate
  * Helps make a better developer
  * Could be a good first project for a team member or new developer
* Getting Started
  * I18n library
    * `npm install vue-i18n`
  * Create a way to choose the correct browser language
    * Create an i19n index file
    * root folder -> languages -> en.lang.son, es.lang.json, etc
    * keys in file same, language text as value
    * `$t` is the moniker for translating with i18n framework
  * Create master “engineering English” JSON file
* How it Works
  * Uses master JSON file to provide translations when language is switched
  * Can use data/time and currency translations

## Doug Steinberg

### Trying Out Cloudinary's New Vue SDK

* What is Cloudinary?
  * Cloud-based media hosting and transformation service
    * Like S3 and Photoshop combined
  * You can upload and crop, add watermarks, etc

## Lucas Still

### Sub-second Vue

View [code](https://github.com/moduscreateorg/vue-lambda).

* Six Technologies
  * Vue
  * Service Worker
    * PWA
  * Webpack
    * Remove Dead Code
    * Minify
    * Chunk
  * CDN
    * Amazon CloudFront
    * Cloudflare
  * Compression
    * Gzip
    * Brotli
    * Graphics
  * SSR
    * First paint
    * Inline Critical CSS
    * Time to interactive
  * Edge Computing
    * Cloudflare
    * Used to serve dynamic files

## Charles Villard

### Ramp up to Vue

* Talked about how much he appreciates the Vue community

## Jennifer Bland

### Using Graphs and Charts in Vue.js

* Talked about a plugin for graphs (not d3)
