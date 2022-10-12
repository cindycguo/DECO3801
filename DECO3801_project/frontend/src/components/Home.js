import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import './css/Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Home(props) {

  const [date, setDate] = useState(new Date()) 

  return (

    <ContentHolder>
      <h1 className='upcomingTitle'> Upcoming Sessions </h1>
        
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Employee</th>
            <th>Session Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

        <h1 className='calenderTitle'> My Calender </h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date}/>
        </div>
    </ContentHolder>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;