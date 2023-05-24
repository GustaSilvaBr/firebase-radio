import React from 'react';
import { useEffect, useState } from 'react';
import { addAudioChunk } from '../../services/service';

export function Host() {
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  useEffect(() => {
    handleSetMediaRecorder();
  }, []);

  function handleSetMediaRecorder() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorder);
    }).catch(err => {
      console.log(err)
    })
  }

  function startRecording() {
    if(mediaRecorder){
      mediaRecorder.start();

      mediaRecorder.addEventListener("dataavailable", event => {
        const audioChunk = [event.data];
        addAudioChunk(audioChunk);
        setAudioChunks(audioChunk);
      });
    }

  }

  useEffect(() => {
    if (audioChunks.length > 0) {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    }
  }, [audioChunks])

  function stopRecording() {
    if(mediaRecorder)(
      mediaRecorder.stop()
    )
  }

  return (
    <div className="container">
      <h2> Ear Radio</h2>

      <button onClick={startRecording} disabled={!mediaRecorder}>
        Start recording
      </button>

      <button onClick={stopRecording} disabled={!mediaRecorder}>
        Stop recording
      </button>
    </div>
  );
}

