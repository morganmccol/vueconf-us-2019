import { Observable, effect } from './code'

it('should work', () => {
  let result = null
  const count = new Observable(1)

  effect(() => {
    result = count.get()
  })
  expect(result).toBe(1)

  count.set(2)
  expect(result).toBe(2)
})
