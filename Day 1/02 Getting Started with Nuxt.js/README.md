# Gregg Pollack

## Getting Started with Nuxt.js

View [article](https://medium.com/vue-mastery/free-nuxt-js-tutorial-creating-an-app-1a531bc6045).

- Nuxt is an opinionated framework ontop of vue
  - Create a nuxt app
    ```javascript
    npx create-nuxt-app <my-project>
    ```
    - in nuxt no src direction, everything is in root
      - layouts, pages, components folders
        - default.vue created in layout
        - index.vue in pages
        - logo.vue in components
      - store direction for Vuex
      - static for static assets
      - assets (uncompiled, Stylus SASS, images, or fonts)
        - vue-loader, file-loader, url-loader for effective asset serving
          - uses version hashing for caching for images >= 1 kb
          - < 1kb it will inline the image
      - plugins directory
      - middleware
      - nuxt.config.js file (modify away from intellient defaluts)
      - not need for router.js
        - nuxt generates routes for you
    - fix VS code settings (conflict between vetur and eslint)
      - disable prettyhtml if you get weird errors (default formatter for HTML)
    ```javascript
      <template>
      <div id="app">
        <nuxt />
      </div>
      </template>
    ```
    - SPAs aren't fast on intial load
      - download the index.html
      - download all the vue application js
      - initialize vue app
      - yada yada lots of stuf before it gets shown
    - Can instead run app in universal mode
      - sever renders vue components to html 
      - client shows page
      - then requests js files and these are returned by js
      - and then vue takes over 
    - After initial load and hydration behaves like a normal SPA
      - code splitting by default based on page when running npm run build
    - compiled templates
    - smart prefetching
    - Universal mode increases speed of initial load and pages with code splitting
  - SPAs aren't great for SEO
    - search crawler may not support newer JS featurs
    - google is the only engine that tries to render js
    - one js error can cause your whole site not not be indexed
    - ... other stuff
  - each page needs its own title tag and meta-description tag
    - vue-meta is built in library to nuxt
    ```javascript
    <script>
    exprot default {
      head() {
        return { 
          title: '',
          meta: [
            hid: '',
            name: 'description',
            content: "blah"
          ]
        }
      }
    }
    </script>
    ```
  - eliminate duplication as the title will have same thing, and meta description can be made as default
    - works even when we disable JS
    - Might think you can you vue meta tabe in a normal vue app
      - but it's not until the JS gets loaded that vue gets loaded
        - you need JS to load proper tags
      - but since we're running in universal mode it's the server that will generate the tags
        - and you'll get this stuff before javascript is run
