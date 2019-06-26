import { axiosInstance } from 'helpers'
import arrayMove from 'array-move'
import store from 'src/store'

export const FETCH_RESPONSES_START = 'FETCH_RESPONSES_START'
export const FETCH_RESPONSES_SUCCESS = 'FETCH_RESPONSES_SUCCESS'
export const FETCH_RESPONSES_FAILURE = 'FETCH_RESPONSES_FAILURE'

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
export const onSortEnd = ({ oldIndex, newIndex }) => dispatch => {
  dispatch({
    type: REORDER_RESPONSES,
    payload: arrayMove(store.getState().responses.unSaved, oldIndex, newIndex),
  })
}

export const ADD_NEW_RESPONSE = 'ADD_NEW_RESPONSE'
export const addRes = res => dispatch =>
  dispatch({ type: ADD_NEW_RESPONSE, payload: res })
