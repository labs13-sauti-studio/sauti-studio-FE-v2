import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Navbar from './navbar'

// Light: #f2f5f8
// Dark: #303030
// Grey #454545
// Red #e74c3d
// Blue #035985
// Yellow #ffba29

const theme = {
  colors: {
    light: '#f2f5f8',
    dark: '#303030',
    grey: '#454545',
    red: '#e74c3d',
    blue: '#035985',
    yellow: '#ffba29',
  },
}

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: theme.colors.light,
      main: theme.colors.red,
      secondary: theme.colors.blue,
      dark: theme.colors.dark,
      contrastText: theme.colors.light,
    },
    secondary: {
      light: theme.colors.light,
      main: theme.colors.dark,
      dark: theme.colors.yellow,
      contrastText: theme.colors.light,
    },
    // error: will use the default color
  },
})

const GlobalStyle = createGlobalStyle`
a { all: unset; }
a { :hover { cursor: pointer; } }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <>
            <CssBaseline />
            <GlobalStyle />
            <Navbar />
            <Container>
              <main>{children}</main>
            </Container>
          </>
        </MuiThemeProvider>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
