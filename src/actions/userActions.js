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

export const SET_UPDATED_USER = 'SET_UPDATED_USER'

export const setUpdatedUser = info => dispatch => {
  dispatch({ type: SET_UPDATED_USER, payload: info })
}

export const UPDATE_USER_START = 'UPDATE_USER_START'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const updateUserInfo = info => dispatch => {
  dispatch({ type: UPDATE_USER_START })

  return axiosInstance
    .put('/profile', info)
    .then(({ data: { user } }) => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: user[0],
        msg: 'Success',
      })
    })
    .catch(err =>
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: err.message,
      })
    )
}
