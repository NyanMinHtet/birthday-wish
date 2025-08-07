import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const photoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  return (
    <div className="App">
      <header className="App-header">
        <animated.h1 style={titleAnimation}>Happy Birthday!</animated.h1>
        <animated.p style={titleAnimation}>Wishing you a day filled with joy and laughter.</animated.p>
        <animated.div style={photoAnimation} className="photo-placeholder">
          <img src="img.jpg" alt="Birthday person" />
        </animated.div>
        <div className="cake">🎂</div>
        <div className="balloon-container">
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
