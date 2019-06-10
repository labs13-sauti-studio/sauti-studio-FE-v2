/* eslint-disable camelcase */
import styled from 'styled-components'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { axiosInstance } from '../../helpers'

const UserDetailsForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default class UserDetails extends Component {
  constructor() {
    super()
    this.state = { updating: false }
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
      <Container>
        <Typography variant="h6">User Details</Typography>
        <Typography variant="p">{email}</Typography>
        <br />

        <Button onClick={() => this.setState({ updating: !updating })}>
          Update Info
        </Button>

        {updating ? (
          <UserDetailsForm onSubmit={this.handleSubmit}>
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
          </UserDetailsForm>
        ) : null}
        <br />
        <Button color="primary">
          <a href={`${process.env.GATSBY_API_URL}/logout`}>Logout</a>
        </Button>
      </Container>
    )
  }
}
