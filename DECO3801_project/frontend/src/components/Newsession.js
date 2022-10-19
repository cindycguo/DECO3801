import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import AddSession from './AddSession';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Container style={{marginTop: "50px"}}>
            <h1>Sessions Management</h1>
          <hr></hr>
          <Row>
            <Col><Button id='mybtn' onClick={myFunction}>Add Session</Button></Col>
          </Row>
          <Row>
            <Col>
                <div id="myDIV" style={{display: "none"}}>
                  <AddSession></AddSession>
                </div>
            </Col>
          </Row>
          <hr></hr>

        <h3>Session History</h3>
        <Table striped>
        <tbody>
          <SessionHistory></SessionHistory>
        </tbody>
        </Table>
        <hr></hr>
        <h3>Session Upcoming</h3>
        <Table striped>
        <tbody>
          <SessionUpcoming></SessionUpcoming>
        </tbody>
        </Table>
        </Container>
    </ContentHolder>
    
  );
}

NewSession.propTypes = {
  window: PropTypes.func,
};

export default NewSession;
            

      