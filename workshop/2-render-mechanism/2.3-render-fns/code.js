import { observable, effect } from '../../1-reactivity/1.3-proxy/code.js'
import { h, mount, patch } from '../2.2-vdom-patch/code.js'

export { h, observable }

export function bootstrap(render, container) {
  let vdom
  effect(() => {
    if (!vdom) {
      const vdom = render()
      mount(vdom, container)
    } else {
      const oldVdom = vdom
      vdom = render()
      patch(oldVdom, vdom)
    }
  })
}
