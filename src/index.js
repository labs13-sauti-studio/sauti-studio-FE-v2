import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import "./sass/index.css";
// import { BrowserRouter as Router, withRouter } from "react-router-dom"



// const AppWithRouter = withRouter(App)
// const rootElement = document.getElementById("root")
// ReactDOM.render(
//   <Router>
//     <AppWithRouter />
//   </Router>,
//   rootElement
// )

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);