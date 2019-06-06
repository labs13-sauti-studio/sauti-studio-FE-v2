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
    return (
      <Layout>
        <SEO title="Register" />
        {JSON.stringify(this.state.users)}
      </Layout>
    )
  }
}
