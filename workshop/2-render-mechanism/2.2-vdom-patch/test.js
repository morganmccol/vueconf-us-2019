import { h, mount, patch } from './code.js'

it('should work', () => {
  function render(state) {
    return h('div', { id: 'foo' }, [
      h('span', null, [state.msg]),
      h('span', null, ['world'])
    ])
  }

  const vdom1 = render({
    msg: 'hello'
  })

  const container = document.createElement('div')
  mount(vdom1, container)
  expect(container.textContent).toBe('helloworld')

  const vdom2 = render({
    msg: 'bye'
  })
  patch(vdom1, vdom2)
  expect(container.textContent).toBe('byeworld')
})
