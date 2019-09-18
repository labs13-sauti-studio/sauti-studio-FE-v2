import React from "react";

import LoginModal from "../components/LoginModal";
import Navbar from "../components/Navbar";

class LoginPage extends React.Component {
  render() {
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
