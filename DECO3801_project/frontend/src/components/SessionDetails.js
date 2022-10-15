import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ContentHolder from './Content';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const SessionDetail = () => {

const [session, setSession] = useState([])

const {id} = useParams();
const history = useNavigate();

useEffect(() => {
    getSingleSession();
},[])


const getSingleSession = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
  console.log(data);
  setSession(data);


}

const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
    history.push("/")
}



    return (
        <div>
            <ContentHolder>
                <h2>Detail of Single Session </h2>
                <hr></hr>
                <div>
                    <div>
                        <p>{session.id}</p>
                        <p>{session.name}</p>
                        <p>{session.start_date}</p>
                        <p>{session.end_date}</p>
                    </div>
                </div>

                <Link className="btn btn-outline-primary mr-2" to={`/postsessions/${session.id}/update`}>Update</Link>
                <Link className="btn btn-danger" onClick={() => deleteUser(session.id)}>Delete</Link>
            </ContentHolder>
        </div>
    );
};

export default SessionDetail;