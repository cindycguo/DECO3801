
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import "bootstrap/dist/css/bootstrap.min.css";



function Login(props) {

  return (
    <>
        Steal my brain login from
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
    </>
    
  );
}

Login.propTypes = {
  window: PropTypes.func,
};

export default Login;
            

        {/* <div className="sign-in">
        <h2>Steal my brain</h2>
        <span>Sign in with your email and passowrd</span>

        <form onSubmit={this.handleSubmit}>
        <div className='group'>
        <input 
                className='form-input' 
                type="email"
                name='email'
                value={email}
                required
                onChange={this.handleInput}
        />
        <label
            className={`${value.length?'shrink':''} form-input-label`}
        >Email</label>
        <input 
                className='form-input' 
                type="password"
                name='password'
                value={password}
                onChange={this.handleInput}
                required
        />
        <label
        className={`${value.length?'shrink':''} form-input-label`}
        >Password</label>
        </div>
        <button className='custom-button' type='submit' >Sign in</button>
        </form>
        </div> */}