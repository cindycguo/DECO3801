import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import AddSession from './AddSession';
import SessionHistory from './SessionHistory';
import SessionUpcoming from './SessionUpcoming';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';

function myFunction() {
  var x = document.getElementById("myDIV");
  var btn = document.getElementById("mybtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.innerHTML = 'Close Session Creation';
  } else {
    x.style.display = "none";
    btn.innerHTML = 'Add Session';
  }
}

function NewSession(props) {

  return (
    <ContentHolder>
        <h1>Session History</h1>
        <Table striped>
        <tbody>
          <SessionHistory></SessionHistory>
        </tbody>
        </Table>
        <Button id='mybtn' onClick={myFunction}>Add Session</Button>

        <div id="myDIV" style={{display: "none"}}>
          <h1>Add New Session</h1>
          <AddSession></AddSession>
        </div>
        <br />
        <h1>Session Upcoming</h1>
        <Table striped>
        <tbody>
          <SessionUpcoming></SessionUpcoming>
        </tbody>
        </Table>
    </ContentHolder>
    
  );
}

NewSession.propTypes = {
  window: PropTypes.func,
};

export default NewSession;
            

      