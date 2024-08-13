import { Routes, Route } from 'react-router-dom';
import HeroNav from './HeroSection/HeroNav';
import Dashboard from './Main/Dashboard';
import Project from './Main/Project';
import ProjectDetails from './Main/ProjectDetail';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HeroNav/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      
      <Route path="/project/:projectName" element={<ProjectDetails/>} />
    </Routes>
  );
}

export default App;
