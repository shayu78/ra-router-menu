import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import ForzaPage from './components/ForzaPage/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/drift" exact component={DriftPage} />
          <Route path="/timeattack" exact component={TimeAttackPage} />
          <Route path="/forza" exact component={ForzaPage} />
          <Route path="/" exact component={HomePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
