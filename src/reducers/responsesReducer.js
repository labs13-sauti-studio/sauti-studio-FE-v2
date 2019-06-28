import {
  FETCH_RESPONSES_START,
  FETCH_RESPONSES_SUCCESS,
  FETCH_RESPONSES_FAILURE,
  ADD_NEW_RESPONSE,
  REORDER_RESPONSES,
  FETCHED_FLAT_ARRAY,
  CLICKED_RESPONSE,
  TOGGLE_RES_MODAL,
  TOGGLE_DELETE_MODAL,
  SET_ACTIVE_RES,
  DELETE_RES_START,
  DELETE_RES_SUCCESS,
  DELETE_RES_FAILURE,
} from 'actions/responsesActions'

const initialState = {
  text: null,
  owner: null,
  workflow: null,
  index: null,
  loaded: [],
  unSaved: [],
  flattened: [],
  error: false,
  message: null,
  activeItem: null,
  activeIndex: 0,
  isLoadingResponses: false,
  isAddEditModalOpen: false,
  isDeleteModalOpen: false,
  modal: {
    id: null,
    text: '',
    owner: null,
    workflow: null,
    edit: false,
  },
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
        activeItem: action.payload[0].id,
      }

    case FETCH_RESPONSES_FAILURE:
      return { ...state, error: true, message: action.payload }

    case ADD_NEW_RESPONSE:
      return { ...state, ...action.payload }

    case REORDER_RESPONSES:
      return { ...state, unSaved: action.payload }

    case FETCHED_FLAT_ARRAY:
      return { ...state, flattened: action.payload }

    case CLICKED_RESPONSE:
      return {
        ...state,
        activeItem: action.payload,
      }
    case TOGGLE_RES_MODAL:
      return { ...state, isAddEditModalOpen: action.payload }

    case TOGGLE_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: action.payload }

    case SET_ACTIVE_RES:
      return { ...state, modal: action.payload }

    case DELETE_RES_START:
      return { ...state }

    case DELETE_RES_SUCCESS:
      return {
        ...state,
        unSaved: action.payload.current,
        message: action.payload.message,
      }

    case DELETE_RES_FAILURE:
      return { ...state, error: true, message: action.payload }

    default:
      return state
  }
}
export default responsesReducer
