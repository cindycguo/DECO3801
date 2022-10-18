import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

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

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
        <div>
            <ArrowBackIcon
                className='back'
                onClick={() => history(-1)}
                aria-hidden="true"
            ></ArrowBackIcon>
            
            <div className="">
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User ID</th>
                        <th>Employee</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
        
            {
                employees.map((employee, index) => (
                    <tbody>
                        <tr>
                            <td>{employee.emp_no}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td><Button>Edit</Button></td>
                            <td><Button>History</Button></td>
                            <td>
                                <Button variant="primary" onClick={() => setModalShow(true)}>View Session</Button>
                                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
            </Table>
            </div>
        </div>
        </>
    );
};

function MyVerticallyCenteredModal(props) {
  

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Starting Sessions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Do you want to start the Sessions</h4>
          <p>
            some info
          </p >
        </Modal.Body>
        <Modal.Footer>
          <Button>Yes</Button>
          <Button onClick={props.onHide}>No</Button>
        </Modal.Footer>
        
      </Modal>
    );
}

export default ShowEmployees;