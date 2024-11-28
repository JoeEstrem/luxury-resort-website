import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ThreeHighlight from './components/ThreeHighlights';
import Accomodation from './components/Accommodation';
import Wellness from './components/Wellness';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <ThreeHighlight />
      <Accomodation />
      <Wellness />
      <Footer />
    </div>
  );
}

export default App;
