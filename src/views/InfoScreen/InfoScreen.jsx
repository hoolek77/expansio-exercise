import React from 'react';
import useData from '../../hooks/useData';
import { Button } from '../../components';
import './InfoScreen.css';

export const InfoScreen = ({ setIsUserScreen }) => {
  const { counter, text } = useData();
  return (
    <>
      <div className='counter-value'>{counter}</div>
      <div className='text-value'>{text}</div>

      <Button onClick={() => setIsUserScreen((prev) => !prev)}>Wstecz</Button>
    </>
  );
};
