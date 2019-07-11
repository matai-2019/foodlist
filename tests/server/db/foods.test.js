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

test('db.addFood should add food to db', () => {
  const food = {
    name: 'Mungo',
    category_id: 1,
    carbon_output: 142,
    water_usage: 69
  }

  return db.addFood(food, testDb)
    .then(foods => {
      const expected = foods[0]
      expect(expected).toBe(28)
    })
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
