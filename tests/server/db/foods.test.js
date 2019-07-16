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
})

test('db.getFood returns a specific food', () => {
  const food = db.getFood(1, testDb)
  const expected = {
    id: 1,
    name: 'Lamb',
    category: 'Meat',
    carbonOutput: 20.85,
    waterUsage: 8763
  }
  return expect(food).resolves.toEqual(expected)
    .catch(err => expect(err).toBeNull())
})

test('db.deleteFood runs a successful delete', () => {
  return db.deleteFood(1, testDb)
    .then(wasDeleteSuccessful => {
      expect(wasDeleteSuccessful).toBeTruthy()
    })
})

test('db.editFood updates name, category, carbonOutput & waterUsage', () => {
  const food = {
    id: 1,
    name: 'Nice',
    categoryId: 4,
    carbonOutput: 9,
    waterUsage: 1000
  }

  return db.editFood(food, testDb)
    .then(res => {
      expect(res.name).toBe(food.name)
      expect(res.category).toBe('Fish')
      expect(res.carbonOutput).toBe(food.carbonOutput)
      expect(res.waterUsage).toBe(food.waterUsage)
    })
})

test('db.addFood should add food to db', () => {
  const food = {
    name: 'Mungo',
    category_id: 1,
    carbonOutput: 142,
    waterUsage: 69
  }

  return db.addFood(food, testDb)
    .then(foods => {
      const expected = foods[0]
      expect(expected).toBe(28)
    })
})

test('db.getFoods returns carbon output and water usage data', () => {
  return db.getFoods(testDb).then(food => {
    expect(food.length).toBe(27)
  })
})
