import {
  LOAD_WORKFLOW_START,
  LOAD_WORKFLOW_SUCCESS,
  LOAD_WORKFLOW_FAILURE,
} from 'actions'

const initialWorkflowState = {
  id: null,
  name: null,
  area_code: null,
  category: null,
  client_id: null,
  code: null,
  loading: false,
  msg: null,
  error: null,
  questions: [],
  answers: [],
  order: 1,
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

    case SET_ACTIVE_QUESTION:
      return { ...state, question_id: action.payload }

    default:
      return state
  }
}
// const initialWorkflowState = {
//   id: null,
//   name: null,
//   area_code: null,
//   category: null,
//   client_id: null,
//   question_id: null,
//   loading: false,
//   msg: null,
//   error: null,
//   questions: [],
//   answers: [],
//   loadingAnswers: false,
//   loadingQuestions: false,
//   isAddingQuestion: false,
// }
export default workflowReducer
