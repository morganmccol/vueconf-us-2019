import Vue from '../../node_modules/vue/dist/vue.js'
import Component from './code.js'

it('should work', async () => {
  const container = document.createElement('div')

  const app = new Vue(Component).$mount(container)

  expect(app.$el.textContent).toMatch(`yes`)
  expect(app.$el.querySelectorAll('li').length).toBe(3)
  expect(app.$el.querySelector('span').textContent).toBe(`hello`)

  app.ok = false
  app.list.push(4)
  app.$el.querySelector('input').value = 'changed'
  app.$el.querySelector('input').dispatchEvent(new CustomEvent('input'))

  await Vue.nextTick()

  expect(app.$el.textContent).not.toMatch(`yes`)
  expect(app.$el.querySelectorAll('li').length).toBe(4)
  expect(app.$el.querySelector('span').textContent).toBe(`changed`)
})
