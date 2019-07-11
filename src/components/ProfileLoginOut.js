import React from "react"
import "../App.css"

import { Link } from "react-router-dom"

const ProfileLoginOut = () => {
  return (
    <div>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login Thingy!</Link>
    </div>
  )
}

export default ProfileLoginOut
