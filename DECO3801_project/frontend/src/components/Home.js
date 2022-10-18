import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import './css/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import SessionUpcoming from './SessionUpcoming';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Home(props) {

  const [date, setDate] = useState(new Date()) 
  const navigate = useNavigate();


  return (

    <ContentHolder>
      <Container style={{marginTop: "50px"}}>
        <h1> Upcoming Sessions </h1>
        <hr></hr>
        <Table striped>
          <thead>
            <tr>
              <th>Session</th>
              <th>Time</th>
              <th>Date</th>
              <th>Employee</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Button>Start</Button></td>
              <td><Button>Edit</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><Button>Start</Button></td>
              <td><Button>Edit</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
              <td><Button>Start</Button></td>
              <td><Button>Edit</Button></td>
            </tr>
          </tbody>
        </Table>
        <hr></hr>
        <SessionUpcoming></SessionUpcoming>
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