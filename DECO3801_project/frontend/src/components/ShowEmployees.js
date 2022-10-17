import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ShowEmployees = () => {

    const [employees, setEmployees] = useState([])
    const history = useNavigate();

    const fetchEmployees = async () => {
        const result = await axios.get('http://localhost:8000/api/employees/');

        console.log(result.data)
        setEmployees(result.data)
    }

    useEffect(() => {
        fetchEmployees();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }

    return (
        <div>
            <ArrowBackIcon
                className='back'
                onClick={() => history(-1)}
                aria-hidden="true"
            ></ArrowBackIcon>
            <div className="">
            {
                employees.map((employee, index) => (
                    <Card className="m-3 rounded shadow-lg" style={{ width: '22em' }}>
                    <Card.Body>
                        <Card.Title>{employee.first_name}</Card.Title>
                        <Card.Text> {employee.last_name} </Card.Text>
                        <Card.Text> {employee.emp_no} </Card.Text>
                        <Card.Text> {employee.hire_date} </Card.Text>
                        <Link className="btn btn-primary mr-2" to={`/employee/${employee.emp_no}`}>Full Detail</Link>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    );
};

export default ShowEmployees;