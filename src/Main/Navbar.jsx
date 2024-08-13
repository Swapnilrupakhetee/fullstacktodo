import React from 'react'
import './Dashboard.css'
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import swapnil from '../assets/swapnil.jpeg'
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="dnav-container">
        <div className="dnav-content">
            <div className="dnav-links">
                <div className="dnav-link"><GoHome /></div>
                <div className="dnav-link"><IoStatsChartOutline /></div>
                <div className="dnav-link"><IoSettingsOutline /></div>
                <div className="dnav-link"><MdOutlineLightMode /></div>
                <div className="dnav-link"><img src={swapnil} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar