import { deleteFood, addFood } from '../../client/api/__mocks__/api'

test('deleteFood returns Okay response', () => {
  const id = 1
  const expected = { Okay: true }
  const actual = deleteFood(id)
  return expect(actual).resolves.toStrictEqual(expected)
})

test('addFood returns Post ok response', () => {
  const food = {
    name: 'fruity fruit',
    other: 'ghsd'
  }
  const expected = { id: 1 }
  const actual = addFood(food)
  return expect(actual).resolves.toStrictEqual(expected)
})
