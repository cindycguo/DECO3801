import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';

function Sessions(props) {
  return (
    <ContentHolder>
        <h1>Session</h1>
        <CaptureVideo></CaptureVideo>
        <p id="para"></p>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <VoiceRecog></VoiceRecog>
        <video style={{display: 'none'}} id="recording" controls width="320"></video><br/>
        <a id="down" download>test</a>
    </ContentHolder>
  );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;