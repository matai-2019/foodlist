import sortHighLowWater from '../../client/utils/sort-temp'

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
