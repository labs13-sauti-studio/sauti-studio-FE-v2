/* eslint-disable camelcase */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { axiosInstance } from '../../helpers'
import EditUserDetailsModel from '@/EditUserDetailsModel'

export default class UserDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axiosInstance
      .get('/profile')
      .then(({ data: info }) => this.setState({ ...info }))
  }

  render() {
    const {
      id,
      country,
      company_name,
      display_name,
      email,
      phone_num,
    } = this.state
    return (
      <div>
        <List>
          <ListItem>{id}</ListItem>
          <ListItem>{display_name}</ListItem>
          <ListItem>{email}</ListItem>
          <ListItem>{company_name}</ListItem>
          <ListItem>{country}</ListItem>
          <ListItem>{phone_num}</ListItem>
        </List>

        <Button variant="outlined" color="primary">
          <a href={`${process.env.GATSBY_API_URL}/logout`}>Logout</a>
        </Button>

        <EditUserDetailsModel {...this.state} />
      </div>
    )
  }
}

// class UserDetailsOld extends Component {
//   constructor() {
//     super()
//     this.state = { updating: false }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   componentDidMount() {
//     axiosInstance.get('/profile').then(({ data }) => this.setState({ ...data }))
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   handleSubmit = e => {
//     e.preventDefault()

//     const {
//       company_name,
//       country,
//       display_name,
//       email,
//       phone_num,
//       updating,
//     } = this.state

//     axiosInstance.put('/profile', {
//       company_name,
//       country,
//       display_name,
//       email,
//       phone_num,
//       updating,
//     })
//   }

//   render() {
//     const {
//       company_name,
//       country,
//       display_name,
//       email,
//       phone_num,
//       updating,
//     } = this.state

//     const { handleChange } = this
//     return (
//       <Container>
//         <Typography variant="h6">User Details</Typography>
//         <Typography variant="p">{email}</Typography>
//         <br />

//         <Button onClick={() => this.setState({ updating: !updating })}>
//           Update Info
//         </Button>

//         {updating ? (
//           <UserDetailsForm onSubmit={this.handleSubmit}>
//             <TextField
//               id="standard-name"
//               label="Company Name"
//               name="company_name"
//               value={company_name}
//               onChange={this.handleChange}
//               margin="normal"
//             />
//             <TextField
//               // id="standard-name"
//               name="country"
//               label="Country"
//               value={country}
//               onChange={this.handleChange}
//               margin="normal"
//             />
//             <TextField
//               // id="standard-name"
//               label="Display Name"
//               value={display_name}
//               onChange={this.handleChange}
//               margin="normal"
//             />
//             <TextField
//               disabled
//               label="Email"
//               value={email}
//               onChange={this.handleChange}
//               margin="normal"
//             />
//             <TextField
//               // id="standard-name"
//               label="Phone Number"
//               value={phone_num}
//               onChange={handleChange}
//               margin="normal"
//             />
//             <Button type="submit" value="submit">
//               Submit
//             </Button>
//           </UserDetailsForm>
//         ) : null}
//         <br />
//         <Button color="primary">
//           <a href={`${process.env.GATSBY_API_URL}/logout`}>Logout</a>
//         </Button>
//       </Container>
//     )
//   }
// }
