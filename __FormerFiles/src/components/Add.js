// Import the hook first
import React, { useState } from 'react'

const AddItemPopup = ({ open, closePopup, saveItem }) => {
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const addItem = () => {
    const { name, quantity, unitCost } = values

    if (!name || !quantity || !unitCost) return

    saveItem(values)
  }
  // Declare our state variable called values
  // Initialize with our default values

  const [values, setValues] = useState({ name: '', quantity: 0, unitCost: 0 })
  return (
    <Dialog open={open} onClose={closePopup}>
      <DialogTitle>Add new item</DialogTitle>
      <DialogContent>
        <TextField
          name="name"
          label="Item name/Description"
          onChange={handleInputChange}
          value={values.name}
        />
        <TextField
          name="quantity"
          label="Quantity"
          onChange={handleInputChange}
          value={values.quantity}
        />
        <TextField
          name="unitCost"
          label="Unit Cost"
          onChange={handleInputChange}
          value={values.unitCost}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closePopup} color="secondary" variant="contained">
          Cancel
        </Button>
        <Button onClick={addItem} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddItemPopup
