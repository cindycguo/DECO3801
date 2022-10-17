import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UpdateSession = () => {

    let history = useNavigate();
    const { id } = useParams();

    const [recording, setRecording] = useState(null)


    useEffect(() => {
        loadSessions();
    }, [])

    let loadSessions = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/sessions/${id}`);
        console.log(result.data.name);

        setName(result.data.name);
        setStartDate(result.data.start_date);
        setEndDate(result.data.end_date);
    }

    const updateSingleSession = async () => {
        let formField = new FormData()

        formField.append('recording',recording)

        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/sessions/${id}/`,
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
            <h2 className="text-center mb-4">Upload A Session Recording</h2>

              <div className="form-group">
                <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="Attach recording"
                  name="recording"
                  value={recording}
                  onChange={(e) => setRecording(e.target.value)}
                />
              </div>
              <button onClick={updateSingleSession}>Update Session</button>
          </div>
        </div>

    );
};

export default UpdateSession;