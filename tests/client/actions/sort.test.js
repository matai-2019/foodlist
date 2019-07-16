import { SORT_ALPHABETICAL_ASCENDING,
  SORT_CARBON_OUTPUT_DESCENDING,
  SORT_CARBON_OUTPUT_ASCENDING,
  SORT_WATER_USAGE_DESCENDING,
  SORT_WATER_USAGE_ASCENDING,
  sortBy } from '../../../client/actions/sort'

describe('Tests for sort actions', () => {
  it('sortBy(SORT_ALPHABETICAL_ASCENDING)  returns a given type SORT_ALPHABETICAL_ASCENDING', () => {
    const action = sortBy(SORT_ALPHABETICAL_ASCENDING)
    const expected = 'SORT_ALPHABETICAL_ASCENDING'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_CARBON_OUTPUT_DESCENDING) returns a given type SORT_CARBON_OUTPUT_DESCENDING', () => {
    const action = sortBy(SORT_CARBON_OUTPUT_DESCENDING)
    const expected = 'SORT_CARBON_OUTPUT_DESCENDING'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_CARBON_OUTPUT_ASCENDING) returns a given type SORT_CARBON_OUTPUT_DESCENDING', () => {
    const action = sortBy(SORT_CARBON_OUTPUT_ASCENDING)
    const expected = 'SORT_CARBON_OUTPUT_ASCENDING'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_WATER_USAGE_DESCENDING) returns a given type SORT_CARBON_OUTPUT_DESCENDING', () => {
    const action = sortBy(SORT_WATER_USAGE_DESCENDING)
    const expected = 'SORT_WATER_USAGE_DESCENDING'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_WATER_USAGE_ASCENDING) returns a given type SORT_WATER_USAGE_ASCENDING', () => {
    const action = sortBy(SORT_WATER_USAGE_ASCENDING)
    const expected = 'SORT_WATER_USAGE_ASCENDING'
    expect(action.type).toBe(expected)
  })
})
