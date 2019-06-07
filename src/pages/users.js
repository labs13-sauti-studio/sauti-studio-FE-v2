import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { axiosInstance } from '../helpers'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export default class UsersPage extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      workflows: [],
      questions: [],
      answers: [],
    }
  }

  componentDidMount() {
    axiosInstance
      .get('/users')
      .then(({ data }) => this.setState({ users: data }))

    axiosInstance
      .get('/workflows')
      .then(({ data }) => this.setState({ workflows: data }))

    axiosInstance
      .get('/questions')
      .then(({ data }) => this.setState({ questions: data }))

    axiosInstance
      .get('/answers')
      .then(({ data }) => this.setState({ answers: data }))
  }

  render() {
    const { users, workflows, questions, answers } = this.state
    return (
      <Layout>
        <SEO title="Register" />
        <Grid>
          <div>
            <h1>Users</h1>
            <ul>
              {users.map((user, i) => (
                <li key={i}>
                  <span>{user.display_name}</span>
                  <br />
                  <span>{user.email}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Workflows</h1>
            <ul>
              {workflows.map((wf, i) => (
                <li key={i}>
                  <span>{wf.name}</span>
                  <br />
                  <span>{wf.category}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Questions</h1>
            <ul>
              {questions.map((q, i) => (
                <li key={i}>
                  <span>{q.options}</span>
                  <br />
                  <span>{q.question_text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Answers</h1>
            <ul>
              {answers.map((a, i) => (
                <li key={i}>
                  <span>{a.answers_number}</span>
                  <br />
                  <span>{a.answers_text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </Layout>
    )
  }
}
