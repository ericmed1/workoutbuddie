import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import homepage from './components/home-page.js';
import Navbar from './components/nav-bar.js';
import workoutlog from './components/Workout-log.js';
import profile from './components/profile-page.js';
import aboutus from './components/about-us.js';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path="/homepage" Component={homepage} />
          <Route path="/workoutlog" Component={workoutlog} />
          <Route path="/profile" Component={profile} />
          <Route path="/aboutus" Component={aboutus} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;

