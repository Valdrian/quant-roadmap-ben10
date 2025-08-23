import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import SkillTreePage from './pages/SkillTreePage';
import ResourcesPage from './pages/ResourcesPage';
import ProgressPage from './pages/ProgressPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import NotionTemplate from './pages/NotionTemplate';
import { useGameStore } from './store/gameStore';

function App() {
  const { initializeGame } = useGameStore();

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-ben10-dark">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/skills" element={<SkillTreePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/interview" element={<InterviewPrepPage />} />
            <Route path="/notion" element={<NotionTemplate />} />
          </Routes>
        </main>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#00ff00',
              border: '1px solid #00ff00',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;