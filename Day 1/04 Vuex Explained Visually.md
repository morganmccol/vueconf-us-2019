# Adam Jahr

## Vuex Explained Visually

* State Management Pattern + Library
* State is Reactive
  * If one component were to update, another listens to changes for the state and receives automatically
  * State changes could be unpredictable and untraceable
* Vuex Store
  * Similar to the vue instance
  * Data -> State
  * Methods -> Actions
  * Computed -> Getters
  * Mutations
    * Commit + track state changes
    * There are times when you want to run multiple mutations, actions allow use to wrap mutations
  * Devtools has time travel debugging
* How to Access State
  * Access state from computed properties
  * Value is cached until the state changes
  * Directly from store -> MapState helper with object -> with array
  * Can use getters to return state by value
* Actions and Mutations
  * Mutations can update/mutate Vuex State
  * Mutations are synchronous, actions are asynchronous
  * Actions can wrap business logic around mutations
  * Actions don’t always commit their mutations
  * Always put mutations within actions
    * Future-proofs your app
    * Increases scalability
    * Mutations are going away
    * **New version of Vuex is ALL actions**
* Reorganizing with Modules
  * All of our state, mutations, actions, and getters are in one file
  * As the application grows, this will become messy
  * Break code into modules broken off from root state
  * Namespaced vs unnamespaced modules
