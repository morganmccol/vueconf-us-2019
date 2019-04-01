# Lightning Talks

## Jennifer Bland

### How to Reduce Your Vue.JS Bundle Size With Webpack

- Senior Software Engineer at Stanley Black & Decker
- Use webpack-bundle-analyzer to reduce bundle size

  ```bash
  npm install --save-dev webpack-bundle-analyzer
  ```

  - add to vue.config.js file to use the plugin
- vuetify.js
  - npm install vuetify vuetify-loader
  - will load just the parts that you are using, not the entire library

## Matt Broffy

### Progressively Enhanced form Validation Using Renderless components

- Progressive Enhancement
  - HTML 5 Validation
  - ValidtyState API
- Use existing validation attributes
- Non-intrusive to v-model
- Using a with-validation component that uses slots
  - able to then use built in browser validity states, don't need to pull in a full third party library for validation

## Benjamin Dalton

### Vue by Piecemeal: How I brought Vue to a Legacy App Incrementally

- Senior Software Engineer, Knowbe4 (full stack)
- Legacy apps are resistant to change
  - Snuck in Vue.js to a company that said they won't go to an SPA
  - Vue is good for dropping into an app without a radical change
- Had restrictions that allowed him to use components and vues with being restricted to old-school jquery way
  - Inline-Templates
  - X-Templates
- Single Vue instance -> Components -> Vue router -> Vuex -> Vue-cli

## Brad Balfour

### Quickly Delivering Value to Users

- Senior Software Engineer - bloomberg
- Why is Vue spreading within our team?
  - Incremental replacement to make reactive/dynamic components
  - Easy to learn
  - Fun to use
- Existing npm components based on Vue that we can reuse for Big Quick Wins
  - internal A/B testing tools using vue-full-calendar
  - take existing list and filter it then map it to the calendar props
  - one dev for a couple hours to make a change
  - tooltips everywhere, paged listing -> infinite scrolling
    - note: bad UX, can't save where you're at

## ???

### Global vs Component State in Vuex

- How to decide if it should be global vs component state
  - each component instance has its own local state
  - global state is overarching and constant between all instances (source of truth)
- What questions can you ask yourself to help decide where specific pieces of data should go?
  - Will this piece of data be the same across the entire application
    - enterprise root app, one instance of engine and crew (global state)
    - fleet has its own ships, multiple instances of ships (so these should be local)
  - Will this piece of data be used in one component?
  - Is this piece of data generated based on other data in the application
  - Will this piece of data be used in a component that renders multiple times
  - Will the data be changed from multiple places
- Belongs in Global State
  - stays the same across the application
  - can be changed from multiple places across the application
  - only one instance of the data exists
- Belongs in Component State
  - used within a component and its direct children only
  - data changes based on other data within the same component (ie UI Triggers)
  - data is unique for each component instance

## Vladamir Novick

### Ways of Using Your GraphQL Subscriptions in Your Vue Apps

- Developer Advocate GDE, author, consultant
- Using subscriptions in your Vue apps
  - Vue + Hasura
- What is GraphQL
  - query language for your API -- magic
- Small Subscriptions

  ```javascript
  apollo: {
    $subscribe: {
      posts: {
        query: require('../graph/ql/getPosts.gql')
        result: ([data]) {
          this.posts = data.posts;
        }
      }
    }
  }
  ```

  - also subscribe to all method
