import React from 'react'
import './Hero.css'
import HeroNav from './HeroNav'
const Hero = () => {
  return (
    <>
    <div className="hero-container">
        <HeroNav/>
        <div className="hero-content">
            <h1>Welcome to Todo Adv!</h1>
            <p>A simple, efficient, and user-friendly todo app.</p>
        </div>
    </div>
    </>
  )
}

export default Hero