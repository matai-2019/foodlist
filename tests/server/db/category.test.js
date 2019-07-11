const env = require('./test-environment')
const db = require('../../../server/db/category')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getCategories returns an array of 6 categories', () => {
  const categories = db.getCategories(testDb)
  return expect(categories).resolves.toHaveLength(6)
})

test('db.getFoodsByCategory returns all of given category', () => {
  const food = db.getFoodsByCategory('Meat', testDb)
  return expect(food).resolves.toHaveLength(5)
})
