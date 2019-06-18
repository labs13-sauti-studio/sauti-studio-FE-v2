import {
  TOGGLE_SIDEBAR,
  TOGGLE_WORKFLOW_MODAL,
  CLOSE_WORKFLOW_MODAL,
  TOGGLE_EDIT_PROFILE,
  CLOSE_EDIT_PROFILE,
} from 'actions'

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

export default uiReducer
