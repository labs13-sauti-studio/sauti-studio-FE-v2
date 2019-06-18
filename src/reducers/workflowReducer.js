import {
  LOAD_WORKFLOW_START,
  LOAD_WORKFLOW_SUCCESS,
  LOAD_WORKFLOW_FAILURE,
  LOAD_WORKFLOW_QUESTIONS_START,
  LOAD_WORKFLOW_QUESTIONS_SUCCESS,
  LOAD_WORKFLOW_QUESTIONS_FAILURE,
  SET_ACTIVE_WORKFLOW,
  ADD_WORKFLOW_QUESTION_START,
  ADD_WORKFLOW_QUESTION_SUCCESS,
  ADD_WORKFLOW_QUESTION_FAILURE,
  LOAD_QUESTION_ANSWERS_START,
  LOAD_QUESTION_ANSWERS_SUCCESS,
  LOAD_QUESTION_ANSWERS_FAILURE,
  ADD_QUESTION_ANSWER_START,
  ADD_QUESTION_ANSWER_SUCCESS,
  ADD_QUESTION_ANSWER_FAILURE,
  DELETE_WF_QUESTION_START,
  DELETE_WF_QUESTION_SUCCESS,
  DELETE_WF_QUESTION_FAILURE,
  DELETE_WF_ANSWER_START,
  DELETE_WF_ANSWER_SUCCESS,
  DELETE_WF_ANSWER_FAILURE,
} from 'actions'

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

    case DELETE_WF_QUESTION_START:
      return { ...state, loading: true }

    case DELETE_WF_QUESTION_SUCCESS:
      return { ...state, loading: false }

    case DELETE_WF_QUESTION_FAILURE:
      return { ...state, error: true, msg: 'Problem deleting question' }

    case DELETE_WF_ANSWER_START:
      return { ...state, loading: true }

    case DELETE_WF_ANSWER_SUCCESS:
      return { ...state, loading: false, msg: 'Answer Deleted successfully' }

    case DELETE_WF_ANSWER_FAILURE:
      return { ...state, error: true, msg: 'Problem deleting answer' }

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
