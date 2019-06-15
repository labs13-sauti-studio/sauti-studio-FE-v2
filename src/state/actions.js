import { axiosInstance } from 'helpers'

// USER DETAILS

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

// WORKFLOWS

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

export const DELETE_WORKFLOW_START = 'DELETE_WORKFLOW_START'
export const DELETE_WORKFLOW_SUCCESS = 'DELETE_WORKFLOW_SUCCESS'
export const DELETE_WORKFLOW_FAILURE = 'DELETE_WORKFLOW_FAILURE'

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

// USER WORKFLOW

export const LOAD_WORKFLOW_START = 'LOAD_WORKFLOW_START'
export const LOAD_WORKFLOW_SUCCESS = 'LOAD_WORKFLOW_SUCCESS'
export const LOAD_WORKFLOW_FAILURE = 'LOAD_WORKFLOW_FAILURE'

export const loadWorkflow = id => dispatch => {
  dispatch({ type: 'LOAD_WORKFLOW_START' })

  axiosInstance
    .get(`/workflows/${id}`)
    .then(res => dispatch({ type: 'LOAD_WORKFLOW_SUCCESS', payload: res.data }))
    .catch(err =>
      dispatch({
        type: 'LOAD_WORKFLOWS_FAILURE',
        msg: err.message,
      })
    )

  dispatch({ type: 'LOAD_WORKFLOW_START' })

  axiosInstance
    .get(`questions/${id}`)
    .then(res =>
      dispatch({
        type: 'LOAD_WORKFLOW_QUESTIONS_SUCCESS',
        payload: res.message,
      })
    )
    .catch(err =>
      dispatch({
        type: 'LOAD_WORKFLOW_QUESTIONS_FAILURE',
        msg: err.message,
      })
    )
}

export const SET_ACTIVE_WORKFLOW = 'SET_ACTIVE_WORKFLOW'

export const setActiveWorkflow = workflow => dispatch => {
  dispatch({ type: SET_ACTIVE_WORKFLOW, payload: workflow })
  console.log(workflow)
}

export const LOAD_WORKFLOW_QUESTIONS_START = 'LOAD_WORKFLOW_QUESTIONS_START'
export const LOAD_WORKFLOW_QUESTIONS_SUCCESS = 'LOAD_WORKFLOW_QUESTIONS_SUCCESS'
export const LOAD_WORKFLOW_QUESTIONS_FAILURE = 'LOAD_WORKFLOW_QUESTIONS_FAILURE'

// WORKFLOW QUESTIONS
export const loadWorkflowQuestions = id => dispatch => {
  dispatch({ type: LOAD_WORKFLOW_QUESTIONS_START })

  axiosInstance
    .get(`/questions/${id}`)
    .then(({ data }) =>
      dispatch({ type: LOAD_WORKFLOW_QUESTIONS_SUCCESS, payload: data })
    )
    .catch(err => {
      console.log(err)
      dispatch({ type: LOAD_WORKFLOW_QUESTIONS_FAILURE })
    })
}

// USER INTERFACE

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const toggleSidebar = bool => dispatch =>
  dispatch({ type: TOGGLE_SIDEBAR, payload: bool })

export const TOGGLE_WORKFLOW_MODAL = 'TOGGLE_WORKFLOW_MODAL'

export const toggleWorkflowModal = bool => dispatch =>
  dispatch({ type: TOGGLE_WORKFLOW_MODAL, payload: bool })

export const CLOSE_WORKFLOW_MODAL = 'CLOSE_WORKFLOW_MODAL'

export const closeWorkflowModal = () => dispatch =>
  dispatch({ type: CLOSE_WORKFLOW_MODAL })

export const TOGGLE_EDIT_PROFILE = 'TOGGLE_EDIT_PROFILE'

export const toggleEditProfileModal = bool => dispatch =>
  dispatch({ type: TOGGLE_EDIT_PROFILE, payload: bool })

export const CLOSE_EDIT_PROFILE = 'CLOSE_EDIT_PROFILE'

export const closeEditProfileModal = () => dispatch =>
  dispatch({ type: CLOSE_EDIT_PROFILE })
