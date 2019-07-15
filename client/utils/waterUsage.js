import { SORT_WATER_HIGH, SORT_WATER_LOW, sortBy } from '../actions/sort'

export function waterUsage (e) {
  const waterUsage = e.target.value
  switch (waterUsage) {
    case SORT_WATER_HIGH:
    case SORT_WATER_LOW:
      this.props.dispatch(sortBy(waterUsage))
      break
    default:
      break
  }
}
