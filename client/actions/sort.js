export const SORT_AZ = 'SORT_AZ'
export const SORT_CARBON_HIGH = 'SORT_CARBON_HIGH'
export const SORT_CARBON_LOW = 'SORT_CARBON_LOW'
export const SORT_WATER_HIGH = 'SORT_WATER_HIGH'
export const SORT_WATER_LOW = 'SORT_WATER_LOW'
export const FILTER = 'FILTER'

export function sortBy (sortType) {
  return {
    type: sortType
  }
}
