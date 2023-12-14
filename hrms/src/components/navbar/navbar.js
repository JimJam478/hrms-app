import {  NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink to={'/home'} className="navbar-brand">HRMS</NavLink>
      <NavLink to={'/employees'} className="navbar-brand">Employees</NavLink>
      <NavLink to={'/about'} className="navbar-brand">About</NavLink>
    </div>
  </nav>
  );
}

export function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={'/home'} className="navbar-brand">HRMS</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to={'/employees'} className="nav-link" aria-current="page">Employees</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link">About</NavLink>
            </li>
            </ul>
        </div>  
      </div>
    </nav>
    );
}