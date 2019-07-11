import {
  getFoodDetailsPending,
  getFoodDetailsSuccess,
  getFoodDetailsError,
  getFood,
  GET_FOOD_DETAILS_PENDING,
  GET_FOOD_DETAILS_SUCCESS,
  GET_FOOD_DETAILS_ERROR } from '../../../client/actions/foodDetails'

describe('foodDetails actions', () => {
  it(`${GET_FOOD_DETAILS_PENDING} action includes food name`, () => {
    const testFoodName = 'test food name'
    const action = getFoodDetailsPending(testFoodName)
    expect(action.type).toBe(GET_FOOD_DETAILS_PENDING)
  })

  it(`${GET_FOOD_DETAILS_SUCCESS} action includes foods`, () => {
    const testFoods = 'test foods'
    const action = getFoodDetailsSuccess(testFoods)
    expect(action.type).toBe(GET_FOOD_DETAILS_SUCCESS)
  })

  it(`${GET_FOOD_DETAILS_ERROR} action includes error`, () => {
    const testError = 'test error'
    const action = getFoodDetailsError(testError)
    expect(action.type).toBe(GET_FOOD_DETAILS_ERROR)
  })

  it('getFood action returns a function', () => {
    const expected = 'function'
    const actual = typeof getFood
    expect(actual).toBe(expected)
  })
})

// test('dispatch testing', () => {
//   const dispatch = jest.fn()
//   // const actionCall = ('')
//   }
//   return getFoods(true, getFoodDetailsPending)(dispatch)
//     .then(() => {
//       expect(dispatch.mock.calls[0][0].type).toBe(expectedAction)
//       expect(dispatch.mock.calls[1][0].type).toBe(error.message)
//     })
// })

// jest.mock('superagent', () => ({ getFoods: jest.fn() }))
// describe('getFoods Action', () => {
//     it('gets data-foods from API', () => {
//     const dispatch = jest.fn()
//     getFoods.mockImplementation(() => ({end: cb => cb(null, result)}))
//         expect(store.dispatch(getFoods())).toEqual(expectedAction)
//         })
//         it('if it fails-error', () => {
//           getFoods.mockImplementation(() => ({end: cb => cb({status: 'testing-suck'}, null)}))
//           expect(store.dispatch(getFoods())).toThrow()
// })

// Arrange

// Mock out Superagent
// const dispatch = jest.function()

// Act
// const function = getFoods
// Needs to have a dispatch function

// Assert
// expect(dispatch).wasCalled
// expect(dispactch.call[0][0]).toEqual(action)

// test('<FoodList /> contains <Food />', () => {
//   const mockStore = configureStore()({ foods: [{ name: 'carrot', id: 2 }], info: { pending: false, error: null } })
//   const wrapper = render(
//     <Provider store={mockStore}>
//       <FoodList />
//     </Provider>
//   )
//   expect(wrapper.text()).toMatch('carrot')
// })

// describe('async actions', () => {
//   afterEach(() => {
//     getFoods.restore()
//   })
//   it('creates stuff', () => {
//     getFoods.getOnce('/api/v1/foods', {
//       body: { '/api/v1/foods' ['do it']}
//     })
//     const expectedAction = [
//       {type: type.getFoodsSuccess },]
//     const store = middlewares({ '/api/v1/' foods: [] ),

//     expect(store.getAction).toBe('GET_FOOD_DETAILS_ERROR')

//   })
// })
