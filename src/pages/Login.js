import React from "react"
import "../App.css"
import LoginModal from "../components/Modal";

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.reviewsey)

    return (
      <div className="home1b">
        <LoginModal />
      </div>
    )
  }
}

export default LoginPage
