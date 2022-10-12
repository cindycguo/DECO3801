import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import './css/Home.css'


function Home(props) {

  const [date, setDate] = useState(new Date()) 

  return (
    <ContentHolder>
      <h1 className='upcomingTitle'> Upcoming Sessions </h1>
        <div className='upcoming'>
          <td>Session</td>
          <td>Employee</td>
          <td>Time</td>
        </div>
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