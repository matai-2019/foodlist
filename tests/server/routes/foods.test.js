import request from 'supertest'

jest.mock('../../../server/db/foods', () => ({
  getFoods: () => Promise.resolve([
    { id: 1, name: 'Lamb' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Broccoli' }
  ]),
  getFood: () => Promise.resolve([
    { id: 1, name: 'Lamb' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Broccoli' }
  ]),
  deleteFood: (id) => Promise.resolve(1)
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

test('DELETE /:id deletes a specific food', () => {
  return request(server)
    .delete('/api/v1/foods/1')
    .then(res => {
      expect(res.status).toBe(200)
    })
    .catch(err => expect(err).toBeNull())
})
