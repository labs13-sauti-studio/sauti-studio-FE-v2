import {
  FETCH_RESPONSES_START,
  FETCH_RESPONSES_SUCCESS,
  FETCH_RESPONSES_FAILURE,
  ADD_NEW_RESPONSE,
  REORDER_RESPONSES,
} from 'actions/responsesActions'

const initialState = {
  text: null,
  owner: null,
  workflow: null,
  index: null,
  loaded: [],
  unSaved: [],
  error: false,
  message: null,
  isLoadingResponses: false,
}

const responsesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESPONSES_START:
      return { ...state, loadingResponses: true }

    case FETCH_RESPONSES_SUCCESS:
      return {
        ...state,
        isLoadingResponses: false,
        loaded: action.payload,
        unSaved: action.payload,
      }

    case FETCH_RESPONSES_FAILURE:
      return { ...state, error: true, message: action.payload }

    case ADD_NEW_RESPONSE:
      return { ...state, ...action.payload }

    case REORDER_RESPONSES:
      return { ...state, unSaved: action.payload }

    default:
      return state
  }
}
export default responsesReducer
