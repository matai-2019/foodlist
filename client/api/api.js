import request from 'superagent'

export function addFood(food) {
  return request.post('/api/v1/foods')
    .send(food)
}
