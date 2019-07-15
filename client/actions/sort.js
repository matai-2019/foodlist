export const SORT_AZ = 'SORT_AZ'
export const SORT_CARBON_HIGH = 'SORT_CARBON_HIGH'

export function sortBy (sortType) {
  return {
    type: sortType
  }
}
