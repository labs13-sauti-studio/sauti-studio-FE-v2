/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Provider } from 'react-redux'
import React from 'react'
// import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme, muiTheme, GlobalStyle } from 'src/theme'
import store from '../state/store'

export default ({ element }) => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <GlobalStyle />
      <Provider store={store}>{element}</Provider>
    </MuiThemeProvider>
  </ThemeProvider>
)
