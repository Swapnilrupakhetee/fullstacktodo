import { Routes, Route } from 'react-router-dom';
import HeroNav from './HeroSection/HeroNav';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HeroNav/>} />
    </Routes>
  );
}

export default App;
