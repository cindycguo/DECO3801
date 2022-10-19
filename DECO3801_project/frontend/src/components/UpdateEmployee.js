import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UpdateEmployee = () => {

    let history = useNavigate();
    const { emp_no } = useParams();

    const [first_name, setFirstName] = useState(null)
    const [last_name, setLastName] = useState(null)


    useEffect(() => {
        loadEmployees();
    }, [])

    let loadEmployees = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/employees/${emp_no}`);

        setFirstName(result.data.first_name);
        setLastName(result.data.last_name);
    }

    const updateSingleEmployee = async () => {
        let formField = new FormData()

        formField.append('first_name',first_name)
        formField.append('last_name',last_name)

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/employees/${emp_no}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })
    }

    return (

        <div className="container">
          <div className="w-75 mx-auto shadow p-5">
            <ArrowBackIcon
                className='back'
                onClick={() => history(-1)}
                aria-hidden="true"
            ></ArrowBackIcon>
            <h2 className="text-center mb-4">Update Employee</h2>

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
              <button onClick={updateSingleEmployee}>Update Employee</button>
          </div>
        </div>

    );
};

export default UpdateEmployee;