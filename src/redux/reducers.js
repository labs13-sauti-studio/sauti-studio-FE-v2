import { combineReducers } from 'redux'
import { axiosInstance } from '../helpers'

const initialState = {
  loggingIn: false,
  errorMsg: '',
  successMsg: '',
}

const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'
const LOGGED_IN = 'LOGGED_IN'
const LOGGED_OUT = 'LOGGED_OUT'

export const login = () => dispatch => {
  dispatch({ type: LOGIN_START })
  return console.log('login')
}

export const logout = () => dispatch => {
  dispatch({ type: LOGGED_OUT })
  return axiosInstance.get('/logout')
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loggingIn: true }

    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        errorMsg: '',
        successMsg: action.payload,
      }

    case LOGIN_FAILURE:
      return { ...state, errorMsg: action.payload, loggingIn: false }

    default:
      return state
  }
}

const authCheck = () =>
  axiosInstance.get('/users').then(res => res.status !== 400)

const initialAuthState = {
  loggedIn: authCheck(),
}

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, loggedIn: true }

    case LOGGED_OUT:
      return { ...state, loggedIn: false }

    default:
      return state
  }
}

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
})
