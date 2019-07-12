import {
  getCategoriesSuccess,
  getCategoriesPending,
  getCategoriesError
} from '../../../client/actions/categories'
import {
  getFoodsSuccess,
  getFoodsPending,
  getFoodsError
} from '../../../client/actions/foods'
import infoReducer from '../../../client/reducers/'

describe('reducer', () => {
  it('getCategoriesSuccess', () => {
    const testState = [
      { id: 1, name: 'Fruits' },
      { id: 2, name: 'Vegetables' },
      { id: 3, name: 'Grains, beans, and legumes' }
    ]
    const currentState = {
      categories: []
    }
    const action = getCategoriesSuccess(testState)
    const newState = infoReducer(currentState, action)
    expect(newState.categories).toBe(testState)
  })

  it('getCategoriesPending', () => {
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
    const action = getCategoriesPending()
    const newState = infoReducer(currentState, action)
    expect(newState.info.pending).toBe(expected.info.pending)
    expect(newState.info.error).toBe(expected.info.error)
  })

  it('getCategoriesError', () => {
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
    const action = getCategoriesError('ERR: derp')
    const newState = infoReducer(currentState, action)
    expect(newState.info.error).toBe(expected.info.error)
  })

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
