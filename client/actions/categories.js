import request from 'superagent'

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'

export function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategoriesError (message) {
  return {
    type: GET_CATEGORIES_ERROR,
    message
  }
}

export function getCategories () {
  return dispatch => {
    dispatch(getCategoriesPending())

    request.get('/api/v1/categories')
      .then(res => dispatch(getCategoriesSuccess(res.body)))
      .catch(err => dispatch(getCategoriesError(err.message)))
  }
}
