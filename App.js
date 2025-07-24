import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SurprisePage from './SurprisePage';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/surprise" element={<SurprisePage />} />
    </Routes>
  );
}
