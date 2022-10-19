import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ContentHolder from './Content';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'
import NoteContent from "./NoteContent";
import Table from 'react-bootstrap/Table';

const SessionDetail = () => {

    const [session, setSession] = useState([])

    const {id} = useParams();
    const history = useNavigate();

    useEffect(() => {
        getSingleSession();
    },[])


    const getSingleSession = async () => {
      const  { data } = await axios.get(`http://127.0.0.1:8000/api/sessions/${id}/`)
      console.log(data);
      setSession(data);


    }

    const deleteUser = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/sessions/${id}/`)
        history.push("/")
    }



    return (
        <div>
            <ContentHolder>
                <h2>Detail of Single Session </h2>
                <hr></hr>
                <ArrowBackIcon 
                    className='back'
                    onClick={() => history(-1)}
                    aria-hidden="true"
                ></ArrowBackIcon>
                <Table>
                    <thead>
                        <tr>
                            <th>Session ID</th>
                            <th>Session Name</th>
                            <th>Statr Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{session.id}</td>
                            <td>{session.name}</td>
                            <td>{session.start_date}</td>
                            <td>{session.end_date}</td>
                        </tr>
                    </tbody>
                </Table>

                <Link className="btn btn-outline-primary mr-2" to={`/newsessions/${session.id}/update`}>Update</Link>
                <Link className="btn btn-danger" onClick={() => deleteUser(session.id)}>Delete</Link>
            </ContentHolder>
        </div>
    );
};

export default SessionDetail;