import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar2 } from './components/navbar/navbar';
import Home from './components/home/home';
import Employees from './components/employees/employees';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
        <Navbar2 />
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/employees" element={<Employees />} /> 
        <Route path="/about" element={<About />} />
      </Routes>  
    </div>
  );
}

export default App;
