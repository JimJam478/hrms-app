import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetails from "../employeedetails/employeedetails";
import axios from "axios";
import './leaveform.css'

const LeaveForm = ({ onLeaveSubmit }) => {
  const { id } = useParams();
  const [leaveData, setLeaveData] = useState({ date: "", reason: "" });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setLeaveData({ ...leaveData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/employees/${id}`,
        leaveData, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Leave submitted successfully");
        onLeaveSubmit();
      } else {
        alert("Failed to submit leave", response.data.message); 
      }
    } catch (error) {
      alert("Leave already taken", error);
    }
  };

  return (
    <div>
    <h3 id="header"> Add leave: </h3>
    <br />
    <form onSubmit={handleSubmit} method={"post"} className="row g-3 needs-validation">
        <div className="col-md-4">
          <label style={{color: "aliceblue",fontWeight: "bold"}} for="validationCustom01">Date: </label>
            <div style={{paddingLeft: "100px"}} className="input-group has-validation">
              <input type={"date"} className="form-control" id="validationCustom01" name="date" value={leaveData.date} onChange={handleFormInput} required />
            </div>
        </div>
        <div className="col-md-4">
          <label style={{paddingLeft: "25px",color: "aliceblue",fontWeight: "bold"}} for="validationCustom02">Reason: </label>
            <div style={{paddingLeft: "100px"}} className="input-group has-validation">
              <input type="text" className="form-control" id="validationCustom02" value={leaveData.reason} name="reason" onChange={handleFormInput} required />
            </div>
        </div>
       <div style={{paddingLeft: "290px"}} className="col-10">
          <button className="btn btn-outline-light" type="submit">Submit</button>
      </div>
      </form>
  </div>
  );
};

export default LeaveForm;