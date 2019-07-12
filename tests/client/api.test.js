import { deleteFood, addFood, editFood } from '../../client/api/__mocks__/api'

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

test('editFood returns edited food object as response', () => {
  const food = {
    id: 5,
    name: 'white',
    category: 'pork',
    carbon_output: 5.26,
    water_usage: null
  }
  const expected = {
    id: 5,
    name: 'black',
    category: 'Fish',
    carbon_output: 5.26,
    water_usage: null
  }
  const actual = editFood(food)
  return expect(actual).resolves.toStrictEqual(expected)
})
