import request from 'supertest'

jest.mock('../../../server/db/category', () => ({
  getCategories: () => Promise.resolve([
    { id: 1, name: 'Fruits' },
    { id: 2, name: 'Vegetables' },
    { id: 3, name: 'Grains, beans, and legumes' },
    { id: 4, name: 'Fish' },
    { id: 5, name: 'Meat' },
    { id: 6, name: 'Animal byproducts' }
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
      id: 2,
      name: 'Not',
      category: category,
      carbon_output: 403,
      water_usage: 52
    },
    {
      id: 3,
      name: 'Turkey',
      category: 'Not',
      carbon_output: 403,
      water_usage: 52
    }
  ])
}))

// This line must go after mocking out the database
const server = require('../../../server/server')

test('GET /foods by category route capitalises category', () => {
  return request(server)
    .get(`/api/v1/category/meat`)
    .expect(200)
    .then(res => {
      expect(res.body[0].category).toBe('Meat')
    })
    .catch(err => expect(err).toBeNull())
})

test('GET /foods by category ', () => {
  return request(server)
    .get(`/api/v1/category/meat`)
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
    })
    .catch(err => expect(err).toBeNull())
})

test('GET /categories returns all of the categories', () => {
  return request(server)
    .get(`/api/v1/category`)
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(6)
    })
    .catch(err => expect(err).toBeNull())
})
