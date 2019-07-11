const env = require('./test-environment')
const db = require('../../../server/db/foods')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getFoods returns an array of 27 foods', () => {
  const foods = db.getFoods(testDb)
  return expect(foods).resolves.toHaveLength(27)

  // Alternative structure (https://jestjs.io/docs/en/asynchronous.html):
  // expect.assertions(1)
  // const expected = 20
  // return db.getFoods(testDb)
  //   .then(foods => {
  //     const actual = foods.length
  //     expect(actual).toBe(expected)
  //   })
})

test('db.getFood returns a specific food', () => {
  const food = db.getFood(1, testDb)
  const expected = {
    'id': 1,
    'name': 'Lamb',
    'category': 'Meat',
    'carbon_output': 20.85,
    'water_usage': 8763
  }
  return expect(food).resolves.toEqual(expected)
})
