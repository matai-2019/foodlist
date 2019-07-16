import request from 'superagent'

export const GET_CATEGORY_PENDING = 'GET_CATEGORY_PENDING'
export const GET_CATEGORY_ERROR = 'GET_CATEGORY_ERROR'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'

export function getCategoryPending () {
  return {
    type: GET_CATEGORY_PENDING
  }
}

export function getCategorySuccess (category) {
  return {
    type: GET_CATEGORY_SUCCESS,
    category
  }
}

export function getCategoryError (message) {
  return {
    type: GET_CATEGORY_ERROR,
    message
  }
}

export function getCategory (name) {
  return dispatch => {
    dispatch(getCategoryPending())
    request.get(`/api/v1/categories/${name}`)
      .then(res => dispatch(getCategorySuccess(res.body)))
      .catch(err => dispatch(getCategoryError(err.message)))
  }
}
