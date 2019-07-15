import { addFoodError, editFoodError, ADD_FOOD_ERROR, EDIT_FOOD_ERROR } from '../../../client/actions/updateFoodErrors'

describe('updateFoodErrors actions', () => {
  it('AddFoodError returns object with error message', () => {
    const testErrorMsg = 'ERROR: BROKEN'
    const action = addFoodError(testErrorMsg)
    const expected = {
      type: ADD_FOOD_ERROR,
      message: 'ERROR: BROKEN'
    }
    expect(action).toEqual(expected)
  })
  it('editFoodError returns object with a new error message', () => {
    const testErrorMsg = 'ERROR: BROKEN AGAIN!'
    const action = editFoodError(testErrorMsg)
    const expected = {
      type: EDIT_FOOD_ERROR,
      message: 'ERROR: BROKEN AGAIN!'
    }
    expect(action).toEqual(expected)
  })
})
