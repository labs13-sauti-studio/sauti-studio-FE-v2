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
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  toggleEditProfileModal,
  closeEditProfileModal,
  updateUserInfo,
} from 'actions'
import { axiosInstance } from 'helpers'

class EditUserDetailsModel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
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
    const { dispatch } = this.props
    const obj = { company_name, country, phone_num }

    dispatch(updateUserInfo(obj))
    dispatch(closeEditProfileModal())
  }

  render() {
    const { handleSubmit, handleInput } = this
    const { isEditingProfile, dispatch } = this.props
    const { company_name, country, phone_num } = this.state

    return (
      <Dialog
        open={isEditingProfile}
        onClose={() => dispatch(closeEditProfileModal())}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update your user info</DialogTitle>
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
          <Button
            onClick={() => dispatch(toggleEditProfileModal(!isEditingProfile))}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update Info
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

EditUserDetailsModel.propTypes = {
  isEditingProfile: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    company_name: state.user.company_name,
    country: state.user.country,
    phone_num: state.user.phone_num,
    isEditingProfile: state.ui.isEditingProfile,
  }),
  null
)(EditUserDetailsModel)
