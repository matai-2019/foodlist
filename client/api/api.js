import request from 'superagent'

const foodsUrl = '/api/v1/foods'

export function addFood (food) {
  return request.post('/api/v1/foods')
    .send(food)
}

export function deleteFood (id) {
  return request
    .delete(`${foodsUrl}/${id}`)
}
