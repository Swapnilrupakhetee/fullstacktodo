import { Routes, Route } from 'react-router-dom';
import HeroNav from './HeroSection/HeroNav';
import Dashboard from './Main/Dashboard';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HeroNav/>} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
