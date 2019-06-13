import PropTypes from 'prop-types'
import React from 'react'
import Dashboard from '@/dashboard'

const UserLayout = ({ children }) => <Dashboard>{children}</Dashboard>

UserLayout.propTypes = {
  children: PropTypes.node,
}

export default UserLayout
