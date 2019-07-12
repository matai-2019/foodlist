import request from 'supertest'

jest.mock('../../../server/db/foods', () => ({
  getFoods: () => Promise.resolve([
    { id: 1, name: 'Lamb' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Broccoli' }
  ]),
  getFood: (id) => Promise.resolve([
    { id: id, name: 'Lamb' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Broccoli' }
  ]),
  getFoodsByCategory: (category) => Promise.resolve([
    {
      id: 1,
      name: 'Turkey',
      category: category,
      carbon_output: 403,
      water_usage: 52
    },
    {
      id: 1,
      name: 'Not',
      category: category,
      carbon_output: 403,
      water_usage: 52
    },
    {
      id: 1,
      name: 'Turkey',
      category: 'Not',
      carbon_output: 403,
      water_usage: 52
    }
  ]),
  editFood: (food) => Promise.resolve(
    {
      id: food.id,
      name: food.name,
      category: 'Fish',
      carbon_output: food.carbon_output,
      water_usage: food.water_usage
    }
  )
}))

// This line must go after mocking out the database
const server = require('../../../server/server')

test('GET /foods returns all of the foods', () => {
  return request(server)
    .get('/api/v1/foods')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
})

test('GET /food returns specific food', () => {
  return request(server)
    .get('/api/v1/foods/1')
    .expect(200)
    .then(res => {
      const actual = res.text
      expect(actual).toMatch('Lamb')
    })
    .catch(err => expect(err).toBeNull())
})

test('PUT / add new food', () => {
  const newFood = 'hi-chew'
  const newCarbon = 900
  const newWater = 0
  const test = { id: 1, name: newFood, carbon_output: newCarbon, water_usage: newWater }

  return request(server)
    .put('/api/v1/foods/1')
    .send(test)
    .expect(200)
    .then(res => {
      expect(res.body.name).toBe(newFood)
      expect(res.body.carbon_output).toBe(newCarbon)
      expect(res.body.water_usage).toBe(newWater)
    })
})
