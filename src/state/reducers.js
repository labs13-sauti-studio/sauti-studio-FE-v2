import { combineReducers } from 'redux'

import {
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from 'src/state/action'

const initialUserState = {
  user: {},
  loading: false,
  error: null,
  msg: null,
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
      return { ...state, loading: true }

    case LOAD_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, msg: 'Success' }

    case LOAD_USER_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }

    default:
      return state
  }
}

export default combineReducers({ user: userReducer })
