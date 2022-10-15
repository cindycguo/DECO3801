import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import ContentHolder from './Content';
import AddSession from './AddSession';


function NewSession(props) {

  return (
    <ContentHolder>
        <AddSession></AddSession>
    </ContentHolder>
    
  );
}

NewSession.propTypes = {
  window: PropTypes.func,
};

export default NewSession;
            

      