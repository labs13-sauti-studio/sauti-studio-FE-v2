import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './navbar'

const theme = {}

const GlobalStyle = createGlobalStyle`
body, html { width: 100%; margin: 0; padding: 0; }
a { all: unset; }
a { :hover { cursor: pointer; } }
`

const Main = styled.main`
  padding: 1rem 0;
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
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <GlobalStyle />
          <Navbar />
          <Container>
            <Main>{children}</Main>
          </Container>
        </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
