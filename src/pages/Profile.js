import React, {Fragment} from 'react';

import Folder from '../components/Folder';
import Project from '../components/Project';

import blankFolder from '../images/FolderBlank.png';
import blankProject from '../images/ProjectBlank.png';
import addSign from '../images/icons/plus.png';
import Navbar from '../components/Navbar';


const sidebar = [
  {
    id: 1,
    title: "Tutorials",
    backgroundImage: blankFolder
  },
  {
    id: 2,
    title: "Templates",
    backgroundImage: blankFolder
  },
  {
    id: 3,
    title: "Contact Us",
    backgroundImage: blankFolder
  },
  {
    id: 1,
    title: "Tutorials",
    backgroundImage: blankFolder
  },
  {
    id: 2,
    title: "Templates",
    backgroundImage: blankFolder
  },
  {
    id: 3,
    title: "Contact Us",
    backgroundImage: blankFolder
  }
]

const folders = [
  {
    id: 1,
    title: "Church Apps",
    backgroundImage: blankFolder
  },
  {
    id: 2,
    title: "Recipe Book",
    backgroundImage: blankFolder
  },
  {
    id: 3,
    title: "Personal",
    backgroundImage: blankFolder
  },
  {
    id: 4,
    title: "WIP",
    backgroundImage: blankFolder
  },
  {
    id: 5,
    title: "Trade Network",
    backgroundImage: blankFolder
  },
  {
    id: 6,
    title: "Trade Network",
    backgroundImage: blankFolder
  }
]

const projects = [
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },{
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 1,
    title: "Church Services",
    backgroundImage: blankProject
  },
  {
    id: 2,
    title: "Soccer Scheduler",
    backgroundImage: blankProject
  },
  {
    id: 3,
    title: "Agriculture Network",
    backgroundImage: blankProject
  },
  {
    id: 4,
    title: "And Another",
    backgroundImage: blankProject
  },
  {
    id: 5,
    title: "And Another",
    backgroundImage: blankProject
  }
]

class Profile extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <>
      <Navbar/>
      <div className="profile-page-container">
        <section className="resources-section">
            <h2>Resources</h2>
            <div className="resources-list">
              {sidebar.map(item => {
                return <div 
                  style={{
                    backgroundImage: `url(${blankProject})`,
                    backgroundPosition: "0 0",
                    backgroundSize: "cover"
                    }}
                  className="resource"
                  key={item.id}
                  >
                  <div className="title-container">
                    <h3>{ item.title }</h3>
                  </div>
                </div>
              })}
            </div>
        </section>
        <section className="folders-section">
            <h2>Folders</h2>
            <div className="folders-list">
              {folders.map(folder => {
              return <div 
                style={{
                  backgroundImage: `url(${blankFolder})`,
                  backgroundPosition: "0 0",
                  backgroundSize: "cover"
                  }}
                className="folder"
                key={folder.id}
                >
                <div className="title-container">
                  <h3>{ folder.title }</h3>
                </div>
              </div>
              })}
            </div>
        </section>
        <section className="projects-section">
          <div className="projects-title-add">
            <h2>Projects</h2>
            <button>
              addSign
            </button>
          </div>
          <div className="projects-list">
            {projects.map(project => {
              return <div 
              style={{
                backgroundImage: `url(${blankFolder})`,
                backgroundPosition: "0 0",
                backgroundSize: "cover"
                }}
              className="project"
              key={project.id}
              >
              <div className="title-container">
                <h3>{ project.title }</h3>
              </div>
            </div>
            })}
          </div>
        </section>
      </div>
    </>
  )
}
}

export default Profile;
