import React from 'react';
import './ScrollDownButton.css'; // Create a CSS file for the styles

const ScrollDownButton = () => {
  return (
    <div className="scrolldown">
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  );
};

export default ScrollDownButton;
