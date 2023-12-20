import { NavLink } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <NavLink to={'/'} className="navbar-brand">HRMS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink id='link' to={'/employees'} className="nav-link" aria-current="page">Employees</NavLink>
              </li>
              <li className="nav-item">
                <NavLink id='link' to={'/about'} className="nav-link">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}