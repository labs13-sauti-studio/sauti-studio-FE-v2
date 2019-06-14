import { combineReducers } from 'redux'

import {
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  TOGGLE_SIDEBAR,
  TOGGLE_WORKFLOW_MODAL,
  CLOSE_WORKFLOW_MODAL,
  LOAD_WORKFLOWS_START,
  LOAD_WORKFLOWS_SUCCESS,
  LOAD_WORKFLOWS_FAILURE,
  ADD_WORKFLOW_START,
  ADD_WORKFLOW_SUCCESS,
  ADD_WORKFLOW_FAILURE,
  SET_USER_WORKFLOWS,
} from 'state/actions'

const initialUserState = {
  info: {},
  loading: false,
  error: null,
  msg: null,
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
      return { ...state, loading: true }

    case LOAD_USER_SUCCESS:
      return { ...state, loading: false, info: action.payload, msg: 'Success' }

    case LOAD_USER_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }

    default:
      return state
  }
}
const initialWorkflowsState = {
  data: [],
  loading: false,
  error: null,
  msg: null,
  isAdding: false,
  shit: null,
}

const workflowsReducer = (state = initialWorkflowsState, action) => {
  switch (action.type) {
    case LOAD_WORKFLOWS_START:
      return { ...state, loading: true }

    case LOAD_WORKFLOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        msg: 'Success',
      }

    case LOAD_WORKFLOWS_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }

    case ADD_WORKFLOW_START:
      return { ...state, isAdding: true }

    case ADD_WORKFLOW_SUCCESS:
      return {
        ...state,
        isAdding: false,
        data: action.payload,
      }

    case ADD_WORKFLOW_FAILURE:
      return { ...state, error: action.payload }

    case SET_USER_WORKFLOWS:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

const initialUiState = {
  isSidebarOpen: true,
  isAddingNewWorkflow: false,
}

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: action.payload }

    case TOGGLE_WORKFLOW_MODAL:
      return { ...state, isAddingNewWorkflow: action.payload }

    case CLOSE_WORKFLOW_MODAL:
      return { ...state, isAddingNewWorkflow: false }

    default:
      return state
  }
}

export default combineReducers({
  user: userReducer,
  workflows: workflowsReducer,
  ui: uiReducer,
})
