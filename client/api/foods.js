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