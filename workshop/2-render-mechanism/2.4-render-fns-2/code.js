export default {
  data () {
    return {
      ok: true,
      foo: 'hello',
      list: [1, 2, 3]
    }
  },
  render(h) {
    return h('div', [
      h('button', {
        on: {
          click: () => {
            this.ok = !this.ok
          }
        }
      }, 'toggle ok'),
      // <div v-if="ok"></div>
      this.ok ? h('div', 'yes') : null,

      h('button', {
        on: {
          click: () => {
            this.list.push(this.list.length + 1)
          }
        }
      }, 'push number'),
      // <ul><list v-for="i in list">{{ i }}</list></ul>
      h('ul', this.list.map(i => h('li', i))),

      // <input v-model="foo">
      // (simplified, does not cover all edge cases)
      h('span', this.foo),
      h('input', {
        domProps: {
          value: this.foo
        },
        on: {
          input: event => {
            this.foo = event.target.value
          }
        }
      })
    ])
  }
}
