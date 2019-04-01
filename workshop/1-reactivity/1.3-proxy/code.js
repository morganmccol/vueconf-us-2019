/*
const object = { count: 0 }

const proxy = new Proxy(object, {
  get(target, key) {
    // depend
    return target[key]
  },
  set(target, key, value) {
    // notify
    target[key] = value
    return true
  }
})

proxy === object // false
*/

import { Dep, effect } from '../1.2-getter-setter/code.js'

export { effect }

const depStorage = new WeakMap()

const handlers = {
  get(target, key) {
    const dep = getDep(target, key)
    dep.depend()
    return target[key]
  },
  set(target, key, value) {
    target[key] = value
    const dep = getDep(target, key)
    dep.notify()
    return true
  }
}

const depsMap = new WeakMap()
// depsMap -[target]-> deps -[key]-> Dep instance

function getDep(target, key) {
  if (!depsMap.has(target)) {
    depsMap.set(target, {})
  }

  const deps = depsMap.get(target)
  if (!deps[key]) {
    deps[key] = new Dep()
  }

  return deps[key]
}

export function observable(obj) {
  return new Proxy(obj, handlers)
}
