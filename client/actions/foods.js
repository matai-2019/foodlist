import { getFoods as getFoodsAPI } from '../api/foods'

export const GET_FOODS_PENDING = 'GET_FOODS_PENDING'
export const GET_FOODS_SUCCESS = 'GET_FOODS_SUCCESS'
export const GET_FOODS_ERROR = 'GET_FOODS_ERROR'

export function getFoodsPending () {
  return {
    type: GET_FOODS_PENDING
  }
}

export function getFoodsSuccess (foods) {
  return {
    type: GET_FOODS_SUCCESS,
    foods
  }
}

export function getFoodsError (message) {
  return {
    type: GET_FOODS_ERROR,
    message
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodsPending())
    getFoodsAPI()
      .then(res => dispatch(getFoodsSuccess(res.body)))
      .catch(err => dispatch(getFoodsError(err.message)))
  }
}
