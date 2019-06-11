/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { axiosInstance } from '../helpers'

export default class NewWorkflowModel extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
      name: '',
      area_code: '',
      category: '',
      client_id: '',
      question_id: '',
    }
  }

  toggleModal = e => this.setState({ open: !this.state.open })

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, area_code, category, client_id, question_id } = this.state
    const obj = { name, area_code, category, client_id, question_id }
    axiosInstance.post('/workflows', obj).then(res => console.log(res))
  }

  render() {
    const { toggleModal, handleSubmit, handleInput } = this
    const { open } = this.state
    const { name, area_code, category, client_id, question_id } = this.state

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={toggleModal}>
          Create a new workflow
        </Button>
        <Dialog
          open={open}
          onClose={toggleModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create your new workflow
          </DialogTitle>
          <DialogContent>
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
              name="area_code"
              label="Area Code"
              type="text"
              fullWidth
              value={area_code}
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
            <TextField
              margin="dense"
              name="client_id"
              label="Client ID"
              type="text"
              fullWidth
              value={client_id}
              onChange={handleInput}
            />
            <TextField
              margin="dense"
              name="question_id"
              label="Question ID"
              type="text"
              fullWidth
              value={question_id}
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
