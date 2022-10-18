import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddEmployee = () => {

    let history = useNavigate();

    const [emp_no, setEmpNo] = useState(null)
    const [first_name, setFirstName] = useState(null)
    const [last_name, setLastName] = useState(null)


    const addNewEmployee = async () => {
        let formField = new FormData()
        formField.append('emp_no',emp_no)
        formField.append('first_name',first_name)
        formField.append('last_name',last_name)

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/employees/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }

    return (
        <div className="container">
            <div className="container">
                <div>
                    <h2>Add New Employee</h2>

                    <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          placeholder="Enter Employee ID (not required)"
                          name="emp_no"
                          value={emp_no}
                          onChange={(e) => setEmpNo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your First Name"
                          name="first_name"
                          value={first_name}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Last Name"
                          name="last_name"
                          value={last_name}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={addNewEmployee}>Add Employee</button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;