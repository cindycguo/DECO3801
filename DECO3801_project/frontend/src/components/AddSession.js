import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddSession = () => {

    let history = useNavigate();

    const [name, setName] = useState(null)
    const [start_date, setStartDate] = useState(null)
    const [end_date, setEndDate] = useState(null)


    const addNewSession = async () => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('start_date',start_date)
        formField.append('end_date',end_date)

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/',
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
                    <h2>Add New Session</h2>

                    <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                          type="datetime"
                          className="form-control form-control-lg"
                          placeholder="Enter Your start date"
                          name="start_date"
                          value={start_date}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="datetime"
                          className="form-control form-control-lg"
                          placeholder="Enter Your end date"
                          name="end_date"
                          value={end_date}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary btn-block" onClick={addNewSession}>Add Session</button>
                </div>
            </div>
        </div>
    );
};

export default AddSession;