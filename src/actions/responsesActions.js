import { axiosInstance } from 'helpers'
import arrayMove from 'array-move'
import store from 'src/store'

export const FETCH_RESPONSES_START = 'FETCH_RESPONSES_START'
export const FETCH_RESPONSES_SUCCESS = 'FETCH_RESPONSES_SUCCESS'
export const FETCH_RESPONSES_FAILURE = 'FETCH_RESPONSES_FAILURE'
export const FETCHED_FLAT_ARRAY = 'FETCHED_FLAT_ARRAY'

export const fetchResponses = workflow => dispatch => {
  dispatch({ type: FETCH_RESPONSES_START })

  axiosInstance
    .get(`/responses/${workflow}`)
    .then(res => dispatch({ type: FETCH_RESPONSES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_RESPONSES_FAILURE,
        msg: err.message,
      })
    )
}

export const REORDER_RESPONSES = 'REORDER_RESPONSES'
export const onSortEnd = array => dispatch => {
  dispatch({ type: REORDER_RESPONSES, payload: array })
}

export const UPDATE_ARRAY = 'UPDATE_ARRAY'
export const updateArray = array => dispatch => {
  dispatch({ type: UPDATE_ARRAY, payload: array })
}

export const ADD_NEW_RESPONSE = 'ADD_NEW_RESPONSE'
export const addRes = res => dispatch =>
  dispatch({ type: ADD_NEW_RESPONSE, payload: res })

export const CLICKED_RESPONSE = 'CLICKED_RESPONSE'
export const clickedResponse = id => dispatch => {
  let activeItem = id
  if (store.getState().responses.activeItem === id) activeItem = null
  dispatch({
    type: CLICKED_RESPONSE,
    payload: activeItem,
  })
}

export const TOGGLE_RES_MODAL = 'TOGGLE_RES_MODAL'

export const toggleResModal = bool => dispatch => {
  dispatch({ type: TOGGLE_RES_MODAL, payload: bool })
}

export const TOGGLE_DELETE_MODAL = 'TOGGLE_DELETE_MODAL'

export const toggleDeleteModal = bool => dispatch =>
  dispatch({ type: TOGGLE_DELETE_MODAL, payload: bool })

export const SET_ACTIVE_RES = 'SET_ACTIVE_RES'
export const setActiveRes = response => dispatch =>
  dispatch({ type: SET_ACTIVE_RES, payload: response })

export const DELETE_RES_START = 'DELETE_RES_START'
export const DELETE_RES_SUCCESS = 'DELETE_RES_SUCCESS'
export const DELETE_RES_FAILURE = 'DELETE_RES_FAILURE'

export const deleteResponse = () => dispatch => {
  dispatch({ type: DELETE_RES_START })

  axiosInstance
    .delete(`/responses/${store.getState().responses.modal.id}`)
    .then(res => {
      dispatch({ type: DELETE_RES_SUCCESS, payload: res.data })
    })
    .catch(err =>
      dispatch({
        type: DELETE_RES_FAILURE,
        msg: err.message,
      })
    )
}
