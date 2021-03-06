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
  deleteFood: (id) => Promise.resolve(1),

  getFoodsByCategory: (category) => Promise.resolve([
    {
      id: 1,
      name: 'Turkey',
      category: category,
      carbonOutput: 403,
      waterUsage: 52
    },
    {
      id: 1,
      name: 'Not',
      category: category,
      carbonOutput: 403,
      waterUsage: 52
    },
    {
      id: 1,
      name: 'Turkey',
      category: 'Not',
      carbonOutput: 403,
      waterUsage: 52
    }
  ]),
  editFood: (food) => Promise.resolve(
    {
      id: food.id,
      name: food.name,
      category: 'Fish',
      carbonOutput: food.carbonOutput,
      waterUsage: food.waterUsage
    }
  ),
  addFood: () => Promise.resolve([4])
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
  const test = { id: 1, name: newFood, carbonOutput: newCarbon, waterUsage: newWater }

  return request(server)
    .put('/api/v1/foods/1')
    .send(test)
    .expect(200)
    .then(res => {
      expect(res.body.name).toBe(newFood)
      expect(res.body.carbonOutput).toBe(newCarbon)
      expect(res.body.waterUsage).toBe(newWater)
    })
})

test('POST adds a new food', () => {
  const newFood = {
    name: 'Mungo',
    category_id: 1,
    carbonOutput: 142,
    waterUsage: 69
  }
  return request(server)
    .post('/api/v1/foods')
    .expect(201)
    .send(newFood)
    .then(res => {
      expect(res.body.id).toBe(4)
    })
})

test('DELETE /:id deletes a specific food', () => {
  return request(server)
    .delete('/api/v1/foods/1')
    .then(res => {
      expect(res.status).toBe(200)
    })
    .catch(err => expect(err).toBeNull())
})
