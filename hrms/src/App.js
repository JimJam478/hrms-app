import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import EmployeeDetails from './components/employeedetails/employeedetails';
import About from './components/about/about';
import { Navigate } from "react-router-dom";
import { EmployeeList2 } from './components/employeelist/employeelist';
import ErrorPage from './components/error/error';

function App() {
  return (
    <div className="App">
        <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<EmployeeList2/>} /> 
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
      <Route path="/employees/:id" element={<EmployeeDetails />}
          render={({ params }) => <EmployeeDetails id={params.id} />}
        />
    </Routes> 
      
    </div>
  );
}

export default App;
