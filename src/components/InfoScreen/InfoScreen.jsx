import React from 'react';
import { Link } from 'react-router-dom';
import './InfoScreen.css';

const InfoScreen = ({ counter, text }) => {
  return (
    <>
      <div className='counter-value'>{counter}</div>
      <div className='text-value'>{text}</div>
      <Link to='/'>
        <button>Wstecz</button>
      </Link>
    </>
  );
};

export default InfoScreen;
