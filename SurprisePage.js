import React from 'react';
import { useNavigate } from 'react-router-dom';
import surpriseVideo from './assets/birthday.mp4';

export default function SurprisePage() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <img src="/glit.jpg" alt="glitter" className="background-gif" />

      <video
        className="video-player"
        src={surpriseVideo}
        controls
        autoPlay
      />

      <button className="back-button" onClick={() => navigate('/')}>
        🔙 Back to Home
      </button>
    </div>
  );
}
