import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SubPage from './SubPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/subpage1" element={<SubPage />} />
        <Route path="/subpage2" element={<SubPage />} />
        <Route path="/subpage3" element={<SubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
