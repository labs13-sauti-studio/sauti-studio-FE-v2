import React from "react"
import "../App.css"
import LoginModal from "../components/Modal";
import Navbar from "../components/Navbar";


class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log(this.props.reviewsey)

    return (
      <div>
        <Navbar/>
      <div className="home1b">
        <LoginModal />
      </div>
      </div>

    )
  }
}

export default LoginPage
