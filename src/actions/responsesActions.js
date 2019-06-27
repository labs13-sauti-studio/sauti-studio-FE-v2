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
    .then(res => dispatch({ type: FETCHED_FLAT_ARRAY, payload: res.data }))
  axiosInstance
    .get(`/responses/${workflow}?tree=true`)
    .then(res => dispatch({ type: FETCH_RESPONSES_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: FETCH_RESPONSES_FAILURE,
        msg: err.message,
      })
    )
}

export const REORDER_RESPONSES = 'REORDER_RESPONSES'
export const onSortEnd = ({ step, oldIndex, newIndex }) => dispatch => {
  dispatch({
    type: REORDER_RESPONSES,
    payload: arrayMove(store.getState().responses.unSaved, oldIndex, newIndex),
  })
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
