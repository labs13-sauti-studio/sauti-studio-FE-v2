export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const toggleSidebar = bool => dispatch =>
  dispatch({ type: TOGGLE_SIDEBAR, payload: bool })

export const TOGGLE_WORKFLOW_MODAL = 'TOGGLE_WORKFLOW_MODAL'

export const toggleWorkflowModal = bool => dispatch =>
  dispatch({ type: TOGGLE_WORKFLOW_MODAL, payload: bool })

export const CLOSE_WORKFLOW_MODAL = 'CLOSE_WORKFLOW_MODAL'

export const closeWorkflowModal = () => dispatch =>
  dispatch({ type: CLOSE_WORKFLOW_MODAL })

export const TOGGLE_EDIT_PROFILE = 'TOGGLE_EDIT_PROFILE'

export const toggleEditProfileModal = bool => dispatch =>
  dispatch({ type: TOGGLE_EDIT_PROFILE, payload: bool })

export const CLOSE_EDIT_PROFILE = 'CLOSE_EDIT_PROFILE'

export const closeEditProfileModal = () => dispatch =>
  dispatch({ type: CLOSE_EDIT_PROFILE })

export const TOGGLE_DELETE_QUESTION_MODAL = 'TOGGLE_DELETE_QUESTION_MODAL'

export const toggleDeleteQuestionModal = bool => dispatch =>
  dispatch({ type: TOGGLE_DELETE_QUESTION_MODAL, payload: bool })

export const TOGGLE_RESPONSE_HOVER = 'TOGGLE_RESPONSE_HOVER'

export const toggleResponseHover = bool => dispatch =>
  dispatch({ type: TOGGLE_RESPONSE_HOVER, payload: bool })
