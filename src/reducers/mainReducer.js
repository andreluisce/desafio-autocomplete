import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import fetchingSearchReducer from './fetchingSearchReducer'
import prescriptionListReducer from './prescriptionListReducer'

const rootReducer = combineReducers({
  searchMedicine: searchReducer,
  fetchingSearch: fetchingSearchReducer,
  prescriptionList: prescriptionListReducer
})

export default rootReducer
