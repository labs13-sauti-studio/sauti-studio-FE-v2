import React from 'react';

import Folder from '../components/Folder';
import Project from '../components/Project';

import blankFolder from '../images/FolderBlank.png';
import blankProject from '../images/ProjectBlank.png';
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
  }
]

const Profile = (props) => {
  return (
    <div>
      <Navbar/>

    <div className="profile-page-container">
      <section className="resources">
        <div>
          <h2>Resources</h2>
          <div className="resources-list">
            {sidebar.map(item => {
              return <Project
                key={item.id}
                title={item.title}
                bgImage={item.backgroundImage}
              />
            })}
          </div>
        </div>
      </section>
      <section className="folders-projects">
        <section className="folders-section">
            <h2>Folders</h2>
            <div className="folders-list">
              {folders.map(folder => {
                return <Folder
                key={folder.id}
                title={folder.title}
                bgImage={folder.backgroundImage}
                />
              })}
            </div>
        </section>

        <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-list">
              {projects.map(project => {
                return <Project
                  key={project.id}
                  title={project.title}
                  bgImage={project.backgroundImage}
                />
              })}
            </div>
        </section>
      </section>
    </div>

    </div>

  )
}

export default Profile;
