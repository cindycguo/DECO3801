import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

const SessionUpcoming = () => {

    const [sessions, setSessions] = useState([])
    const history = useNavigate();

    const fetchSessions = async () => {
        const result = await axios.get('http://localhost:8000/api/sessions/');

        result.data = result.data.filter(item => (item.status == "ACT"));
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
            <div className="">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Session</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th></th>
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
                        <td><Link to={`/newsessions/current/${session.id}/`}><Button>Start</Button></Link></td>
                        <td><Link to={`/newsessions/${session.id}`}><Button>Edit</Button></Link></td>
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

export default SessionUpcoming;