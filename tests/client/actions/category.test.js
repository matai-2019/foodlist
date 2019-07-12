import {
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  getCategoryPending,
  getCategorySuccess,
  getCategoryError
} from '../../../client/actions/category'

describe('category actions', () => {
  it('getCategoryPending() works', () => {
    const action = getCategoryPending()
    expect(action.type).toBe(GET_CATEGORY_PENDING)
  })

  it('getCategorySuccess() returns Category', () => {
    const testCategory = 'Fruits'
    const action = getCategorySuccess(testCategory)
    expect(action.type).toBe(GET_CATEGORY_SUCCESS)
    expect(action.category).toMatch('Fruits')
  })

  it('getCategoryError() returns an error message', () => {
    const errorMessage = 'Cannot get category'
    const action = getCategoryError(errorMessage)
    expect(action.type).toBe(GET_CATEGORY_ERROR)
    expect(action.message).toMatch('Cannot get category')
  })
})
