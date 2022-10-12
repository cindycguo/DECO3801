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



function NewSession(props) {

  return (
    <ContentHolder>
      <Container style={{marginTop: "50px"}}>
        <h1>New Session</h1>
      <hr></hr>
        <Form>
        <Form.Group className="mb-2" controlId="sessionTopic">
            <Form.Label>New Topic</Form.Label>
            <Form.Control type="Topic" placeholder="Please Enter your Topic" />
            <Form.Text className="text-muted">
            Some note for Topic
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-2" controlId="sessionDate">
            <Form.Label>Session Date</Form.Label>
            <Form.Control type="Date" placeholder="Please Enter the new session date" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="sessionTime">
            <Form.Label>Session Time</Form.Label>
            <Form.Control type="Time" placeholder="Please Enter the new session time" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="toEmployee">
            <Form.Label>To the student</Form.Label>
            <Form.Control type="employee" placeholder="Please Enter the employee ID" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

      
      </Container>
    </ContentHolder>
    
  );
}

NewSession.propTypes = {
  window: PropTypes.func,
};

export default NewSession;
            

      