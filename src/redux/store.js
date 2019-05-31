import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from './reducers'

export const createStore = () =>
  reduxCreateStore(rootReducer, composeWithDevTools())

export const store = createStore()
