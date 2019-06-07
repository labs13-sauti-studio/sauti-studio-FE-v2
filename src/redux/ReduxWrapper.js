/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Provider } from 'react-redux'
import React from 'react'
import store from './store'

export default ({ element }) => <Provider store={store}>{element}</Provider>
