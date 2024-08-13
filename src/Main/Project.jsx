import React from 'react';
import Lottie from 'react-lottie';
import { BsPlusSquareDotted } from "react-icons/bs";
import './Project.css';
import addvid from '../assets/add.json';

const Project = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    speed:1000,
    animationData: addvid,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-info">
          <div className="project-name">Default Project</div>
          <div className="project-icon">
            <BsPlusSquareDotted />
          </div>
        </div>
        <div className="new-project">
          <div className="new-project-text">
            <Lottie options={defaultOptions} height={50} width={50} />
             New Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
