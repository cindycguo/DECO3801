import * as React from 'react';
import { useRef, useEffect } from 'react';

export default function CaptureVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    };
    getUserMedia();
  }, []);

  return (
    <div>
      <video 
        ref={videoRef}
        autoPlay
      />
    </div>
  );
}