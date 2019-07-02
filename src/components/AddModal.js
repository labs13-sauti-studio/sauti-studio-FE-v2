import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const AddModal = props => (
  <div>
    <Dialog
      open={props.open}
      onClose={() => props.onClose(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">RESPONSES</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="response"
          type="text"
          fullWidth
        />
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
          onClick={() => console.log('ADD')}
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  </div>
)

export default AddModal
