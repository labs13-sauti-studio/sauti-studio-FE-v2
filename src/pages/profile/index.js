import styled from 'styled-components'
import React, { Component } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { axiosInstance } from '../../helpers'

const WorkflowGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  gap: 1rem;
`
const GridItem = styled.div`
  background: pink;
`

export default class UserIndexPage extends Component {
  constructor() {
    super()
    this.state = { info: {}, workflows: [] }
  }

  componentDidMount() {
    axiosInstance
      .get('/profile')
      .then(({ data }) => this.setState({ info: data }))

    axiosInstance
      .get('/profile/workflows')
      .then(({ data }) => this.setState({ workflows: data }))
  }

  render() {
    return (
      <Layout loggedIn>
        <SEO title="Home" />
        {JSON.stringify(this.state)}
        <WorkflowGrid>
          <GridItem />
          <GridItem />
          <GridItem />
        </WorkflowGrid>
      </Layout>
    )
  }
}
