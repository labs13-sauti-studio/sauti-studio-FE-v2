import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import "./sass/index.css";


import { BrowserRouter as Router, withRouter } from "react-router-dom"

const AppWithRouter = withRouter(App)
const rootElement = document.getElementById("root")
ReactDOM.render(
  <Router>
    <AppWithRouter />
  </Router>,
  rootElement
)
