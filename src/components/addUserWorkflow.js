/* eslint-disable react/destructuring-assignment */
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
  toggleWorkflowModal,
  closeWorkflowModal,
  addUserWorkflow,
} from 'actions'
import InfoPopup from '@/InfoPopup'

class NewWorkflowModel extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      category: '',
    }
  }

  toggleModal = () => this.props.dispatch(toggleWorkflowModal(!this.props.open))

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, category } = this.state
    const obj = { name, category }
    const { dispatch } = this.props

    dispatch(addUserWorkflow(obj))
    dispatch(closeWorkflowModal())
  }

  render() {
    const { toggleModal, handleSubmit, handleInput } = this
    const { open } = this.props
    const { name, category } = this.state
    return (
      <Dialog
        open={open}
        onClose={toggleModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Create your new workflow
        </DialogTitle>
        <DialogContent>
          <InfoPopup
            left="90%"
            top="20px"
            style={{ position: 'relative' }}
            popOverText={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            }
          />
          <DialogContentText>
            To create your new workflow we just need some basic info.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Workflow Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleInput}
          />
          <TextField
            margin="dense"
            name="category"
            label="Category"
            type="text"
            fullWidth
            value={category}
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
    )
  }
}

NewWorkflowModel.propTypes = {
  open: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(
  state => ({ open: state.ui.isAddingNewWorkflow }),
  null
)(NewWorkflowModel)
