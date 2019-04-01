# Divya Sasidharan

## Building Fast and Semantic Input Masks in VueJS

- JAM - javascript api markup - Netlify
- input masks are a good pattern to improve UX
- requirements
  - allow only numbers
  - add format for dollar and cents
- capturing key events
  - @input
    - v-model is just an @input and a value could be used instead

    ```javascript
    methods: {
      formatCashMoney() {
        var key = e,key
        // regex
        [...]
        // decimalize string and separate by 1000s
        this.formattedCashMoney = wearMask(e.target.value)
      }
    }
    ```

- event listeners propogate
  - keydown -> keypress -> input -> keyup
    - to get character code need to go to keydown
    - @keydown instead of @input
  - still not quite working
    - go back to input to also make sure validate works

      ```javascript
      @keydown="validateInput"
      @input="formatINput"
      ```

- the role of reactivity
  - computed properties

    ```javascript
    :value="formattedCashMoney"
    [...]
    computed: {
      formattedCashMoney() {
        return wearMask(this.unformatted)
      }
    }
    // move computed to be getter and setter and just use v-model
    computed: {
      formattedCashMoney() {
        get() {
          return this.formatted
        }
        set(value) {
          [...]
        }
      }
    }
    ```

- reusable component patterns

  ```javascript
  <v-mask
    v-slot:default="{ formattedValue, input, keydown }"
  >
    <label>
      <input
        type="text"
        :value="formattedValue"
        v-on="listeners" // automatically bind child listeners to the slot
      />
    </label>
  </v-mask>
  ```

  - can use v-mask directive for format strings to pass down
    - `v-mask="'(###)###-###'"`
    - Sarah Drasner wrote a good post on how to use directives
    - bind (first inserted), componentUpdated

    ```javascript
    directives: {
      mask: {
        bind(el, {value}) { // when directive is first added to a component
          const mask = value
          el.value = wearMask(el.target.value, mask);
        },
        componentUpdated(el, {value}) { // whenever a user is typing so that we can remove and reapply mask
          let unformatted = removeMask(el.target.value)
          el.value = wearMask(unformatted, mask);
        }
      }
    }
    ```

  - hooks (compositional functions)
    - allows us to encapsulate state without having any presentational logic within it
    - vue-hooks repo
      - computed properties are not reactive in vue hooks
      - this pattern probably shouldn't be used below but it works for demo

      ```javascript
      const computed = useComputed(() => {
        return {
          formatted: {
            get() {
              return data.unformatted;
            }
            set(e) {
              [...]
            }
          }
        }
      }
      ```

    - Advanced Reactivity API #22 talks more about the way to do this (and not using the hooks experimental way above?)
- Important to remember on what to do, focus on:
  - usability
  - user experience
  - developer ergonomics
