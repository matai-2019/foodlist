import { sortAZ, sortHighLowWater, sortLowHighWater, sortHighLowCarbon, searchFood } from '../../../client/utils/sort'

test('sortAZ sorts an array of objects alphabetically', () => {
  const foods = [
    { id: 1, name: 'orange' },
    { id: 2, name: 'mango' },
    { id: 3, name: 'banana' },
    { id: 4, name: 'apple' }
  ]

  const expected = [
    { id: 4, name: 'apple' },
    { id: 3, name: 'banana' },
    { id: 2, name: 'mango' },
    { id: 1, name: 'orange' }
  ]

  const actual = sortAZ(foods)

  expect(actual).toStrictEqual(expected)
})

test('sortHighLowWater sorts an array of objects from high to low water usage', () => {
  const foods = [
    { id: 1, name: 'orange', waterUsage: 3000 },
    { id: 2, name: 'apple', waterUsage: 2400 },
    { id: 3, name: 'banana', waterUsage: 5530 },
    { id: 4, name: 'carrot', waterUsage: 30 }
  ]

  const expected = [
    { id: 3, name: 'banana', waterUsage: 5530 },
    { id: 1, name: 'orange', waterUsage: 3000 },
    { id: 2, name: 'apple', waterUsage: 2400 },
    { id: 4, name: 'carrot', waterUsage: 30 }
  ]

  const actual = sortHighLowWater(foods)

  expect(actual).toStrictEqual(expected)
})

test('sortLowHighWater sorts an array of objects from low to high water usage', () => {
  const foods = [
    { id: 1, name: 'orange', waterUsage: 3000 },
    { id: 2, name: 'apple', waterUsage: 2400 },
    { id: 3, name: 'banana', waterUsage: 5530 },
    { id: 4, name: 'carrot', waterUsage: 30 }
  ]

  const expected = [
    { id: 3, name: 'banana', waterUsage: 5530 },
    { id: 1, name: 'orange', waterUsage: 3000 },
    { id: 2, name: 'apple', waterUsage: 2400 },
    { id: 4, name: 'carrot', waterUsage: 30 }
  ]

  const actual = sortLowHighWater(foods)

  expect(actual).toStrictEqual(expected)
})

test('sortHighLowCarbon sorts an array of objects from high to low water usage', () => {
  const foods = [
    { id: 2, food_id: 2, carbon_output: 13.78 },
    { id: 1, food_id: 1, carbon_output: 20.85 },
    { id: 3, food_id: 3, carbon_output: 5.83 }
  ]

  const expected = [
    { id: 1, food_id: 1, carbon_output: 20.85 },
    { id: 2, food_id: 2, carbon_output: 13.78 },
    { id: 3, food_id: 3, carbon_output: 5.83 }
  ]

  const actual = sortHighLowCarbon(foods)

  expect(actual).toStrictEqual(expected)
})

test('searchFood filters an array of objects by searchTerm', () => {
  const searchTerm = 'apple'
  const foods = [
    { id: 1, name: 'orange' },
    { id: 2, name: 'mango' },
    { id: 3, name: 'banana' },
    { id: 4, name: 'apple' }
  ]

  const expected = [
    { id: 4, name: 'apple' }
  ]

  const actual = searchFood(foods, searchTerm)

  expect(actual).toStrictEqual(expected)
})
