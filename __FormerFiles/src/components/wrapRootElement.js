/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Provider } from 'react-redux'
import React from 'react'
// import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme, muiTheme, GlobalStyle } from 'src/theme'
import store from 'src/store'

export default ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyle />
        {element}
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
)
