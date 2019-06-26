import { combineReducers } from 'redux'

import uiReducer from './uiReducer'
import workflowsReducer from './workflowsReducer'
import workflowReducer from './workflowReducer'
import userReducer from './userReducer'
import responsesReducer from './responsesReducer'

export default combineReducers({
  user: userReducer,
  workflows: workflowsReducer,
  ui: uiReducer,
  responses: responsesReducer,
  workflow: workflowReducer,
})
