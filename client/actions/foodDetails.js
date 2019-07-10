import request from 'superagent'

export const GET_FOOD_DETAILS_PENDING = 'GET_FOOD_DETAILS_PENDING'
export const GET_FOOD_DETAILS_SUCCESS = 'GET_FOOD_DETAILS_SUCCESS'
export const GET_FOOD_DETAILS_ERROR = 'GET_FOOD_DETAILS_ERROR'

export function getFoodDetailsPending () {
  return {
    type: GET_FOOD_DETAILS_PENDING
  }
}

export function getFoodDetailsSuccess (foods) {
  return {
    type: GET_FOOD_DETAILS_SUCCESS,
    foods
  }
}

export function getFoodDetailsError (message) {
  return {
    type: GET_FOOD_DETAILS_ERROR,
    message
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodDetailsPending())

    request.get('/api/v1/getfoods/:id')
      .then(res => dispatch(getFoodDetailsSuccess(res.body)))
      .catch(err => dispatch(getFoodDetailsError(err.message)))
  }
}
