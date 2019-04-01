import { h, mount } from './code.js'

it('should work', () => {
  const vdom = h('div', { id: 'foo' }, [
    h('span', null, ['hello']),
    h('span', null, ['world'])
  ])

  const container = document.createElement('div')
  mount(vdom, container)

  expect(container.children[0].id).toBe('foo')
  expect(container.children[0].innerHTML).toBe(`<span>hello</span><span>world</span>`)
})
