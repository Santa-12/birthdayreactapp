import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import birthdayAudio from './assets/samamusic.mp3';
import birthdayPhoto from './assets/kaviya.jpg';

export default function HomePage() {
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePause = () => {
        audioRef.current.pause();
    };

    return (
        <div className="app-container">
          
            <div className="content">
                <h1 className="title">🎉 Happy Birthday Kaviya che 🎉</h1>
                <img src={birthdayPhoto} alt="Birthday" className="birthday-photo" />

                <div className="buttons">
                    <button onClick={handlePlay}>▶️ Play Music</button>
                    <button onClick={handlePause}>⏸ Pause Music</button>
                    <button onClick={() => navigate('/surprise')}>🎁 See Surprise</button>
                </div>
            </div>

            <audio ref={audioRef} src={birthdayAudio} loop />
        </div>
    );
}
