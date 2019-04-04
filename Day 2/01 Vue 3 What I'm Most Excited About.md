# Chris Fritz

## Vue 3: What I'm Most Excited About

View [slides](https://github.com/chrisvfritz/vue-3-trends/blob/master/slides-2019-03-vueconfus.pdf).
View [code](github.com/vuejs/rfcs).

* Written most of the core documentation in Vue
* How will code we write today simplify and become more explicit as we migrate
  * Simpler
    * Less code
    * Fewer concepts
    * Fewer foot guns
      * Want to minimize the number of cases to accidentally make a mistake that will cause pain later
      * Happy and more maintainable apps
  * Explicit
    * Clear relationships
    * Expressive code
* Trends in Vue 3
  * Goodbye reactivity caveats
  * Vue.set and vue.delete
    * Allows us to set an item to an array, add a property to an object, or delete a property from an object
    * Vue 2 is not smart enough to detect changes without these methods
    * Otherwise, component won’t re-render, computed property won’t re-compute
    * In Vue 3, can use normal javascript for these cases
    * Multiple root nodes
      * Supported in Vue 3
      * Opens up opportunities for more patterns that were previously unavailable
* New changes
  * **Simpler transparent wrappers**
    * A common pattern where you have a base input component that you want to work with v-model, add attributes with input elements, and add listeners that work on normal input elements
    * Idea of transparent wrapper component is that base input component works exactly as normal input element
    * **Native modifier is considered an anti pattern and will be removed in Vue 3**
    * No more automatic attribute inheritance
      * Just v-bind=“$attrs”
      * $attrs includes all non-prop attributes
    * V-on will compile to attributes
      * @keyup compiles to on-keyup
    * V-model will compile to attributes
      * No more overriding the native input event
* Simpler render functions
  * V-model compiles to modelValue and onModelUpdate
* Moving to Vue 3
  * Will it break everything
    * No
    * Use the migration guide or migration helper
  * What if I’m stuck with Vue 2
    * **Backporting as many features as possible**
