export const ADD_FOOD_ERROR = 'ADD_FOOD_ERROR'
export const EDIT_FOOD_ERROR = 'EDIT_FOOD_ERROR'
export const DELETE_FOOD_ERROR = 'DELETE_FOOD_ERROR'

export function addFoodError (message) {
  return {
    type: ADD_FOOD_ERROR,
    message
  }
}

export function editFoodError (message) {
  return {
    type: EDIT_FOOD_ERROR,
    message
  }
}

export function deleteFoodError (message) {
  return {
    type: DELETE_FOOD_ERROR,
    message
  }
}
