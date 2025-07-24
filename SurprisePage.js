import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import surpriseVideo from './assets/birthday.mp4';
import Confetti from 'react-confetti';

export default function SurprisePage() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Update confetti dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {/* 🎉 Confetti Popup on Load */}
      {showConfetti && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}

      {/* 🎥 Birthday Video */}
      <video
        className="video-player"
        src={surpriseVideo}
        controls
        autoPlay
      />

      {/* 🔙 Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        🔙 Back to Home
      </button>
    </div>
  );
}
