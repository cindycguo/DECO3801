import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';

function Sessions(props) {
  return (
    <ContentHolder>
        <h1> This is our sessions page</h1>
        <p id="para">0</p>
        <button id="btnStart">Start</button>
        <button id="btnGet">Get</button>
        <button id="btnStop">Stop</button>
        <CaptureVideo></CaptureVideo>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <VoiceRecog></VoiceRecog>
        <button id="toggle-video">Hide</button>
        <button id="toggle-audio">Mute</button>
        <button id="record" disabled>Record</button>
        <button id="stop" disabled>Stop</button>
        <video id="recording" controls width="320"></video><br/>
        <button id="ssbtn">ss</button>
        <canvas width="400" height="300"></canvas>
    </ContentHolder>
  );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;