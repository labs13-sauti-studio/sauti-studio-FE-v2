import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'

// export default createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
})

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
