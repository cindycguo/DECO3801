import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

const ShowSessions = () => {

    const [sessions, setSessions] = useState([])
    const history = useNavigate();

    const fetchSessions = async () => {
        const result = await axios.get('http://localhost:8000/api/sessions/');

        console.log(result.data)
        setSessions(result.data)
    }

    useEffect(() => {
        fetchSessions();
    }, [])

    const goToDetail = () => {
        alert("detail page")
    }

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
                            <th>Session</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Employee</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
            {
                sessions.map((session, index) => (
                    <tbody>
                    <tr>
                        <td>{session.name}</td>
                        <td>{session.start_date}</td>
                        <td>{session.end_date}</td>
                        <td><Button>Start</Button></td>
                        <td><Button>Edit</Button></td>
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

export default ShowSessions;