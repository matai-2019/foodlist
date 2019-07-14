import { GET_CATEGORY_SUCCESS } from '..//../../client/actions/category'
import { GET_CATEGORIES_SUCCESS } from '..//../../client/actions/categories'
import category from '../../../client/reducers/foods'

describe('jest', () => {
  it('jest is working', () => {
    expect(true).toBe(true)
  })
})

describe('categoryReducer', () => {
  it('returns default state without case matches', () => {
    const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch'}}
    const actual = categoryReducer(undefined, action)
    expect(actual).toStrictEquals({})
  })

  it('matches with GET_CATEGORY_SUCCESS', () => {
    const action = { type: GET_CATEGORY_SUCCESS, categoryDetails: }
  })
})
