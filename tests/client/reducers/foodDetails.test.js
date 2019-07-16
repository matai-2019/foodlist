import { GET_FOOD_DETAILS_SUCCESS } from '../../../client/actions/foodDetails'

import foodDetailsReducer from '../../../client/reducers/foodDetails'

const mockDetails = {
  id: 1,
  name: 'Turkey',
  category: 'meat',
  carbonOutput: 500,
  waterUsage: 50
}

describe('jest', () => {
  it('jest is working', () => {
    expect(true).toBe(true)
  })
})

describe('foodDetailsReducer', () => {
  it('returns default state without case matches', () => {
    const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch' } }
    const actual = foodDetailsReducer(undefined, action)
    expect(actual).toStrictEqual({})
  })

  it('matches with GET_FOOD_DETAILS_SUCCESS', () => {
    const action = { type: GET_FOOD_DETAILS_SUCCESS, foodDetails: mockDetails }
    const actual = foodDetailsReducer(undefined, action)
    expect(actual).toBe(mockDetails)
  })
})
