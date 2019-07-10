import { axiosInstance } from 'helpers'

export const LOAD_WORKFLOWS_START = 'LOAD_WORKFLOWS_START'
export const LOAD_WORKFLOWS_SUCCESS = 'LOAD_WORKFLOWS_SUCCESS'
export const LOAD_WORKFLOWS_FAILURE = 'LOAD_WORKFLOWS_FAILURE'

export const loadUserWorkflows = () => dispatch => {
  dispatch({ type: LOAD_WORKFLOWS_START })
  return axiosInstance
    .get('/workflows')
    .then(res => dispatch({ type: LOAD_WORKFLOWS_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({
        type: LOAD_WORKFLOWS_FAILURE,
        payload: err.message,
      })
    )
}

export const ADD_WORKFLOW_START = 'ADD_WORKFLOW_START'
export const ADD_WORKFLOW_SUCCESS = 'ADD_WORKFLOW_SUCCESS'
export const ADD_WORKFLOW_FAILURE = 'ADD_WORKFLOW_FAILURE'

export const addUserWorkflow = obj => dispatch => {
  dispatch({ type: ADD_WORKFLOW_START })
  axiosInstance
    .post('/workflows', obj)
    .then(({ data }) => {
      console.log(data)

      dispatch({ type: ADD_WORKFLOW_SUCCESS, payload: data })
    })
    .catch(() =>
      dispatch({
        type: ADD_WORKFLOW_FAILURE,
        payload: 'Problem fetching workflows',
      })
    )
}

export const SET_USER_WORKFLOWS = 'SET_USER_WORKFLOWS'

export const setUserWorkflows = workflows => dispatch => {
  dispatch({ type: 'SET_USER_WORKFLOWS', payload: workflows })
}
