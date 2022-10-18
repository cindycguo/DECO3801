import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from '../components/Content';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import '../components/css/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import SessionUpcoming from '../components/SessionUpcoming';
import { useNavigate } from 'react-router-dom';
import ShowSessions from '../components/ShowSessions';

function Home() {

  const [date, setDate] = useState(new Date()) 
  const navigate = useNavigate();


  return (

    <ContentHolder>
      <Container style={{marginTop: "50px"}}>
        <h1> Upcoming Sessions </h1>
        <hr></hr>
        <Table striped>
        <tbody>
          <SessionUpcoming></SessionUpcoming>
        </tbody>
        </Table>
        <hr></hr>
        <h1 className='calenderTitle'> My Calender </h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date}/>
        </div>
      </Container>    
    </ContentHolder>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;