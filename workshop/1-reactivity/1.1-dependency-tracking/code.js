let currentRunner

export class Observable {
  constructor(value) {
    this.value = value
    this.subscribers = new Set()
  }

  get() {
    // register the current runner as a subscriber
    if (currentRunner) {
      this.subscribers.add(currentRunner)
    }
    return this.value
  }

  set(newValue) {
    this.value = newValue
    // trigger all subs to run again
    this.subscribers.forEach(sub => sub())
  }
}

export function effect(runner) {
  currentRunner = runner
  runner()
  currentRunner = null
}
