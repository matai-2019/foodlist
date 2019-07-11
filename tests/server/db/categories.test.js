const env = require('./test-environment')
const db = require('../../../server/db/categories')

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
