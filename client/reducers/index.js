import { combineReducers } from 'redux'

import foods from './foods'
import categories from './categories'
import foodDetails from './foodDetails'
import sort from './sort'
import info from './info'

export default combineReducers({
  foods,
  categories,
  foodDetails,
  sort,
  info
})
