import { sortAZ, sortHighLowWater, sortLowHighWater } from '../../../client/utils/sort'

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
    { id: 4, name: 'carrot', waterUsage: 30 },
    { id: 2, name: 'apple', waterUsage: 2400 },
    { id: 1, name: 'orange', waterUsage: 3000 },
    { id: 3, name: 'banana', waterUsage: 5530 }
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
