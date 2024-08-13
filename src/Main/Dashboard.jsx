import React from 'react'
import './Dashboard.css'
import Navbar from './Navbar'
import Project from './Project'
const Dashboard = () => {
  return (
    <div className="dash-container">
      <div className="dash-content">
        <Navbar/>
        <Project/>

      </div>
    </div>
  )
}

export default Dashboard