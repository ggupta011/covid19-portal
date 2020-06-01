import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegionalSummary from './component/RegionalSummary';
import DailySummary from './component/DailySummary';

function App() {
  return (
    <div className="App">
     
      <RegionalSummary/>
      <DailySummary />
    </div>
  );
}

export default App;
