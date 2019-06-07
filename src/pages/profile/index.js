/* eslint-disable camelcase */
import styled from 'styled-components'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
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

const UserDetails = styled.form`
  display: flex;
  flex-direction: column;
`

// {
//   "id": 103,
//     "company_name": "LAMBDA SCHOOL",
//       "country": "USA",
//         "display_name": "Juru Sites",
//           "email": "juruwebsites@gmail.com",
//             "phone_num": "11111",
//               "password": null,
//                 "google_id": 117727781691589150000,
//                   "facebook_id": null
// }

export default class UserIndexPage extends Component {
  constructor() {
    super()
    this.state = { info: {}, updating: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axiosInstance.get('/profile').then(({ data }) => this.setState({ ...data }))
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {
      company_name,
      country,
      display_name,
      email,
      phone_num,
      updating,
    } = this.state

    axiosInstance.put('/profile', {
      company_name,
      country,
      display_name,
      email,
      phone_num,
      updating,
    })
  }

  render() {
    const {
      company_name,
      country,
      display_name,
      email,
      phone_num,
      updating,
    } = this.state

    const { handleChange } = this
    return (
      <Layout loggedIn>
        <SEO title="Home" />

        <Container>
          <Typography variant="h6">User Details</Typography>
          <Typography variant="p">{email}</Typography>
          <br />

          <Button onClick={() => this.setState({ updating: !updating })}>
            Update Info
          </Button>

          {updating ? (
            <UserDetails onSubmit={this.handleSubmit}>
              <TextField
                id="standard-name"
                label="Company Name"
                name="company_name"
                value={company_name}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                // id="standard-name"
                name="country"
                label="Country"
                value={country}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                // id="standard-name"
                label="Display Name"
                value={display_name}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                disabled
                label="Email"
                value={email}
                onChange={this.handleChange}
                margin="normal"
              />
              <TextField
                // id="standard-name"
                label="Phone Number"
                value={phone_num}
                onChange={handleChange}
                margin="normal"
              />
              <Button type="submit" value="submit">
                Submit
              </Button>
            </UserDetails>
          ) : null}
          <br />
          <Button color="primary">
            <a href={`${process.env.GATSBY_API_URL}/logout`}>Logout</a>
          </Button>
          <WorkflowGrid>
            <GridItem />
            <GridItem />
            <GridItem />
          </WorkflowGrid>
        </Container>
      </Layout>
    )
  }
}
