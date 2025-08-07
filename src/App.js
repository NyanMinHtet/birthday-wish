import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import Confetti from './Confetti';

function App() {
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const photoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <animated.h1 style={titleAnimation}>Happy Birthday!</animated.h1>
        <animated.p style={titleAnimation} className="wish-text">Happy Birthday, my love! 🎉❤️</animated.p>
        <animated.p style={titleAnimation} className="wish-text">
          Today, the world celebrates the incredible person you are, and I’m lucky enough to celebrate you every single day. Your smile, your kindness, your strength, and the way you light up any room just by being in it — I’m endlessly grateful for you.
        </animated.p>
        <animated.p style={titleAnimation} className="wish-text">
          Thank you for being my partner, my confidant, and my greatest inspiration. I hope this year brings you all the joy and success you’ve been dreaming of. I’ll be right here, cheering you on and loving you through it all.
        </animated.p>
        <animated.p style={titleAnimation} className="wish-text">
          Let’s make today as unforgettable as you are.
        </animated.p>
        <animated.p style={titleAnimation} className="wish-text">
          I love you more than words can say. 💖
        </animated.p>
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
