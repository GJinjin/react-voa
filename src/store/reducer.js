import { combineReducers } from 'redux'
import { reducer as commonReducer } from '../components/CommonWrapper/'

export default combineReducers({
	common: commonReducer
})