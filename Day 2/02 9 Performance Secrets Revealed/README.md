# Guillaume Chau

## 9 Performance Secrets Revealed

View [slides](https://slides.com/akryum/vueconfus-2019#/).
View [code](https://github.com/Akryum/vue-9-perf-secrets).

- Currently can change template to template functional and value to props.value on the v-if
  - 2x faster
  - Less time creating components in javascript
- Child component splitting
  - If child component doesn't depend on the data of the parent component (otherwise will still update)
  - Another 2x faster
- Local Variables
  - this.base (computed method)
  - local variable points to computed variable
    - `const base = this.base`
    - 3x faster
    - first case you access reactive state of vue (since it might change)
- Reuse DOM with v-show
  - instead of v-if v-else use v-show
    - 3x faster
    - This is more memory intensive (as it's keeping most stuff alive)
- Keep-alive
  - caches component and it will load much faster next time (ore memory)
    - there are a few attributes to include/exclude or max attribute to limit number of cached routes to help control this
- Deferred features
  - render progressively your component, conditionally render parts of your pages
  - Improves user experience, but performance hasn't (takes the same amount of time)
  - Defer mixin
    - using a counter
    - increments when mounted for each frame
- Time slicing
  - split array of items into smaller chunks
  - then commit these over time
    - browser still slows down but it isn't completely frozen like in the other case
      - essentially giving a few frames back to the browser to render stuff
    - Can combine with a loading animation
- Non-reactive data
  - several ways to do this
    - objectFreeze is one way, but can't change it later
    - if can't use it then use `object.defineProperty`

      ```javascript
      object.defineProperty(itemData, 'data', {
        configurable: false,
        value: item
      })
      ```

    - 7x faster
- Virtual scrolling
  - vue-tools-scroller
  - `<recycle-scroller>`
    - only render visible items
    - can use regular components and not just function
