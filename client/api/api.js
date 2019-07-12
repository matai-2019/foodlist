import request from 'superagent'

export function addFood (food) {
  return request.post('/api/v1/foods')
    .send(food)
}

export function editFood (food) {
  return request.put(`/api/v1/foods/${food.id}`)
    .send(food)
}
