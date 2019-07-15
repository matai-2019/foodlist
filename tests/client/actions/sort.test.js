import { SORT_AZ,
  SORT_CARBON_HIGH,
  SORT_CARBON_LOW,
  SORT_WATER_HIGH,
  sortBy } from '../../../client/actions/sort'

describe('Tests for sort actions', () => {
  it('sortBy(SORT_AZ)  returns a given type SORT_AZ', () => {
    const action = sortBy(SORT_AZ)
    const expected = 'SORT_AZ'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_CARBON_HIGH) returns a given type SORT_CARBON_HIGH', () => {
    const action = sortBy(SORT_CARBON_HIGH)
    const expected = 'SORT_CARBON_HIGH'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_CARBON_LOW) returns a given type SORT_CARBON_HIGH', () => {
    const action = sortBy(SORT_CARBON_LOW)
    const expected = 'SORT_CARBON_LOW'
    expect(action.type).toBe(expected)
  })

  it('sortBy(SORT_WATER_HIGH) returns a given type SORT_CARBON_HIGH', () => {
    const action = sortBy(SORT_WATER_HIGH)
    const expected = 'SORT_WATER_HIGH'
    expect(action.type).toBe(expected)
  })
})
