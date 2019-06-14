import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dashboard from '@/dashboard'
import { loadUserInfo } from 'state/actions'
import { connect } from 'react-redux'
// const UserLayout = ({ children }) => <Dashboard>{children}</Dashboard>

class UserLayout extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(loadUserInfo())
  }

  render() {
    const { children, user } = this.props
    return <Dashboard user={user}>{children}</Dashboard>
  }
}

UserLayout.propTypes = {
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}
export default connect(state => ({
  user: state.user,
}))(UserLayout)
UserLayout.propTypes = {
  children: PropTypes.node,
}
