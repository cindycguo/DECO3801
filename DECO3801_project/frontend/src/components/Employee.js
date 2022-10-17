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


function Employee(props) {

  return (
    <ContentHolder>
      <Container style={{marginTop: "50px"}}>
        <h1>Employees</h1>
      <hr></hr>
      <Row>
        <Col><Button>All</Button></Col>
        <Col><Button>Inactive sessions</Button></Col>
        <Col><Button>Active sessions</Button></Col>
        <Col><Button>Add Employee</Button></Col>
      </Row>
      <hr></hr>

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>User ID</th>
            <th>Employee</th>
            <th>Session Name</th>
            <th></th>
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
            <td><Button>Edit</Button></td>
            <td><Button>History</Button></td>
            <td><Button>View Session</Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><Button>Edit</Button></td>
            <td><Button>History</Button></td>
            <td><Button>View Session</Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td><Button>Edit</Button></td>
            <td><Button>History</Button></td>
            <td><Button>View Session</Button></td>
          </tr>
        </tbody>
      </Table>

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
            

      