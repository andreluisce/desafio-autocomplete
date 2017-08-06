import * as actions from './action-types'

export const changeTextareaValue = (value) => {
  return {
    type: actions.SEARCH_VALUE_CHANGED,
    payload: value.target.value
  }
}

export const setLoadingOn = () => {
  return {
    type: actions.REQUEST_SEARCH
  }
}

export const setLoadingOff = () => {
  return {
    type: actions.RECEIVE_RESULTS
  }
}
