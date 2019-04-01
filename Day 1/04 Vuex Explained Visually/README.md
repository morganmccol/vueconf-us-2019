# Adam Jahr

## Vuex Explained Visually

- state management
  - based on flux pattern, statement management framework + library
  - if two distant cousin components need to communicate state:
    - could use events up to parent and then back down, but that is clumsy
  - instead can make a single source of truth
    - one component updates state another will receive the update
    - what happens when different components are updating state in different ways and from different parts. It could be untraceable and unpredictable
      - VueX store resolves these issues
  - in app methods can update data
    - in store actions can update state
  - in app computed (return generated output base on state)
    - in store getter (return filtered version of state)
  - actions -> mutations -> state
  - vue dev tools has vuex tab to do timeline debugging to see the state of the store at certain points in time for debugging
  - `actions: { fetchTodos(context) }` context object allows us to work on the store?
    - commit mutations (from actions)
    - dispatch actions (from components)
  - getter used to get a subset of items (filtering)
- Accessing state from computed
  ```javascript
  computed: {
    user() P
      return this.$store.state.user
  }
  ```
- Vuex Helpers
  - allow us to clean up code in a way that is more readbale
    - mapState
      ```javascript
      computed: mapState({
        user: state => state.user
      })  // -> mapState ({ user: 'user'}) -> mapState(['user'])
      ```
- Getters
  - Dynamic getter (takes in a parameter to grab data with)
  ```javascript
  computed: {
    getTodoById(id {
      return this.$store.getters.getTodoById(id)
    })
  }
  ```
    - also can use mapGetters to clean up the code above
- Mutations (update, mutate vue state)
  ```javascript
  state: {
    count = 0,
  }
  mutations: {
    INCREMENT_COUNT(state) {
      state.count += 1
    }
  }
  ...
  methods: {
    incrementCount() {
      this.$store.commit('INCREMENT_COUNT', this.incrementBy)
    }
  }
  ...
  <input type="number v-model.number="incrementBy">
  <button @click="incrementCount">Increment</button>
  ```
- Actions
  - mutations are synchronous, actions are async
  - Actions can wrap business logic around mutations
  - real-life metaphor for actions and mutations
    - text friend to pick up break (mutation)
      - change state to no bread to bread
    - request to fetch bread is the action
      - actions don't always commit, car could break down, store can be out of bread
    - Always put mutations within actions even if you only have
      - this future proofs your app
        - may not currently need business logic around the mutation yet
        - but later it's easier to add, so builds in scalability
          - **Mustations** are going away so it will all be actions
  ```javascript
  actions: {
    updateCount({ state, count}, value) {
      if (state.user) {
        commit('INCREMENT_COUNT, value')
      }
    }
  }
  ...
  // dispatch instead fo commit mutation in the the incrementCount() method above
  ```
- Modules
  - store.js -> modules (for user and todos, etc)
    - Both namespace and non-namespaced modules
- VueConf2019 -> 25% off Vue Master subscription
