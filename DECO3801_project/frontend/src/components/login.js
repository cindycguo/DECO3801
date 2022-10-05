import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';

function Login(props) {
  return (
    <ContentHolder>
        <h1> Login page</h1>
    </ContentHolder>
  );
}

function Logout(props) {
    return (
        <ContentHolder>
            <h1> Logout page </h1>
        </ContentHolder>
    );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;