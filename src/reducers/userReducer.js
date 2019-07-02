import {
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from 'actions'

const initialUserState = {
  id: null,
  company_name: null,
  country: null,
  display_name: '',
  loading: false,
  error: null,
  msg: null,
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
      return { ...state, loading: true }

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        msg: action.payload,
      }

    case LOAD_USER_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }

    case UPDATE_USER_START:
      return { ...state, loading: true }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        msg: action.payload,
      }

    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, msg: action.payload }

    default:
      return state
  }
}

export default userReducer
