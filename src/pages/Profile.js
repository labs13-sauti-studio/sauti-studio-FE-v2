import React from 'react';
import { connect } from "react-redux";

import { getProjectsByUserId,addProjectByUserId,setProjectId,setUserId } from "../actions";

import Navbar from '../components/Navbar';
class Profile extends React.Component {
  state={
    // local State Projects
    projects: null
  }

  getCookies = () =>{
    let pairs = document.cookie.split(";");
    let cookies = {};
    for (let i=0; i<pairs.length; i++){
      let pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
  }

  componentDidMount(){
    // let user_id = Number(this.getCookies().user_id);
    let user_id = Number(window.location.pathname.split("/").pop());
    console.log("user_id",user_id);
    // On page load request users projects 
    if(user_id){
      if(this.props.user_id !== null && (this.props.user_id === user_id)){
        this.props.getProjectsByUserId(this.props.user_id);
      }
      if(this.props.user_id !== user_id){
        this.props.setUserId(user_id, true);
      }
    }else if(!user_id || this.props.loggedIn === false){
      this.props.history.push("/");
    }
 
  }

  componentDidUpdate(prevProps, prevState){
    let user_id = Number(window.location.pathname.split("/").pop());
    console.log("user_id",user_id);
    if(user_id){
      // On Create New Project: request projects
      if(this.props.added_project !== prevProps.added_project && !this.props.added_project){
        this.props.getProjectsByUserId(this.props.user_id);
      }
      // Update project state on modification of props projects
      else if(this.props.projects !== prevProps.projects && !this.props.fetching){
          this.setState({
            ...this.state,
            projects: this.props.projects
          });
      }
      // On selection of a project an ID is place on redux state and then update routing to project page
      else if(this.props.fetchingProjectId !== prevProps.fetchingProjectId && this.props.fetchingProjectId === false){
        this.props.history.push("/workflows");
      }
      if(this.props.user_id !== prevProps.user_id){
        this.props.getProjectsByUserId(this.props.user_id);
      }
    }else{
      this.props.history.push("/");
    }
  }
  
  // Create New Project
  addProject = (obj) => {
    let {project_title, graph_json, user_id, initial_node_id} = obj;
    let projectsArray = this.state.projects || [];
    projectsArray.push({
      add: "Adding Project"
    });
    this.setState({
      ...this.state,
      projects: projectsArray
    });
    this.props.addProjectByUserId(
      {
        project_title,
        graph_json,
        user_id,
        initial_node_id
      }
    )
  }

  render(){
      return (
        <>
        <Navbar/>
        <div className="profile-page-container">
          <section className="projects-section">
            <div className="projects-title-add">
              <h2>Projects</h2>
              <div 
                className="btn"
                title="Add Project"
                onClick={()=>this.addProject(
                  {
                    project_title: "Enter Title...",
                    graph_json: null,
                    user_id: this.props.user_id,
                    initial_node_id: null
                  }
                )}
              >
                <i className="fas fa-plus-square"></i>
              </div>
            </div>
            {
              (this.props.fetching || this.props.projects === null || this.state.projects === null)?(
                // On Loading Provide Temporary Loading Screen 
                <p>Loading Projects...</p>
                ):(
                // Loading False
                <div className="projects-list">
                  {this.state.projects.map(project => {
                    if(project.add !== undefined){
                      return <div 
                    >
                    <div className="title-container">
                      <h3>{ project.add }</h3>
                    </div>
                  </div>
                    }else{
                    return <div 
                    className="project"
                    key={project.id}
                    onClick={
                      ()=> this.props.setProjectId(project.id)
                    }
                    >
                    <div className="title-container">
                      <h3>{ project.project_title }</h3>
                    </div>
                  </div>
                    }
                  })}
                </div>
              )
            }
          </section>
        </div>
      </>
    )
  }
}

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
)(Profile); 
