import { Routes, Route } from 'react-router-dom';
import HeroNav from './HeroSection/HeroNav';
import Dashboard from './Main/Dashboard';
import Project from './Main/Project';
import ProjectDetails from './Main/ProjectDetail';
import ThemeProvider from './Context/ThemeContext';


function App() {
  return (
    <ThemeProvider>

  
    <Routes>
      <Route exact path="/" element={<HeroNav/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      
      <Route path="/project/:projectName" element={<ProjectDetails/>} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
