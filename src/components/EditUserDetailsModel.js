/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { axiosInstance } from '../helpers'

export default class EditUserDetailsModel extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
      company_name: '',
      country: '',
      phone_num: '',
    }
  }

  componentDidMount() {
    axiosInstance
      .get('/profile')
      .then(({ data: info }) => this.setState({ ...info }))
  }

  toggleModal = () => this.setState({ open: !this.state.open })

  handleInput = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    const { company_name, country, phone_num } = this.state
    const obj = { company_name, country, phone_num }
    console.log(obj)
    axiosInstance
      .put('/profile', obj)
      .then(res => console.log(res.data.user))
      .then(
        this.setState({
          open: false,
          company_name: '',
          country: '',
          phone_num: '',
        })
      )
  }

  render() {
    const { toggleModal, handleSubmit, handleInput } = this
    const { open } = this.state
    const { company_name, country, phone_num } = this.state

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={toggleModal}>
          Edit User Details
        </Button>
        <Dialog
          open={open}
          onClose={toggleModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Update your user info
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To create your new workflow we just need some basic info.
            </DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              label="Company name"
              name="company_name"
              type="text"
              fullWidth
              value={company_name}
              onChange={handleInput}
            />
            <TextField
              margin="dense"
              name="country"
              label="Country"
              type="text"
              fullWidth
              value={country}
              onChange={handleInput}
            />
            <TextField
              margin="dense"
              name="phone_num"
              label="Phone Number"
              type="phone_num"
              fullWidth
              value={phone_num}
              onChange={handleInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create Workflow
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
