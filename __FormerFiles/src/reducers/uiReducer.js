import {
  CLOSE_EDIT_PROFILE,
  CLOSE_WORKFLOW_MODAL,
  TOGGLE_DELETE_QUESTION_MODAL,
  TOGGLE_EDIT_PROFILE,
  TOGGLE_RESPONSE_HOVER,
  TOGGLE_SIDEBAR,
  TOGGLE_WORKFLOW_MODAL,
} from 'actions'

const initialUiState = {
  sideBarData: [
    { name: 'Profile', to: '/profile/' },
    { name: 'Workflows', to: 'workflows' },
  ],
  isAddingNewWorkflow: false,
  isDeleteQuestionModalOpen: false,
  isEditingProfile: false,
  isHoveringQuestion: false,
  isSidebarOpen: false,
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

    case TOGGLE_DELETE_QUESTION_MODAL:
      return { ...state, isDeleteQuestionModalOpen: action.payload }

    case TOGGLE_RESPONSE_HOVER:
      return { ...state, isHoveringQuestion: action.payload }

    default:
      return state
  }
}

export default uiReducer
