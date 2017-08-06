import * as actionTypes from '../actions/action-types'

const INITIAL_STATE = {
  searchValue: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_VALUE_CHANGED:
      return {
        ...state, searchValue: action.payload
      }

    default:
      return state
  }
}
