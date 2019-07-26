import request from 'superagent'

const categoriesUrl = '/api/v1/categories'

export function getCategories () {
  return request.get(categoriesUrl)
}

export function getCategory (name) {
  return request.get(`${categoriesUrl}/${name}`)
}
