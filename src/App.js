import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ThreeHighlight from './components/ThreeHighlights';
import Accomodation from './components/Accommodation';
import Wellness from './components/Wellness';



function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <ThreeHighlight />
      <Accomodation />
      <Wellness />
    </div>
  );
}

export default App;
