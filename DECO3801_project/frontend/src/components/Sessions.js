import React from 'react';
import PropTypes from 'prop-types';
import ContentHolder from './Content';
import CaptureVideo from './CaptureVideo';
import VoiceRecog from './VoiceRecog';
import Button from 'react-bootstrap/Button';
import './css/Session.css'

function Sessions(props) {
  return (
    <ContentHolder>
        <h1 className='session-title'>Session</h1>
        <p id="para">0</p>
        <Button className='btn'>Start</Button>
        <Button className='btn'>Get</Button>
        <Button className='btn'>Stop</Button>
        <CaptureVideo></CaptureVideo>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
        <VoiceRecog></VoiceRecog>
        <Button id="toggle-video">Hide</Button>
        <Button id="toggle-audio">Mute</Button>
        <Button id="record" disabled>Record</Button>
        <Button id="stop" disabled>Stop</Button>
        <video id="recording" controls width="320"></video><br/>
        <Button id="ssbtn">ss</Button>
        <canvas width="400" height="300"></canvas>
    </ContentHolder>
  );
}

Sessions.propTypes = {
  window: PropTypes.func,
};

export default Sessions;