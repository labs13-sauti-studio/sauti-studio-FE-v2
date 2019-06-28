/* eslint-disable no-use-before-define */
import { axiosInstance } from 'helpers'
import { loadUserWorkflows } from 'actions'

export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export const addNewQuestion = question => dispatch => {
  dispatch({ type: ADD_NEW_QUESTION, payload: question })
}

export const LOAD_WORKFLOW_START = 'LOAD_WORKFLOW_START'
export const LOAD_WORKFLOW_SUCCESS = 'LOAD_WORKFLOW_SUCCESS'
export const LOAD_WORKFLOW_FAILURE = 'LOAD_WORKFLOW_FAILURE'

export const loadWorkflow = workflow_id => dispatch => {
  dispatch({ type: LOAD_WORKFLOW_START })

  axiosInstance
    .get(`/workflows/${workflow_id}`)
    .then(res => dispatch({ type: LOAD_WORKFLOW_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: LOAD_WORKFLOW_FAILURE,
        msg: err.message,
      })
    )
}

export const SET_WORKFLOW_ID = 'SET_WORKFLOW_ID'

export const setActiveWorkflowId = workflow_id => dispatch => {
  dispatch({ type: SET_WORKFLOW_ID, payload: workflow_id })
}
export const deleteUserWorkflow = id => dispatch => {
  dispatch({ type: 'DELETE_WORKFLOW_START' })

  axiosInstance
    .delete(`/workflows/${id}`)
    .then(({ data: { message } }) => {
      dispatch({ type: 'DELETE_WORKFLOW_SUCCESS', payload: message })
      dispatch(loadUserWorkflows())
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: 'DELETE_WORKFLOW_FAILURE' })
    })
}
