/*
const target = {
  count: 1
}

let realValue = target.count

Object.defineProperty(target, key, {
  get() {
    return realValue
  },
  set(newValue) {
    realValue = newValue
  },
  enumerable: true
})

target.count // 1
*/

export class Dep {
  // extract subscriber management logic
  // from the Observable class in 1.1

  constructor() {
    this.subscribers = new Set()
  }

  depend() {
    if (currentRunner) {
      this.subscribers.add(currentRunner)
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

let currentRunner

export function effect(runner) {
  currentRunner = runner
  runner()
  currentRunner = null
}

export function observable(obj) {
  // iterate through existing properties on obj
  // and convert them into get/set with
  // Object.defineProperty
  // each converted property should have a
  // corresponding Dep instance

  Object.keys(obj).forEach(key => {
    let realValue = obj[key]
    const dep = new Dep()

    Object.defineProperty(obj, key, {
      get() {
        // register dependency
        dep.depend()
        return realValue
      },
      set(value) {
        // trigger updates
        realValue = value
        dep.notify()
      }
    })
  })

  return obj
}
