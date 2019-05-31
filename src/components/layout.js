import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { theme, muiTheme, GlobalStyle } from '../theme'
import Navbar from './navbar'

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
