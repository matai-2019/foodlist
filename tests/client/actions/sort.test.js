import { SORT_AZ, SORT_CARBON_HIGH, sortBy } from '../../../client/actions/sort'

describe('Tests for sort actions', () => {
  it('setSortType returns a given type SORT_AZ', () => {
    const action = sortBy(SORT_AZ)
    expect(action.type).toBe(SORT_AZ)
  })

  it('setSortType returns a given type SORT_CARBON_HIGH', () => {
    const action = sortBy(SORT_CARBON_HIGH)
    expect(action.type).toBe(SORT_CARBON_HIGH)
  })
})
