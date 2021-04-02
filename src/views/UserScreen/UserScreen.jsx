import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import { Button } from '../../components';
import './UserScreen.css';

export const UserScreen = ({ user }) => {
  const { increment, decrement, changeText, text, counter } = useData();

  return (
    <>
      <div className='user-info'>
        {user ? (
          <>
            <img
              src={user.picture.large}
              alt='user'
              className='user-info__img'
            />
            <p className='user-info__paragraph'>{`${user.name.first} ${user.name.last}`}</p>
          </>
        ) : null}
      </div>
      <div className='counter'>
        <Button onClick={decrement}>-</Button>
        <p className='counter__paragraph'>{counter}</p>
        <Button onClick={increment}>+</Button>
      </div>
      <form className='text-form' onSubmit={(e) => e.preventDefault()}>
        <input
          className='text-form__input'
          type='text'
          placeholder='Tutaj wpisz tekst...'
          value={text}
          onChange={(e) => changeText(e.target.value)}
        />
      </form>
      <Link to='/info'>
        <Button>Dalej</Button>
      </Link>
    </>
  );
};
