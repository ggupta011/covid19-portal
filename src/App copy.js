import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegionalSummary from './component/RegionalSummary';
import DailySummary from './component/DailySummary';
import TestSummary from './component/TestSummary';

function App() {
  return (
    <div className="App">
     
      <RegionalSummary/>
      <DailySummary />
      <TestSummary/>
      <NotificationSummary/>
    </div>
  );
}

export default App;
