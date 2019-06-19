import { combineReducers } from 'redux'

import uiReducer from 'reducers/uiReducer'
import workflowsReducer from 'reducers/workflowsReducer'
import workflowReducer from 'reducers/workflowReducer'
import userReducer from 'reducers/userReducer'

export default combineReducers({
  user: userReducer,
  workflows: workflowsReducer,
  workflow: workflowReducer,
  ui: uiReducer,
})
