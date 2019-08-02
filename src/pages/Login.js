import React from "react";
import "../sass/index.css"
import LoginModal from "../components/Modal";
import Navbar from "../components/Navbar";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.reviewsey);

    return (
      <div>
        <Navbar />
        <div className="home-content2">
          <LoginModal />
        </div>
      </div>
    );
  }
}

export default LoginPage;
