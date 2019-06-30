import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dashboard from '@/dashboard'
import { loadUserInfo } from 'actions'
import { connect } from 'react-redux'
// const UserLayout = ({ children }) => <Dashboard>{children}</Dashboard>

class UserLayout extends Component {
  componentDidMount() {
    loadUserInfo()
  }

  render() {
    const { children, user } = this.props
    return <Dashboard user={user}>{children}</Dashboard>
  }
}

UserLayout.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default connect(
  state => ({
    user: state.user,
  }),
  { loadUserInfo }
)(UserLayout)
