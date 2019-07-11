import request from 'supertest'
import { Item } from 'semantic-ui-react'

jest.mock('../../../server/db/foods', () => ({
  getFoods: () => Promise.resolve([
    { id: 1, name: 'Lamb' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Broccoli' }
  ])
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

test('POST adds a new food', () => {
  const newFood = {
    name: 'Mungo',
    category_id: 1,
    carbon_output: 142,
    water_usage: 69
  }
  return request(server)
    .post('/api/v1/foods')
    .send(newFood)
    .then(res => {
      expect(res.body.id).toBe(28)
    })
})g
