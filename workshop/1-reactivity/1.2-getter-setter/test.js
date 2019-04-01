import { observable, effect } from './code'

it('should work', () => {
  let result = null
  const state = observable({
    count: 1
  })

  effect(() => {
    result = state.count
  })
  expect(result).toBe(1)

  state.count++
  expect(result).toBe(2)
})
