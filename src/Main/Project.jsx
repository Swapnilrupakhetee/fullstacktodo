import React, { useState, useEffect, useContext } from 'react';
import Lottie from 'react-lottie';
import { BsPlusSquareDotted } from "react-icons/bs";
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Project.css';
import addvid from '../assets/add.json';
import { ThemeContext } from '../Context/ThemeContext';

const Project = () => {

    const {isDarkMode,toggleTheme}=useContext(ThemeContext);

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [{ name: 'Default Project' }];
  });
  const [showModal, setShowModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: addvid,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (newProjectName.trim() !== '') {
      const updatedProjects = [...projects, { name: newProjectName }];
      setProjects(updatedProjects);
      setNewProjectName('');
      setShowModal(false);
    }
  };

  return (
    <div className="project-container">
      <div className="project-content">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/project/${project.name}`}
            className="project-info"
          >
            <div className="project-name">{project.name}</div>
            <div className="project-icon">
              <BsPlusSquareDotted />
            </div>
          </Link>
        ))}
        <div className="new-project" onClick={() => setShowModal(true)}>
          <div className="new-project-text">
            <Lottie options={defaultOptions} height={50} width={50} />
            New Project
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              placeholder="Enter project name"
            />
            <button onClick={addProject} className='modaladd'>Add Project</button>
            <button onClick={() => setShowModal(false)} className='modalcancel'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
