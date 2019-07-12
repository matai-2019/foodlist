import { combineReducers } from 'redux'

import foods from './foods'
import info from './info'
import categories from './categories'
import foodDetails from './foodDetails'

export default combineReducers({
  foods,
  categories,
  foodDetails,
  info
})
