import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import NanniesPage from './pages/NanniesPage/NanniesPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { AuthProvider } from './firebase/auth';

export const App = () => {
  return (
    <Router basename="/nanny-services">
      <AuthProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/nannies" element={<NanniesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </AuthProvider>
    </Router>
  );
};
