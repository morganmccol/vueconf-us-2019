# Chris Fritz

## Vue 3: What I'm Most Excited About

View [slides](https://github.com/chrisvfritz/vue-3-trends/blob/master/slides-2019-03-vueconfus.pdf).

- @chrisvfritz
- He's written most of the core documentation for Vue
  - with Natalia ... and Sarah Drasner
- How is Vue 2 code going to be simplified and more explicit as you migrate to V3
  - Simpler
    - less code
    - fewer concepts (less cognitive load)
    - fewer "foot guns"
      - minimize opportunities to make mistakes to cause you pain later
  - Explicit
    - clear relationships
      - both components to know about the relationship between them in both of them
    - expressive code
- Goodbye reactivity caveats
  ```javascript
  Vue.set(this.myArray, index, newValue) // add array by index, or new prop to object or delete from object
  ```
  - we use these methods in V2 to know that something has changed
  - in vue 3 (as long as no internet explorer)
  ```javascript
  this.myArraypindex = newValue
  this.myObject[key] = value
  delete this.myObject[key]
  ```
- Multiple root nodes
  ```javascript
  <template>
    <div></div>
    <div></div>
  </template>
  // component template should contain exactly one root element
  
  // in V3
  // this will be okay (can use multiple root nodes and opens up more patterns that weren't available before)
  ```
- Breaking News
  - Simpler transparent wrappers
  ```javascript
  <BaseInput
    v-model="searchText"
    placeholder="Search"
    @keyup.enter="search'
  </>
  ...
  ```
  - .data attribute will be removed in V3 and considered an antipattern
  - Lots of boiler plate code to use this above
  ```javascript
  <script>
  export default {
    props ['label']
  }
  </script>
  ...
  <input v-bind="$attrs" />
  ```
  - no more automatic attribute inheritance
    - need to be explicit with v-blind="$attrs"
      - prevents bugs from change root attrs
        - all attributes not defined as props on a component
        - never need inherit = false
    - v-on will compile to attributes (e.g. @keyup compiles to on-keyup)
      - v-bind="$attrs"
        - ($attrs includes all non-emitted listeners)
        - no more $listeners
        - no more .native modifer for v-on
    - v-model will compile to attributes (model-value and on-model-update)
      - v-bind="$attrs"
        - no more overriding the native input event
        - no more model option (probably)
      - v-model on an element just works
        - handles isIE9, isIE, isEdge weirdness for you (similar to Angular and React)
          - also quarks with IOS, android and other browsers
    - Smarter v-modle on a component in Vue 3:
      ```javascript
      <template>
        <select v-bind="$attrs">
          <option disabled />
          <option v-for="choice in choices">
            {{ choice }}
          </option>
        </select>
      </template>
      ```
- Simpler render functions
  - JSX for simple cases is pretty readable
  - If not using JSX the render function gets pretty complex
    - in Vue 3 this is now simpler
      ```javascript
      render(h) {
        return h(BaseInput, {
          modelValue: this.searchText,
          onModelUpdate: newValue => {
             this.searchText = newValue
            },
            class: this.$style.searchInput,
            placeholder: ..
          }
        })
      }
      ```
- If I'm not already using Vue, should I wait for Vue 3?
  - Vue 2 still has the easiest learning curve out of all the frameworks
- Vue 3 support IE
  - But will have the same reactivity caveats of Vue 2
- Will Vue 3 break everything?
  - No
= There wil be a next-gen migration helper and a migration guide to move to Vue 3
  - Hoping it will take 5 minutes to migrate instead of 5 hours
  - Offers to Automatically migrate
- We're backporting as many features as possible
  - like new slot syntax
  - already getting Vue 3 goodness in Vue 2
- github.com/vuejs/rfcs
  - help us make it better
