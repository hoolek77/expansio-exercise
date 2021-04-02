import React from 'react';
import '../css/infoScreen.css';

const InfoScreen = ({ counter, text, setIsUserScreen }) => {
  return (
    <>
      <div className='counter-value'>{counter}</div>
      <div className='text-value'>{text}</div>
      <button onClick={() => setIsUserScreen((prev) => !prev)}>Wstecz</button>
    </>
  );
};

export default InfoScreen;
