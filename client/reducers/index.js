import { combineReducers } from 'redux'

import foods from './foods'
import info from './info'
import foodDetails from './foodDetails'

export default combineReducers({
  foods,
  info,
  foodDetails
})
