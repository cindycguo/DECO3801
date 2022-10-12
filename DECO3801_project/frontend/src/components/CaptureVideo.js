import * as React from 'react';
import { useRef, useEffect, useState, Component } from 'react';
import Peer from 'peerjs';
import Button from 'react-bootstrap/Button';

class CaptureVideo extends Component {

  state = {
    myId: '',
    friendId: '',
    peer: {},
    message: '',
    messages: []
  }

  componentDidMount() {

    const peer = new Peer();

    peer.on('open', (id) => {
      this.setState({
        myId: id,
        peer: peer
      });
    });

    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        this.setState({
          messages: [...this.state.messages, data]
        });
      });
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (stream) => {

        this.myVideo.srcObject = stream;
        this.myVideo.play();

        call.answer(stream);

        call.on('stream', (remoteStream) => {
          this.friendVideo.srcObject = remoteStream;
          this.friendVideo.play();
        });
      });
    });
  }

  send = () => {
    const conn = this.state.peer.connect(this.state.friendId);

    conn.on('open', () => {

      const msgObj = {
        sender: this.state.myId,
        message: this.state.message
      };

      conn.send(msgObj);

      this.setState({
        messages: [...this.state.messages, msgObj],
        message: ''
      });

    });
  }

  videoCall = () => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (stream) => {

      this.myVideo.srcObject = stream;
      this.myVideo.play();

      const call = this.state.peer.call(this.state.friendId, stream);

      call.on('stream', (remoteStream) => {
        this.friendVideo.srcObject = remoteStream;
        this.friendVideo.play();
      });

      const toggleVideo = document.getElementById('toggle-video');
        toggleVideo.addEventListener('click', () => {
            if (stream.getVideoTracks()[0].enabled) {
                stream.getVideoTracks()[0].enabled=false;
                toggleVideo.innerHTML = 'Show'
            } else {
                stream.getVideoTracks()[0].enabled=true;
                toggleVideo.innerHTML = 'Hide'
            }
        })

        const toggleAudio = document.getElementById('toggle-audio');
        toggleAudio.addEventListener('click', () => {
            if (stream.getAudioTracks()[0].enabled) {
                stream.getAudioTracks()[0].enabled=false;
                toggleAudio.innerHTML = 'Unmute'
            } else {
                stream.getAudioTracks()[0].enabled=true;
                toggleAudio.innerHTML = 'Mute'
            }
        })

        // RECORDING FUNCTION
        var recorder;
        const recordButton = document.getElementById('record');
        const stopButton = document.getElementById('stop');
        recordButton.disabled = false;
        recordButton.addEventListener('click', startRecording);
        stopButton.addEventListener('click', stopRecording);

        function startRecording() {
          recorder = new MediaRecorder(stream);

          recorder.addEventListener('dataavailable', onRecordingReady);

          recordButton.disabled = true;
          stopButton.disabled = false;

          recorder.start();
        }

        function stopRecording() {
          recordButton.disabled = false;
          stopButton.disabled = true;

          // Stopping the recorder will eventually trigger the 'dataavailable' event and we can complete the recording process
          recorder.stop();
        }

        function onRecordingReady(e) {
          var video = document.getElementById('recording');
          // e.data contains a blob representing the recording
          video.src = URL.createObjectURL(e.data);
          video.play();
        }

        // CANVAS / POINTER FUNCTION
        const canvas = document.querySelector('canvas');
        const video = document.querySelector('video');
        const width = 400;
        const height = 300;

        const ssbtn = document.getElementById('ssbtn');
        ssbtn.addEventListener('click', drawImage);

        var ctx = canvas.getContext('2d', { alpha: false })

        function drawImage() {
          ctx.drawImage(video, 0, 0, width, height);
        }

        var pressedMouse = false;
        var x;
        var y;
        var colorLine ="#9ACD32";
        var key = {C: 67};

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mousemove", drawLine);
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("keydown", clearCanvas);

        function startDrawing(eventvs01){
            pressedMouse = true;
            x = eventvs01.offsetX;
            y = eventvs01.offsetY;
        }

        function drawLine(eventvs02) {
            if (pressedMouse) {
                var xM = eventvs02.offsetX;
                var yM = eventvs02.offsetY;
                drawing_line(colorLine, x, y, xM, yM, ctx);
                x = xM;
                y = yM;
            }
        }

        function stopDrawing(eventvs03) {
            pressedMouse = false;
        }

        function clearCanvas(whenPressKey) {
            if (whenPressKey.keyCode == key.C) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        drawing_line("#FF6347", x-1, y, x, y, ctx);

        function drawing_line(color, x_start, y_start, x_end, y_end, board){
            board.beginPath();
            board.strokeStyle = color;
            board.lineWidth = 2;
            board.moveTo(x_start,y_start);
            board.lineTo(x_end,y_end);
            board.stroke();
            board.closePath();
        }


        // TIMESTAMP
        var check = null;
        const btnStart = document.getElementById('btnStart');
        btnStart.addEventListener('click', printDuration);
        const btnGet = document.getElementById('btnGet');
        btnGet.addEventListener('click', printNum);
        const btnStop = document.getElementById('btnStop');
        btnStop.addEventListener('click', stop);

        var cnt = 0;

        function printDuration() {
            if (check == null) {
                check = setInterval(function () {
                    cnt += 1;
                    console.log(cnt);
                }, 1000);
            }
        }

        function printNum() {
            document.getElementById("para").innerHTML = cnt;
        }

        function stop() {
            clearInterval(check);
            check = null;
            document.getElementById("para").innerHTML = '0';
        }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="col">
          <h1>My ID: {this.state.myId}</h1>

          <label>Friend ID:</label>
          <input
            type="text"
            value={this.state.friendId}
            onChange={e => { this.setState({ friendId: e.target.value }); }} />

          <br />
          <br />

          <label>Message:</label>
          <input
            type="text"
            value={this.state.message}
            onChange={e => { this.setState({ message: e.target.value }); }} />
          <Button onClick={this.send}>Send</Button>

          <Button onClick={this.videoCall}>Video Call</Button>
          {
            this.state.messages.map((message, i) => {
              return (
                <div key={i}>
                  <strong><p>{message.sender}:</p></strong>
                  <p>{message.message}</p>
                </div>

              )
            })
          }
        </div>

        <div className="col">
          <div>
            <video id="vid" ref={ref => this.myVideo = ref} />
          </div>
          <div>
            <video ref={ref => this.friendVideo = ref} />
          </div>
        </div>

      </div>
    );
  }
}

export default CaptureVideo;