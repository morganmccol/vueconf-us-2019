# Evan You

## State of the Vuenion

View [slides](https://docs.google.com/presentation/d/1EUUu_djeNWa8kRF_uQ0DWReSpoIQn2xXCLh5A-6YdLg/edit?usp=sharing).

- Surpassed bootstrap, 2nd most starred repo on github
- New releases
  - v2.6 (last month)
    - new slot syntax / performance improvements
    - improved async error handling
      - errors in the promise change will now be included in vues global error handling
    - improved compiler error messages
      - point to where in the templete the error is happening
    - Built-in data prefetch support during server-side rendering
  - Vue Devtools 5.0
    - routing tab
    - perf tab
    - settings tab
    - editable vuex state
    - ...
  - Vetur 0.16
    - Template intellisense support!
      - expression autocomplete inside interpolations & directives
  - Vue CLI 4.0 Roadmap
    - Jest v24
    - Workbox v4
    - core-js v3
    - Nightwatch v1
    - Webpack v5 relase (eye on this)
  - v 3.0 RFCs
    - new slot syntax (more succinct usage for default scoped slots)
      - renderless components much easier to use
    - more consistent & explicit when using named slots
      - new sytax forces everything to be consistent
      - multiple nested components having slots
        - new sytax makes it easier to associate variables declared and component declaring it
    - Slot unification (normal and scope)
      - No longer distinction
      - A lot internally compiled as scoped slots
      - In 2.6 the slot content created in parent and passed down to the child
        - scoped, lazy evaluted in child render function when this.msg updates it no longer affects parent unlike normal which affects both parent and child
    - class api
      - class that extends vue
        ```javascript
        export default class App extends Vue {        
        ```
      - primary goal to provide a built-in & more efficient replacement for vue-class-component
      - works with both native ES2015 and typescript
      - object api still supported
    - Advanced Reactivity API (vuejs/rfcs#22)
      - Vue.observable (func takes in object and returns reactive version of it)
        - create standalone reactive state
        - allows you to leverage reactivity system outside of components
          - unlike v2 where this is handled only internally in the component
      - Dynamic lifescyle hooks vuejs/rfcs#23
        - Injection
        ```javascript
        import { onMounted, onUnmounted } from 'vue'
        export default {
          beforeCreate() {
            onMounted(() => {
              ...
            })
          }
        }
        ```
        - Similar to react hooks
        - Case Study: mouse Position
          - Could use a mousePositionMixin
            - with mounted, destroyed hooks
              - with adding and removing listeners
            - some problems:
              - have data injected and update methods
                - when authoring a mixin may have namespace clashing (like update defined in another component
                - props, data, methods all can class, especialy if multiple mixins
                - unclear which mixin injects props
          - Higher-order components
            - these have similar problems to mixins
              - when overused has same namespace clash for props
              - unclear props source
              - extra component instances
          - Renderless Componets
            - using scoped slots
              - no namespace clashing
              - has clear source of variables
              - but still extra component instances
            - still a good choice in a lot of good use cases
            - but in this case of mouse position, but can avoid all three issues
              - in 2.x already have tools to do it
              - using hooks
              ```javascript
              new Vue({
              template:
                <div>
                  
                </div>
              })
              ...
              function useMousePosition(vm) {
                vm.$on('hook:mounted', () => {
                  window.addEventListener('mousemove', update)
                })$
              }
              ```
              - similar to react hooks but some differences
                - react calls on every single render, but creates counter-intuitive patterns in JS
                - in Vue it is only called once, and closer to standard JS convention, no call-order constraint, not stale closures
                - can be used as a replacement for mixins (which will still be supported for backwards compatibility)
        - more 3.0 RFCs to be published soon
          - global api re-design
          - render function api change
          - functional and async components API changes
