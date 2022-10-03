import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';

function Home(props) {
  return (
    <ContentHolder>
      <h1> This is our homepage</h1>
      <CaptureVideo></CaptureVideo>
    </ContentHolder>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;