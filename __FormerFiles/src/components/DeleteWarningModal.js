/* eslint-disable react/prop-types */
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { deleteResponse } from 'actions/responsesActions'

const DeleteWarningModal = props => (
  <Dialog
    open={props.open}
    onClose={() => props.onClose(false)}
    aria-label="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{props.subtitle}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => props.onClose(false)}
        color="primary"
        variant="outlined"
      >
        Cancel
      </Button>
      <Button
        onClick={() => {
          props.deleteResponse()
          props.onClose(false)
        }}
        color="primary"
        variant="contained"
      >
        delete
      </Button>
    </DialogActions>
  </Dialog>
)

export default connect(
  null,
  { deleteResponse }
)(DeleteWarningModal)
