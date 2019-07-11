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
