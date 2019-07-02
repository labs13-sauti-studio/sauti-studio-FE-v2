import React from 'react'
import axios from 'axios' // For making client request.
import Button from '@material-ui/core/Button'

const btnBG = {
  backgroundColor: '#E74C3D',
  color: 'white',
}
const divMarg = {
  margin: '12px',
}
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleForm = e => {
    axios
      .post(
        // need to make an account for Sauti Studio
        'https://formcarry.com/s/yourFormId',
        this.state,
        { headers: { Accept: 'application/json' } }
      )
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })

    e.preventDefault()
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div style={divMarg}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={this.handleFields}
          />
        </div>

        <div style={divMarg}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={this.handleFields}
          />
        </div>
        <div style={divMarg}>
          <label htmlFor="message"></label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message"
            onChange={this.handleFields}
          ></textarea>
        </div>

        <Button type="submit" variant="outlined" color="primary" style={btnBG}>
          Send
        </Button>
      </form>
    )
  }
}

export default Form
