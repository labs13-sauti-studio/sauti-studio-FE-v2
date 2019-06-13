import { axiosInstance } from 'helpers'

export const LOAD_USER_START = 'LOAD_USER_START'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const loadUserInfo = () => dispatch => {
  dispatch({ type: LOAD_USER_START })
  return axiosInstance
    .get('/profile')
    .then(({ data: user }) =>
      dispatch({ type: LOAD_USER_SUCCESS, payload: user })
    )
    .catch(() =>
      dispatch({
        type: LOAD_USER_FAILURE,
        payload: 'Problem fetching user',
      })
    )
}

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const toggleSidebar = bool => dispatch =>
  dispatch({ type: TOGGLE_SIDEBAR, payload: bool })

export const login = () => dispatch => {
  dispatch({ type: TOGGLE_SIDEBAR })
}
