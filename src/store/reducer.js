import { combineReducers } from 'redux'
import { reducer as commonReducer } from '../components/CommonWrapper/'
import { reducer as homeReducer } from '../pages/Home/'
import { reducer as detailReducer } from'../pages/Detail/'

export default combineReducers({
	common: commonReducer,
  home: homeReducer,
  detail: detailReducer
})