import React from 'react'
import logo from '../assets/logo.png'
import { FaArrowRight } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import heroimg from '../assets/heroimg.png'


const HeroNav = () => {
  return (
    <div className="heronav-container ">
      <div className="hero-nav-container">
        <div className="navbar">
          <di className="logo">
            Todo
          </di>
          <div className="hero-cta">
          <div className="login">
              Log in
            </div>
            <div className="signup">
              Sign up
            </div>
            
          </div>
        </div>
        

      </div>
      <div className="hero-message">
        <div className="tiny-title">
        <BsStars className='star'/>  Introducing Todo App
        </div>
        <div className="hero-title">
          Todo is the new way 
          to manage your tasks.
        </div>
        <div className="hero-sub">
          Create, manage, and prioritize your tasks.
          No more clutter, no more stress.
        </div>
        <div className="hero-button">
          Get Started for free <FaArrowRight className='arrow'/>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-img-container">
          <img src={heroimg} alt="" />
        </div>
      </div>
        
           
        
    </div>
  )
}

export default HeroNav