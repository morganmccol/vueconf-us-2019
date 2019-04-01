# Gregg Pollack

## Getting Started with Nuxt.js

View [article](https://medium.com/vue-mastery/free-nuxt-js-tutorial-creating-an-app-1a531bc6045).

- Nuxt is an opinionated framework on top of vue
  - Create a nuxt app

    ```bash
    npx create-nuxt-app <my-project>
    ```

    ```javascript
      <template>
      <div id="app">
        <nuxt />
      </div>
      </template>
    ```

- no src directory, everything is in root
  - layouts, pages, components folders
    - default.vue created in layout
    - index.vue in pages
    - logo.vue in components
  - store directory for Vuex
  - static for static assets
  - assets (uncompiled, Stylus / SASS, images, or fonts)
    - vue-loader, file-loader, url-loader for effective asset serving
    - uses version hashing for caching for images >= 1 kb
    - < 1kb it will inline the image
  - plugins directory
  - middleware
  - nuxt.config.js file (modify away from intelligent defaults)
  - no need for router.js
    - nuxt generates routes for you
- fix VS code settings (conflict between vetur and eslint)
  - disable prettyhtml if you get weird errors (default formatter for HTML)
- SPAs aren't fast on initial load
  - download the index.html
  - download all the vue application js
  - initialize vue app
  - yada yada lots of stuff before it gets shown
- Can run app in Universal Mode
  - sever renders vue components to html
  - client shows page
  - then requests js files and these are returned by js
  - and then vue takes over
  - after initial load and hydration behaves like a normal SPA
    - universal mode increases speed of initial load and pages with code splitting
    - code splitting by default based on page when running npm run build
    - compiled templates
    - smart prefetching
- SPAs aren't great for SEO
  - search crawler may not support newer JS features
  - google is the only engine that tries to render js
  - one js error can cause your whole site not not be indexed
- Each page needs its own title tag and meta-description tag
  - vue-meta is built into nuxt

  ```javascript
  <script>
  export default {
    head() {
      return {
        title: '',
        meta: [
          hid: '',
          name: 'description',
          content: 'blah'
        ]
      }
    }
  }
  </script>
  ```

  - eliminate duplication as the title will have same thing, and meta description can be made as default
  - works even when we disable JS
  - might think you can use vue meta tags in a normal vue app
    - but it's not until the JS gets loaded that vue gets loaded
    - you need JS to load proper tags
    - since we're running in universal mode it's the server that will generate the tags and you'll get this stuff before javascript is run
