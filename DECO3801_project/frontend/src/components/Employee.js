import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Employee(props) {

  return (
    <ContentHolder>
        Employee
      <Form.Group className="mb-3">
        <Form.Label>Please insert your email or ID:</Form.Label>
        <Form.Control placeholder="Email/ID:" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Please insert your password</Form.Label>
        <Form.Control placeholder="Password(case sensitive):" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="remember me" />

      </Form.Group>
      <Container>
      <Row xs={4} md={4} lg={6}>
        <Col><Button>All</Button></Col>
        <Col><Button>Inactive sessions</Button></Col>
        <Col><Button>Active sessions</Button></Col>
        <Col><Button>Add Employee</Button></Col>
      </Row>
      <Row>
        <Col md={4}>User ID</Col>
        <Col>Employee</Col>
        <Col>Session Name</Col>
      </Row>
      <Row>
        <Col>123456</Col>
        <Col>SOMEIMG</Col>
        <Col>Chemical lab</Col>
        <Col><Button>Eidt</Button></Col>
        <Col><Button>History</Button></Col>
        <Col><Button>View Session</Button></Col>
      </Row>
    </Container>
    </ContentHolder>
    
  );
}

Employee.propTypes = {
  window: PropTypes.func,
};

export default Employee;
            
