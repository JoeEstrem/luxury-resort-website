import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ThreeHighlight from './components/ThreeHighlights';
import Accomodation from './components/Accommodation';
import Wellness from './components/Wellness';
import Footer from './components/Footer';
import Wonderland from './components/Wonderland';
import Spacer from './components/Spacer';
import SpacerArrow from './components/SpacerArrow';


function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <SpacerArrow />
      <ThreeHighlight />
      <Spacer />
      <Accomodation />
      <Spacer />
      <Wonderland />
      <Spacer />
      <Wellness />
      <Footer />
    </div>
  );
}

export default App;
