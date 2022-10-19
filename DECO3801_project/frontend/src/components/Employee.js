import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import ShowEmployees from './ShowEmployees';
import AddEmployee from './AddEmployee';
import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';

function Employee(props) {
  return (
    <ContentHolder>
      <Container style={{marginTop: "50px"}}>
        <h1>Employees</h1>
      <hr></hr>
      <Row>
        <Col><Button>Add Employee</Button></Col>
      </Row>
      <hr></hr>

          <ShowEmployees></ShowEmployees>
          <AddEmployee></AddEmployee>
      
      </Container>
    </ContentHolder>
    
  );
}

Employee.propTypes = {
  window: PropTypes.func,
};

export default Employee;
            

      