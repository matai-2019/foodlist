import { SORT_AZ, SORT_CARBON_HIGH } from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_AZ:
      return action.type
    default:
      return state
  }
}
