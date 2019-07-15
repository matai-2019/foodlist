import { SORT_AZ } from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_AZ:
    case SORT_CARBON_HIGH:
      return action.type
    default:
      return state
  }
}
