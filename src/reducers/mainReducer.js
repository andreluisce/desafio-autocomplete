import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import fetchingSearchReducer from './fetchingSearchReducer'

const rootReducer = combineReducers({
  searchMedicine: searchReducer,
  fetchingSearch: fetchingSearchReducer
})

export default rootReducer
