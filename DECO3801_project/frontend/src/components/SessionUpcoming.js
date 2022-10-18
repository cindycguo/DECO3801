import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <div>
            <ArrowBackIcon
                className='back'
                onClick={() => history(-1)}
                aria-hidden="true"
            ></ArrowBackIcon>
            <div className="">
            {
                sessions.map((session, index) => (
                    <Card className="m-3 rounded shadow-lg" style={{ width: '22em' }}>
                    <Card.Body>
                        <Card.Title>{session.name}</Card.Title>
                        <Card.Text> {session.start_date} </Card.Text>
                        <Card.Text> {session.end_date} </Card.Text>
                        <Link className="btn btn-primary mr-2" to={`/postsessions/${session.id}`}>Full Detail</Link>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    );
};

export default SessionUpcoming;