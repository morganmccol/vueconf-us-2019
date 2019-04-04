# Evan You

## State of the Vuenion

View [slides](https://docs.google.com/presentation/d/1EUUu_djeNWa8kRF_uQ0DWReSpoIQn2xXCLh5A-6YdLg/edit?usp=sharing).

* State of Vuejs Report
  * http://monterail.com/state-of-vuejs-report
* Vue 2.6 “Macross”
  * Simple usage when one single default scope slot and named slots
  * If you use an async function for lifecycle or methods, implicitly return promises and errors are now handled by Vue’s error handling
  * Now come with exact location of error
  * Built-in data handling of server side rendering
* Vue Devtools 5.0
* Vetur 0.16
  * Template intelligence support
  * Autocomplete of child components and props
  * Existing data properties and their components
  * Rivals TSX
* **Vue CLI 4.0 Roadmap**
  * Involves bumping major versions of a number of dependencies
  * Jest, Workbox, core-js, Nightwatch, webpack
* [3.0 RFCs](https://github.com/vuejs/rfcs)
  * Channel for all things they plan to do in 3.0
  * Repo on GitHub
  * **New Slot Syntax**
    * Moving toward v-slot directives
    * Make renderless components much easier to use inside templates
    * When you have multiple named slots, much wrap in templates
    * Hurts readability of syntax, so new syntax enforces consistency
    * When you have multiple nested components providing slot variables, new syntax makes it easier to associate component declared and who declaring it
  * Slot Unification
    * Normal and scoped slots
    * Distinction was a history problem from shipping normal first, then later introducing scoped
    * Noticed that slots can be slots and concepts unified
    * All are implicitly compiled as scoped slots internally
    * Slot content is created in parent scope and passed down to the child
    * On updates, two components update on a single scope change
    * This is changing to lazy loading of child so only child will update
    * Better performance for component tree by reducing number of components that need to update on state change
  * Class API
    * Can use a native class that extends vue
    * Lifecycle hooks are class instance methods
    * Computed properties are getters
    * Anything else is a normal method
    * Simple and straightforward when mapping to existing components
    * Goal is to provide a replacement of class component targeted for typescript users
    * TypeScript has a hard time understand what this means in Vue API
    * Using class API makes everything simpler
    * Not to replace existing object API but provide an alternative
  * Advanced Reactivity API
    * In 2.6, shipped vue.observable: a function that takes in an object and returns the reactive version of it
    * Separate APIs that allows you to leverage Vue’s reactive components outside component
    * If you want to watch state changes and leverage state to cause things to update, always need a component instance and expose off this
    * In 3.0, split out reactive system into dedicated package to leverage full power of reactive system without component
    * Standalone watch API that allows you to watch functions or computed propriety reference
    * Useful to connect state into components by returning them in data()
    * Can create reusable, encapsulated state logic by sharing them across components
    * Mixins do this today
  * **Dynamic Lifecycle Injection**
    * We did this yesterday!
    * These two RFCs together can unlock a new pattern similar to React Hooks
    * Case Study: Mouse Position
    * Mixins, Higher-Order Components, Renderless Components, Hooks
  * More 3.0 RFCs
    * Involve breaking changes
