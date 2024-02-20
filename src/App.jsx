import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import NanniesPage from './pages/NanniesPage/NanniesPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};
