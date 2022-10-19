import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'
import NoteContent from "./NoteContent";
import UpdateSessionNote from "./UpdateSessionNote";

const SessionDetail2 = () => {
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


    return (
        <div>
            <ContentHolder>
                <h2>Single Session {session.name}</h2>
                <hr></hr>
                <ArrowBackIcon 
                    className='back'
                    onClick={() => history(-1)}
                    aria-hidden="true"
                ></ArrowBackIcon>
                <div>
                    <div>
                    </div>
                </div>
                <CaptureVideo></CaptureVideo>
                <Link to={`/postsessions/${session.id}`}>End Session</Link>
                <p id="para"></p>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
                <VoiceRecog></VoiceRecog>
                <video style={{display: 'none'}} id="recording" controls width="320"></video><br/>
                <a id="down" download>test</a>

                <UpdateSessionNote></UpdateSessionNote>
            </ContentHolder>
        </div>
    );
};

export default SessionDetail2;