import React, { useContext } from 'react';
import './Dashboard.css';
import { GoHome } from "react-icons/go";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import swapnil from '../assets/swapnil.jpeg';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dnav-container">
      <div className="dnav-content">
        <div className="dnav-links">
          <div className="dnav-link"><Link to='/dashboard'><GoHome /></Link></div>
          <div className="dnav-link"><IoStatsChartOutline /></div>
          <div className="dnav-link"><IoSettingsOutline /></div>
          <div className="dnav-link" onClick={toggleTheme}>
            <MdOutlineLightMode style={{ color: isDarkMode ? 'yellow' : 'black' }} />
          </div>
          <div className="dnav-link"><img src={swapnil} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
