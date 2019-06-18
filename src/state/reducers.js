import { combineReducers } from 'redux'

import {
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  TOGGLE_SIDEBAR,
  TOGGLE_WORKFLOW_MODAL,
  TOGGLE_EDIT_PROFILE,
  CLOSE_EDIT_PROFILE,
  CLOSE_WORKFLOW_MODAL,
  LOAD_WORKFLOWS_START,
  LOAD_WORKFLOWS_SUCCESS,
  LOAD_WORKFLOWS_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  ADD_WORKFLOW_START,
  ADD_WORKFLOW_SUCCESS,
  ADD_WORKFLOW_FAILURE,
  SET_USER_WORKFLOWS,
  SET_ACTIVE_WORKFLOW,
  DELETE_WORKFLOW_START,
  DELETE_WORKFLOW_SUCCESS,
  DELETE_WORKFLOW_FAILURE,
  LOAD_WORKFLOW_START,
  LOAD_WORKFLOW_SUCCESS,
  LOAD_WORKFLOW_FAILURE,
  LOAD_WORKFLOW_QUESTIONS_START,
  LOAD_WORKFLOW_QUESTIONS_SUCCESS,
  LOAD_WORKFLOW_QUESTIONS_FAILURE,
  LOAD_QUESTION_ANSWERS_START,
  LOAD_QUESTION_ANSWERS_SUCCESS,
  LOAD_QUESTION_ANSWERS_FAILURE,
  ADD_WORKFLOW_QUESTION_START,
  ADD_WORKFLOW_QUESTION_SUCCESS,
  ADD_WORKFLOW_QUESTION_FAILURE,
  ADD_QUESTION_ANSWER_START,
  ADD_QUESTION_ANSWER_SUCCESS,
  ADD_QUESTION_ANSWER_FAILURE,
} from 'state/actions'

const initialUserState = {
  id: null,
  company_name: null,
  country: null,
  display_name: 'Garrett Weems',
  loading: false,
  error: null,
  msg: null,
}

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
      return { ...state, loading: true }

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        msg: action.payload,
      }

    case LOAD_USER_FAILURE:
      return { ...state, loading: false, error: true, msg: action.payload }

    case UPDATE_USER_START:
      return { ...state, loading: true }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
        msg: action.payload,
      }

    case UPDATE_USER_FAILURE:
      return { ...state, loading: false, msg: action.payload }

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

    case DELETE_WORKFLOW_START:
      return { ...state, isDeleting: true }

    case DELETE_WORKFLOW_SUCCESS:
      return { ...state, isDeleting: false, msg: action.payload }

    case DELETE_WORKFLOW_FAILURE:
      return { ...state }

    default:
      return state
  }
}

const initialUiState = {
  sideBarData: [
    { name: 'Profile', to: '/profile' },
    { name: 'Workflows', to: 'workflows' },
  ],
  isSidebarOpen: false,
  isAddingNewWorkflow: false,
  isEditingProfile: false,
}

const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: action.payload }

    case TOGGLE_WORKFLOW_MODAL:
      return { ...state, isAddingNewWorkflow: action.payload }

    case CLOSE_WORKFLOW_MODAL:
      return { ...state, isAddingNewWorkflow: false }

    case TOGGLE_EDIT_PROFILE:
      return { ...state, isEditingProfile: action.payload }

    case CLOSE_EDIT_PROFILE:
      return { ...state, isEditingProfile: false }

    default:
      return state
  }
}

const initialWorkflowState = {
  id: null,
  name: null,
  area_code: null,
  category: null,
  client_id: null,
  question_id: null,
  loading: false,
  msg: null,
  error: null,
  questions: [],
  answers: [],
  loadingAnswers: false,
  loadingQuestions: false,
  isAddingQuestion: false,
}

const SET_ACTIVE_QUESTION = 'SET_ACTIVE_QUESTION'
const workflowReducer = (state = initialWorkflowState, action) => {
  switch (action.type) {
    case LOAD_WORKFLOW_START:
      return { ...state, loading: true }

    case LOAD_WORKFLOW_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: 'Success',
        ...action.payload,
      }

    case LOAD_WORKFLOW_FAILURE:
      return { ...state, error: true, msg: action.payload }

    case LOAD_WORKFLOW_QUESTIONS_START:
      return { ...state, loadingQuestions: true }

    case LOAD_WORKFLOW_QUESTIONS_SUCCESS:
      return { ...state, loadingQuestions: false, questions: action.payload }

    case LOAD_WORKFLOW_QUESTIONS_FAILURE:
      return { ...state, error: true, msg: 'Problem Loading Questions' }

    case SET_ACTIVE_WORKFLOW:
      return { ...state, ...action.payload }

    case ADD_WORKFLOW_QUESTION_START:
      return { ...state, isAddingQuestion: true }

    case ADD_WORKFLOW_QUESTION_SUCCESS:
      return { ...state, isAddingQuestion: false, questions: action.payload }

    case ADD_WORKFLOW_QUESTION_FAILURE:
      return { ...state, error: true }

    case LOAD_QUESTION_ANSWERS_START:
      return { ...state, loadingAnswers: true }

    case LOAD_QUESTION_ANSWERS_SUCCESS:
      return { ...state, loadingAnswers: false, answers: action.payload }

    case LOAD_QUESTION_ANSWERS_FAILURE:
      return { ...state, error: true, msg: 'Problem Loading Answers' }

    case ADD_QUESTION_ANSWER_START:
      return { ...state, loadingAnswers: true }

    case ADD_QUESTION_ANSWER_SUCCESS:
      return { ...state, loadingAnswers: false, answers: action.payload }

    case ADD_QUESTION_ANSWER_FAILURE:
      return {
        ...state,
        loadingAnswers: false,
        error: true,
        msg: 'Problem adding answer',
      }

    case SET_ACTIVE_QUESTION:
      return { ...state, question_id: action.payload }

    default:
      return state
  }
}

export default combineReducers({
  user: userReducer,
  workflows: workflowsReducer,
  workflow: workflowReducer,
  ui: uiReducer,
})
