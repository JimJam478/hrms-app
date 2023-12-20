import React, { useState, useEffect } from 'react';
import './employeelist.css'
import axios from "axios";
import { Link } from 'react-router-dom';

const baseURL = "http://localhost:5000/employees"

export default function EmployeeList() {
  const [employees, setEmployees] = useState(null);
  const fetchData = async () => {
    axios.get(baseURL).then((response) => {
      setEmployees(response.data);
      console.log(employees)
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!employees) return null;

  return (
    <div className='col-left'>
      <h3 className='header'> Employees</h3>
      <div id="scroll">
        {employees.map((data, index) => (<p id="empList" className="emp" key={index} >
          {index + 1}. <Link id="link-style" to={`/employees/${data.id}`}>
            {data.fname} {data.lname} </Link></p>))}
      </div>
    </div>
  );
}

export function EmployeeList2() {

  const [employees, setEmployees] = useState(null);

  const fetchData = async () => {
    axios.get(baseURL).then((response) => {
      setEmployees(response.data);
      console.log(employees)
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!employees) return null;

  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className='header'> Employees</h3>
              <div id="scroll">
                {employees.map((data, index) => (<p className="emp" key={index} >
                  {index + 1}. <Link id="link-style" to={`/employees/${data.id}`}>
                    {data.fname} {data.lname} </Link></p>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
