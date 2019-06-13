import { StaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'

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
      <>
        <Navbar />
        <main style={{ padding: '1rem 0' }}>
          <Container>{children}</Container>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
