import * as actionTypes from '../actions/action-types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.MEDICINE_ADDED:
      return [...state, action.payload]
    default:
      return state
  }
}
