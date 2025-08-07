import React from 'react';
import './Confetti.css';

const Confetti = () => {
  const confetti = Array.from({ length: 100 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 5}s`,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };
    return <div key={i} className="confetti" style={style}></div>;
  });

  return <div className="confetti-container">{confetti}</div>;
};

export default Confetti;
