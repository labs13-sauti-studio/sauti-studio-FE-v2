import {
  LOAD_WORKFLOWS_START,
  LOAD_WORKFLOWS_SUCCESS,
  LOAD_WORKFLOWS_FAILURE,
  ADD_WORKFLOW_START,
  ADD_WORKFLOW_SUCCESS,
  ADD_WORKFLOW_FAILURE,
  SET_USER_WORKFLOWS,
} from 'actions'

const initialWorkflowsState = {
  data: [],
  loading: false,
  error: null,
  msg: null,
  isAdding: false,
  isDeleting: false,
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

export default workflowsReducer
