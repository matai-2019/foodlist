import { deleteFood } from '../../client/api/__mocks__/api'

test('deleteFood returns Okay response', () => {
  const id = 1
  const expected = { Okay: true }
  const actual = deleteFood(id)
  return expect(actual).resolves.toStrictEqual(expected)
})
