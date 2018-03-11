import { combineReducers } from 'redux'
// import { reducer as commonReducer } from '../components/CommonWrapper/'
import commonReducer from '../components/CommonWrapper/reducer'

export default combineReducers({
	common: commonReducer
})