import { StaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Navbar from '@/navbar'
import PropTypes from 'prop-types'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCoffee,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import StickyFooter from './StickyFooter'

library.add(fab, faCheckSquare, faCoffee, faCheckCircle)

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
        <StickyFooter />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
