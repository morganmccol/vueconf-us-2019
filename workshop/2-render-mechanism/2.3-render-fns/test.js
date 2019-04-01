import { bootstrap, h, observable } from './code.js'

it('should work', () => {
  const state = window.state = observable({
    msg: 'hello'
  })

  function component() {
    return h('div', { id: 'foo' }, [
      h('span', null, [state.msg]),
      h('span', null, ['world'])
    ])
  }

  const container = document.createElement('div')
  bootstrap(component, container)
  expect(container.textContent).toBe('helloworld')

  state.msg = 'changed'
  expect(container.textContent).toBe('changedworld')
})
