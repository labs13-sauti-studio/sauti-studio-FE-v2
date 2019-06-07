import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { axiosInstance } from '../helpers'

export default class UsersPage extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axiosInstance
      .get('/users')
      .then(({ data }) => this.setState({ users: data }))
  }

  render() {
    const { users } = this.state
    return (
      <Layout>
        <SEO title="Register" />
        <ul>
          {users.map((user, i) => (
            <li key={i}>
              <span>{user.display_name}</span>
              <br />
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}
