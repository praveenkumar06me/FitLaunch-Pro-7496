import React from 'react';
import Navbar from './components/Navbar';
import AppShowcase from './components/AppShowcase';
import WorkoutPlan from './components/WorkoutPlan';
import ProgressTracker from './components/ProgressTracker';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <AppShowcase />
        <WorkoutPlan />
        <ProgressTracker />
        <Pricing />
      </main>
    </div>
  );
}

export default App;