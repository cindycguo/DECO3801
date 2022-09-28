import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';

function Notes(props) {
  return (
    <ContentHolder>
        <h1> This is our notes page</h1>
    </ContentHolder>
  );
}

Notes.propTypes = {
  window: PropTypes.func,
};

export default Notes;