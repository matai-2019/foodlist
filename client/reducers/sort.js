import { SORT_AZ,
  SORT_CARBON_HIGH,
  SORT_CARBON_LOW } from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_AZ:
    case SORT_CARBON_HIGH:
    case SORT_CARBON_LOW:
      return action.type
    default:
      return state
  }
}
