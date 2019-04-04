# Guillaume Chau

## 9 Performance Secrets Revealed

View [slides](https://slides.com/akryum/vueconfus-2019#/).
View [code](https://github.com/Akryum/vue-9-perf-secrets).

* Improving the app performance leads to better user experience
* **Functional components**
  * Unoptimized vs optimized
  * For optimized, can use template function and change props to props.value because the component has no local state
* Child component splitting
  * Can use ChildComp to render heavy tasks
* Local variables
  * Cache variable at the start instead of using it throughout
  * Accessing reactive state in vue requires re-rendering many times
* **Reuse DOM with v-show**
  * Instead of using v-if and v-else, switch to v-show
  * Results in less usage by the browser to recreate the DOM
  * More memory intensive however
* **Keep-alive**
  * Use around router-view to cache whole views instead of destroying them
  * More memory intensive
  * Can include or exclude routes from being included
* Deferred features
  * Instead of rendering everything at the same time, conditionally render parts of page or component depending on number of frames since created
  * Uses defer mixing
  * Takes same time to render everything but user experience through perception
* Time slicing
  * Used for committing a ton of items to the store (10k+)
  * Causes interaction blocking when committing to store
  * Can split the items array into chunks of 1000 items per frame
  * Gives a chance to browser to rerender the app in the event of loading needed
* Non-reactive data
  * Can optimize store data by marking as non-reactive
  * Up to 17x faster
* Virtual scrolling
* Large array of items and want to display them
* Uses vue devtools scroller to render visible items instead of displaying all at the same time
