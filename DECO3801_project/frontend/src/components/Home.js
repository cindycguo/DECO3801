import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';

function Home(props) {
  return (
    <ContentHolder>
      <h1> This is our homepage</h1>
      <CaptureVideo></CaptureVideo>
      <VoiceRecog></VoiceRecog>
    </ContentHolder>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;