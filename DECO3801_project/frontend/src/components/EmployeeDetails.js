import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ContentHolder from './Content';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EmployeeDetail = () => {

    const [employee, setEmployee] = useState([])

    const {emp_no} = useParams();
    const history = useNavigate();

    useEffect(() => {
        getSingleEmployee();
    },[])


    const getSingleEmployee = async () => {
      const  { data } = await axios.get(`http://127.0.0.1:8000/api/employees/${emp_no}/`)
      console.log(data);
      setEmployee(data);


    }

    const deleteUser = async (emp_no) => {
        await axios.delete(`http://127.0.0.1:8000/api/employees/${emp_no}/`)
        history.push("/")
    }



    return (
        <div>
            <ContentHolder>
                <h2>Detail of Single Employee</h2>
                <hr></hr>
                <ArrowBackIcon
                    className='back'
                    onClick={() => history(-1)}
                    aria-hidden="true"
                ></ArrowBackIcon>
                <div>
                    <div>
                        <p>{employee.emp_no}</p>
                        <p>{employee.first_name}</p>
                        <p>{employee.last_name}</p>
                        <p>{employee.hire_date}</p>
                    </div>
                </div>

                <Link className="btn btn-outline-primary mr-2" to={`/employee/${emp_no}/update`}>Update</Link>
                <Link className="btn btn-danger" onClick={() => deleteUser(employee.emp_no)}>Delete</Link>
            </ContentHolder>
        </div>
    );
};

export default EmployeeDetail;