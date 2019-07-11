import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_PENDING, GET_CATEGORIES_ERROR } from './../actions/categories'

export default function categoriesReducer (state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true
      }

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }

    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
