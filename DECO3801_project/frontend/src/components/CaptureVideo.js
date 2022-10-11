import * as React from 'react';
import { useRef, useEffect, useState, Component } from 'react';
import Peer from 'peerjs';

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
          <button onClick={this.send}>Send</button>

          <button onClick={this.videoCall}>Video Call</button>
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
            <video ref={ref => this.myVideo = ref} />
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