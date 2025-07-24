// src/components/ConfettiPopup.js
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiPopup = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Automatically hide after 5 seconds
        const timer = setTimeout(() => setShow(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return show ? <Confetti numberOfPieces={200} /> : null;
};

export default ConfettiPopup;
