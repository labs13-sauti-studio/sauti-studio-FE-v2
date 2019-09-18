import React from "react";
import { connect } from "react-redux";

import { getProjectsByUserId,addProjectByUserId,setProjectId,setUserId } from "../actions";

import { Link } from "react-router-dom";



class ProfileLoginOut extends React.Component {

  setCookie = (key, value, expireDays, expireHours, expireMinutes, expireSeconds) => {
    var expireDate = new Date();
    if (expireDays) {
        expireDate.setDate(expireDate.getDate() + expireDays);
    }
    if (expireHours) {
        expireDate.setHours(expireDate.getHours() + expireHours);
    }
    if (expireMinutes) {
        expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
    }
    if (expireSeconds) {
        expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
    }
    document.cookie = key +"="+ escape(value) +
        ";domain="+ window.location.hostname +
        ";path=/"+
        ";expires="+expireDate.toUTCString();
}

deleteCookie = (name) => {
    this.setCookie(name, "", null , null , null, 1);
    this.props.setUserId(null, false);
}

  render(){
    return (
      <div className="navbar-links">
        {(this.props.loggedIn === false)?(
        <Link to="/login">Login</Link>
        ):(
        <>
        <Link to={`/profile/${this.props.user_id}`}>Profile</Link>
        <Link to="/" onClick={()=>this.deleteCookie("user_id")}>
          Log Out
        </Link>
        </>
        )}
      </div>
    );
  }
};

// export default ProfileLoginOut;

// Global Redux State
const mapStateToProps = state => ({
  user_id: state.user_id,
  projects: state.projects,
  project_id: state.project_id,
  added_project: state.added_project,
  project_title: state.project_title,
  graph_json: state.graph_json,
  fetching: state.fetching,
  error: state.error,
  loggedIn: state.loggedIn,
  fetchingProjectId: state.fetchingProjectId
});

// Connecting State and Rdux Reducer Methods
export default connect(
  mapStateToProps,
  { getProjectsByUserId, addProjectByUserId, setProjectId, setUserId }
)(ProfileLoginOut); 
