<<<<<<< HEAD
import { SORT_ALPHABETICAL_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING
=======
import {
  SORT_AZ,
  SORT_CARBON_HIGH,
  SORT_CARBON_LOW,
  SORT_WATER_HIGH,
  SORT_WATER_LOW,
  FILTER
>>>>>>> 73e8e2bede779c961864b1811b7e215e57e470cf
} from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
<<<<<<< HEAD
    case SORT_ALPHABETICAL_ASCENDING:
    case SORT_CARBON_OUTPUT_DESCENDING:
    case SORT_CARBON_OUTPUT_ASCENDING:
    case SORT_WATER_USAGE_DESCENDING:
    case SORT_WATER_USAGE_ASCENDING:
=======
    case SORT_AZ:
    case SORT_CARBON_HIGH:
    case SORT_CARBON_LOW:
    case SORT_WATER_HIGH:
    case SORT_WATER_LOW:
    case FILTER:
>>>>>>> 73e8e2bede779c961864b1811b7e215e57e470cf
      return action.type
    default:
      return state
  }
}
