import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';

function Sessions(props) {
  return (
    <ContentHolder>
        <h1> This is our sessions page</h1>
    </ContentHolder>
  );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;