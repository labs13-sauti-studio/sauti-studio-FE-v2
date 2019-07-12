import React from "react"
import "../App.css"

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.reviewsey)

    return (
      <div className="home1b">
        <h1>Login Page</h1>
      </div>
    )
  }
}

export default LoginPage
