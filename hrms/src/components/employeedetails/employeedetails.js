import React,{ useState, useEffect} from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeList from '../employeelist/employeelist';
import "./employeedetails.css";
import LeaveForm from '../leaveform/leaveform';
import { Navigation } from '../navigation/navigation';



export default function EmployeeDetails() {
    const {id} = useParams()
    const URL = `http://localhost:5000/employees/${id}`;
    const navigate = useNavigate();
    console.log(id)
    const [employeeData, setEmployeeData] = useState(null);
    const [error, setError] = useState(false);
    const [newEmployeeDetails, setNewEmployeeDetails] = useState(false);
    
    useEffect(() => {
      if (id) {
        axios.get(URL).then((response) => {
          setEmployeeData(response.data);
          setError(false);
          })
          .catch((error) => {
            setError(true);
            console.error('Error fetching employee data:', error);
          });
        }
    }, [id,newEmployeeDetails, URL]); 

    const handleNewEmployeeDetails = () => {
      setNewEmployeeDetails(prevState => !prevState);
    };

    if (error) {
      navigate('/error');
      return null;
    }

    if (!employeeData) return null; 
   

    return (
      <div className='container'>
            <div className="row">
                <div className="col-3">
                    <div className="card mb-4">
                        <div className="card-body">
                          <EmployeeList />
                        </div>
                    </div>
                </div>
                <div className="col-7">
                  {employeeData.map((data) => (
                  <div> 
                    <div>
                      <br />  
                        <h1 id='header'> Details for {data.fname} {data.lname}</h1>
                        <h2 id='header'> {data.title} </h2>
                      <br />
                        <div id="tables">
                        <div id='table'>
                        <table>
                          <tr>
                            <th id='emp'> First name: </th>
                            <td id='emp-detail'> {data.fname}</td>
                          </tr>
                          <tr>
                            <th id='emp'> Last name: </th>
                            <td id='emp-detail'> {data.lname}</td>
                          </tr>
                          <tr>
                            <th id='emp'> Email: </th>
                            <td id='emp-detail'> {data.email}</td>
                          </tr>
                          <tr>
                            <th id='emp'> Phone: </th>
                            <td id='emp-detail'> {data.phone}</td>
                          </tr>
                      </table>
                      <br />
                        <h3 id="leave"> Leave Details </h3>
                        <br />
                        <table>
                          <tr>  
                            <th id='emp'> Total Leaves:   </th>
                            <td id='emp-detail'> {data.total_leaves}</td>
                          </tr>
                          <tr>
                            <th id='emp'> Leaves Taken:  </th>
                            <td id='emp-detail'> {data.leaves_taken}</td>
                          </tr>
                          <tr>
                            <th id='emp'> Leaves Remaining: </th>
                            <td id='emp-detail'> {data.leaves_remaining}</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
              </div>) )}
              <br />
              <LeaveForm onLeaveSubmit={handleNewEmployeeDetails} />
              <br />
              <Navigation />      
            </div>
          </div>
        </div>
    )
}
