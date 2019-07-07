import { GET_FOODS_PENDING,
  GET_FOODS_SUCCESS,
  GET_FOODS_ERROR } from './../actions/foods'

export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case GET_FOODS_PENDING:
      return {
        ...state,
        pending: true
      }

    case GET_FOODS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }

    case GET_FOODS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
