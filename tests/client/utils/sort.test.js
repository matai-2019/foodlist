import sortAZ from '../../../client/utils/sort'

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
