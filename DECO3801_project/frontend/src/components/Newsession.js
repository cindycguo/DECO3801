import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import AddSession from './AddSession';
import SessionHistory from './SessionHistory';
import SessionUpcoming from './SessionUpcoming';


function NewSession(props) {

  return (
    <ContentHolder>
        <h1>Session History</h1>
        <SessionHistory></SessionHistory>
        <br />
        <h1>Session Upcoming</h1>
        <SessionUpcoming></SessionUpcoming>
        <AddSession></AddSession>
    </ContentHolder>
    
  );
}

NewSession.propTypes = {
  window: PropTypes.func,
};

export default NewSession;
            

      