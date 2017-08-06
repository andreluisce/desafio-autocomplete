import * as actionTypes from '../actions/action-types'

const INITIAL_STATE = false

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_SEARCH:
      return true

    case actionTypes.RECEIVE_RESULTS:
      return false
    default:
      return state
  }
}
