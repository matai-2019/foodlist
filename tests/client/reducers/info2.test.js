import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_PENDING,
  GET_CATEGORIES_ERROR } from '../../../client/actions/categories'
import {
  getFoodsSuccess,
  getFoodsPending,
  getFoodsError } from '../../../client/actions/foods'
import infoReducer from '../../../client/reducers/'

describe('info reducer for getCategory actions', () => {
  it(GET_CATEGORIES_SUCCESS, () => {
    const testState = [
      { id: 1, name: 'Fruits' },
      { id: 2, name: 'Vegetables' },
      { id: 3, name: 'Grains, beans, and legumes' }
    ]
    const currentState = {
      categories: []
    }
    const action = {
      type: GET_CATEGORIES_SUCCESS,
      categories: testState
    }
    const newState = infoReducer(currentState, action)
    expect(newState.categories).toBe(testState)
  })

  it(GET_CATEGORIES_PENDING, () => {
    const expected = {
      info: {
        pending: true,
        error: 'ERR: derp'
      }
    }
    const currentState = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }
    const action = { type: GET_CATEGORIES_PENDING }
    const newState = infoReducer(currentState, action)
    expect(newState.info.pending).toBe(expected.info.pending)
    expect(newState.info.error).toBe(expected.info.error)
  })

  it(GET_CATEGORIES_ERROR, () => {
    const expected = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }
    const currentState = {
      info: {
        pending: false,
        error: ''
      }
    }
    const action = {
      type: GET_CATEGORIES_ERROR,
      message: 'ERR: derp'
    }
    const newState = infoReducer(currentState, action)
    expect(newState.info.error).toBe(expected.info.error)
  })
})

describe('info reducer for getFood actions', () => {
  it('getFoodsSuccess', () => {
    const expected = [
      { id: 1, name: 'Lamb', category_id: 5 },
      { id: 2, name: 'Beef', category_id: 5 },
      { id: 3, name: 'Turkey', category_id: 5 }
    ]
    const currentState = {
      foods: []
    }
    const action = getFoodsSuccess(expected)
    const newState = infoReducer(currentState, action)
    expect(newState.foods).toBe(expected)
  })

  it('getFoodsPending', () => {
    const expected = {
      info: {
        pending: true,
        error: 'ERR: derp'
      }
    }
    const currentState = {
      info: {
        pending: false,
        error: 'ERR: derp'
      }
    }
    const action = getFoodsPending()
    const newState = infoReducer(currentState, action)
    expect(newState.info.pending).toBe(expected.info.pending)
    expect(newState.info.error).toBe(expected.info.error)
  })

  it('getFoodsError', () => {
    const expected = {
      info: {
        pending: true,
        error: 'ERR: derp'
      }
    }
    const currentState = {
      info: {
        pending: false,
        error: ''
      }
    }
    const action = getFoodsError('ERR: derp')
    const newState = infoReducer(currentState, action)
    expect(newState.info.error).toBe(expected.info.error)
  })
})
