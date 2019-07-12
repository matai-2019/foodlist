import request from 'supertest'
import { Item } from 'semantic-ui-react'

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

test('POST adds a new food', () => {
  const newFood = {
    name: 'Mungo',
    category_id: 1,
    carbon_output: 142,
    water_usage: 69
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
