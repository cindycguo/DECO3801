import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'

const UpdateSession = () => {

    let history = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState(null)
    const [start_date, setStartDate] = useState(null)
    const [end_date, setEndDate] = useState(null)
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
        setRecording(result.data.recording);
    }

    const updateSingleSession = async () => {
        let formField = new FormData()

        formField.append('name',name)
        formField.append('start_date',start_date)
        formField.append('end_date',end_date)
        formField.append('recording', recording)


        await axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/api/sessions/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            this.prop.history.push("/");
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
            <h2 className="text-center mb-4">Update A Session</h2>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control form-control-lg"
                  placeholder="Enter Your file"
                  onChange={(e) => setRecording(e.target.files[0])}
                />
              </div>

              <div className="form-group">
                <input
                  type="datetime"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Start Date"
                  name="start_date"
                  value={start_date}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="datetime"
                  className="form-control form-control-lg"
                  placeholder="Enter Your End Date"
                  name="end_date"
                  value={end_date}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <button onClick={updateSingleSession}>Update Session</button>
          </div>
        </div>

    );
};

export default UpdateSession;