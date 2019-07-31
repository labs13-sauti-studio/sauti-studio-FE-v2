import React, { Component } from "react";
import Navbar from "./Navbar";

// import axios from 'axios' // For making client request.
// import Button from '@material-ui/core/Button'

// const btnBG = {
//   backgroundColor: "#E74C3D",
//   color: "white",
// };
// const divMarg = {
//   margin: "15px",
// };
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  // handleForm = e => {
  //   axios
  //     .post(
  //       // need to make an account for Sauti Studio
  //       'https://formcarry.com/s/yourFormId',
  //       this.state,
  //       { headers: { Accept: 'application/json' } }
  //     )
  //     .then(function(response) {
  //       console.log(response)
  //     })
  //     .catch(function(error) {
  //       console.log(error)
  //     })

  //   e.preventDefault()
  // }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Navbar/>
      <div className="contact-form-container">
        <form onSubmit={this.handleForm}>
          <div className="forms-inputs">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={this.handleFields}
            />
          </div>

          <div className="forms-inputs">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={this.handleFields}
            />
          </div>
          <div className="forms-inputs">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message"
              onChange={this.handleFields}
            ></textarea>
          </div>

          <button
            type="submit"
            variant="outlined"
            color="primary"
            className="forms-btn"
          >
            Send
          </button>
        </form>
      </div>
      </div>
    );
  }
}

export default ContactForm;
