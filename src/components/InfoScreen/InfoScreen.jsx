import React from 'react';
import './InfoScreen.css';

const InfoScreen = ({ setIsUserScreen, counter, text }) => {
  return (
    <>
      <div className='counter-value'>{counter}</div>
      <div className='text-value'>{text}</div>

      <button onClick={() => setIsUserScreen((prev) => !prev)}>Wstecz</button>
    </>
  );
};

export default InfoScreen;
