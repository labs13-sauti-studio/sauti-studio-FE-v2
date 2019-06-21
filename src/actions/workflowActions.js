/* eslint-disable no-use-before-define */
import { axiosInstance } from 'helpers'
import { loadUserWorkflows } from 'actions'
import arrayMove from 'array-move'
import store from 'src/store'

export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'

export const addNewQuestion = question => dispatch => {
  dispatch({ type: ADD_NEW_QUESTION, payload: question })
}

export const LOAD_WORKFLOW_START = 'LOAD_WORKFLOW_START'
export const LOAD_WORKFLOW_SUCCESS = 'LOAD_WORKFLOW_SUCCESS'
export const LOAD_WORKFLOW_FAILURE = 'LOAD_WORKFLOW_FAILURE'

export const loadWorkflow = workflow_id => dispatch => {
  dispatch({ type: 'LOAD_WORKFLOW_START' })

  axiosInstance
    .get(`/workflows/${workflow_id}`)
    .then(res => dispatch({ type: 'LOAD_WORKFLOW_SUCCESS', payload: res.data }))
    .then(() => dispatch(loadWorkflowQuestions(workflow_id)))
    .catch(err =>
      dispatch({
        type: 'LOAD_WORKFLOWS_FAILURE',
        msg: err.message,
      })
    )
}

export const SET_WORKFLOW_ID = 'SET_WORKFLOW_ID'

export const setActiveWorkflowId = workflow_id => dispatch => {
  dispatch({ type: SET_WORKFLOW_ID, payload: workflow_id })
}
export const SET_QUESTION_ID = 'SET_QUESTION_ID'

export const setActiveQuestionId = question_id => dispatch => {
  dispatch({ type: SET_QUESTION_ID, payload: question_id })
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

export const ADD_WORKFLOW_QUESTION_START = 'ADD_WORKFLOW_QUESTION_START'
export const ADD_WORKFLOW_QUESTION_SUCCESS = 'ADD_WORKFLOW_QUESTION_SUCCESS'
export const ADD_WORKFLOW_QUESTION_FAILURE = 'ADD_WORKFLOW_QUESTION_FAILURE'

// ADD NEW QUESTIONS TO WORKFLOW
export const addWorkflowQuestion = (
  question_text,
  order,
  workflow_id
) => dispatch => {
  dispatch({ type: ADD_WORKFLOW_QUESTION_START })

  axiosInstance
    .post(`/questions/${workflow_id}`, {
      workflow_id,
      question_text,
    })
    .then(({ data }) =>
      dispatch({ type: ADD_WORKFLOW_QUESTION_SUCCESS, payload: data })
    )
    .catch(err => new Error(err))
}

export const SET_WORKFLOW_QUESTIONS = 'SET_WORKFLOW_QUESTIONS'

export const setWorkflowQuestions = questions => dispatch => {
  dispatch({ type: SET_WORKFLOW_QUESTIONS, paylaod: questions })
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

export const DELETE_WF_QUESTION_START = 'DELETE_WF_QUESTION_START'
export const DELETE_WF_QUESTION_SUCCESS = 'DELETE_WF_QUESTION_SUCCESS'
export const DELETE_WF_QUESTION_FAILURE = 'DELETE_WF_QUESTION_FAILURE'

export const deleteWorkflowQuestion = question_id => dispatch => {
  dispatch({ type: DELETE_WF_QUESTION_START })

  axiosInstance
    .delete(`/questions/${question_id}`)
    .then(res => {
      dispatch({
        type: DELETE_WF_QUESTION_SUCCESS,
        msg: `Question ${question_id} deleted`,
      })
    })
    .catch(err =>
      dispatch({
        type: DELETE_WF_QUESTION_FAILURE,
      })
    )
}

export const DELETE_WF_ANSWER_START = 'DELETE_WF_ANSWER_START'
export const DELETE_WF_ANSWER_SUCCESS = 'DELETE_WF_ANSWER_SUCCESS'
export const DELETE_WF_ANSWER_FAILURE = 'DELETE_WF_QUESTION_FAILURE'

export const deleteWorkflowAnswer = answers_id => dispatch => {
  dispatch({ type: DELETE_WF_ANSWER_START })

  axiosInstance
    .delete(`/answers/${answers_id}`)
    .then(({ data }) =>
      dispatch({ type: DELETE_WF_ANSWER_SUCCESS, payload: data })
    )
    .catch(err =>
      dispatch({
        type: DELETE_WF_ANSWER_FAILURE,
      })
    )
}

export const ADD_QUESTION_ANSWER_START = 'ADD_QUESTION_ANSWER_START'
export const ADD_QUESTION_ANSWER_SUCCESS = 'ADD_QUESTION_ANSWER_SUCCESS'
export const ADD_QUESTION_ANSWER_FAILURE = 'ADD_QUESTION_ANSWER_FAILURE '

// ADD NEW QUESTIONS TO WORKFLOW
export const addQuestionAnswer = (
  answer_text,
  answer_number,
  next,
  question_id
) => dispatch => {
  dispatch({ type: ADD_QUESTION_ANSWER_START })

  axiosInstance
    .post(`/answers/${question_id}`, { answer_text, answer_number, next })
    .then(({ data }) => {
      dispatch({ type: ADD_QUESTION_ANSWER_SUCCESS, payload: data })
    })
    .catch(err => dispatch({ type: ADD_QUESTION_ANSWER_FAILURE }))
}

export const LOAD_QUESTION_ANSWERS_START = 'LOAD_QUESTION_ANSWERS_START'
export const LOAD_QUESTION_ANSWERS_SUCCESS = 'LOAD_QUESTION_ANSWERS_SUCCESS'
export const LOAD_QUESTION_ANSWERS_FAILURE = 'LOAD_QUESTION_ANSWERS_FAILURE '

// ADD NEW QUESTIONS TO WORKFLOW
export const loadQuestionAnswers = question_id => dispatch => {
  dispatch({ type: LOAD_QUESTION_ANSWERS_START })

  axiosInstance
    .get(`/answers/${question_id}`)
    .then(({ data }) => {
      dispatch({ type: LOAD_QUESTION_ANSWERS_SUCCESS, payload: data })
    })
    .catch(err => dispatch({ type: LOAD_QUESTION_ANSWERS_FAILURE }))
}
export const REORDER_QUESTIONS = 'REORDER_QUESTIONS'

export const onSortEnd = ({ oldIndex, newIndex }) => dispatch => {
  dispatch({
    type: REORDER_QUESTIONS,
    payload: arrayMove(store.getState().workflow.questions, oldIndex, newIndex),
  })
}
