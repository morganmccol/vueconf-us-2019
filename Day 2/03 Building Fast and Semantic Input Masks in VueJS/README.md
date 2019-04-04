# Divya Sasidharan

## Building Fast and Semantic Input Masks in VueJS

* Input Masks are a key pattern for forms to make them readable and allow users to understand what they’re doing
* Requirements
  * Allow only numbers
  * Add format for dollars and cents
* Input Events
  * Capturing key events using oninput (vanilla JS) or @input
  * V-model is @input and :value in a single directive
  * Browser API to catch key events is e.key
  * Create regex for is not a number so that event will not propagate
  * Keydown -> keypress -> input -> keyup
  * By binding to input, only value numbers not character code for validation
  * Instead of @input, use @keydown
  * Keydown happens right before the value gets keyed up
  * Need keydown for validation, need input for formatting
  * Each time formatting occurs, must use removeMask to undo formatting
* The Role of Reactivity
  * Switch to getter/setter and computed properties
* Reusable component patterns
  * Can use scoped slots to grab parts of component
  * Use v-mask directives to use custom hooks
  * The ones most people care about are bind/unbind
  * If input already has a value, masks can apply on load and use updated to reapply as needed
* Hooks
  * Experimental
  * Allow use of v-model
  * Use value with computed get and input with computed set
  * Input mask and within hooks, call the hook and extrapolate and use object deconstructing
  * Can instead use advanced reactivity API
