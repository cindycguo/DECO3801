import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';

function Sessions(props) {
  return (
    <ContentHolder>
        <h1> This is our sessions page</h1>
        <CaptureVideo></CaptureVideo>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <VoiceRecog></VoiceRecog>
        <button id="toggle-video">Hide</button>
        <button id="toggle-audio">Mute</button>
    </ContentHolder>
  );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;