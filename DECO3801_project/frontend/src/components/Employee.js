import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import "bootstrap/dist/css/bootstrap.min.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ShowEmployees from './ShowEmployees';
import AddEmployee from './AddEmployee';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

function myFunction() {
  var x = document.getElementById("myDIV");
  var btn = document.getElementById("mybtn");
  if (x.style.display === "none") {
    x.style.display = "block";
    btn.innerHTML = 'Close Employee Creation';
  } else {
    x.style.display = "none";
    btn.innerHTML = 'Add Employee';
  }
}

function Employee(props) {

  const history = useNavigate();
  if (user) {
      return (
        <ContentHolder>
          <Container style={{marginTop: "50px"}}>
            <h1>Employees</h1>
          <hr></hr>
          <Row>
            <Col><Button id='mybtn' onClick={myFunction}>Add Employee</Button></Col>
          </Row>
          <Row>
            <Col>
                <div id="myDIV" style={{display: "none", marginTop: "20px"}}>
                    <AddEmployee></AddEmployee>
                </div>
            </Col>
          </Row>
          <hr></hr>
              <ShowEmployees></ShowEmployees>
          </Container>
        </ContentHolder>

      );
  } else {
    return (
        <ContentHolder>
          <Container style={{marginTop: "50px"}}>
            <ArrowBackIcon
                    className='back'
                    onClick={() => history(-1)}
                    aria-hidden="true"
                ></ArrowBackIcon>
            <h1>Whoops!</h1>
            <p>Sorry, it appears as though your user permissions do not allow for this page to be loaded!</p>
            <p>Please follow the undo button to return to the regular web app.</p>
          </Container>
        </ContentHolder>

      );
  }
}

Employee.propTypes = {
  window: PropTypes.func,
};

export default Employee;
            

      