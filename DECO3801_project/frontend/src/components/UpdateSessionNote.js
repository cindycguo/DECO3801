import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/Session.css'

const UpdateSessionNote = () => {

    let history = useNavigate();
    const { id } = useParams();

    const [notes, setNotes] = useState(null)
    const [name, setName] = useState(null)
    const [start_date, setStartDate] = useState(null)
    const [end_date, setEndDate] = useState(null)

    useEffect(() => {
        loadSessions();
    }, [])

    let loadSessions = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/sessions/${id}`);
        console.log(result.data.notes);
        setName(result.data.name);
        setStartDate(result.data.start_date);
        setEndDate(result.data.end_date);
        setNotes(result.data.notes);
    }

    const updateSingleSession = async () => {
        let formField = new FormData()

        formField.append('notes',notes)
        formField.append('name',name)
        formField.append('start_date',start_date)
        formField.append('end_date',end_date)

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
            <h2 className="text-center mb-4">Update Session Note</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter note"
                  name="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <button onClick={updateSingleSession}>Update Session</button>
          </div>
        </div>

    );
};

export default UpdateSessionNote;