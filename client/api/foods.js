import request from 'superagent'

const foodsUrl = '/api/v1/foods'

export function addFood (food) {
  return request.post(foodsUrl)
    .send(food)
}

export function deleteFood (id) {
  return request
    .delete(`${foodsUrl}/${id}`)
}

export function editFood (food) {
  return request.put(`${foodsUrl}/${food.id}`)
    .send(food)
}

export function getFood (id) {
  return request.get(`${foodsUrl}/${id}`)
}

export function getFoods () {
  return request.get(foodsUrl)
}
