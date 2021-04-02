import React from 'react';
import { Link } from 'react-router-dom';
import './UserScreen.css';

const UserScreen = ({ user, counter, setCounter, text, setText }) => {
  return (
    <>
      <div className='user-info'>
        {user ? (
          <>
            <img src={user.picture.large} alt='user' />
            <p>{`${user.name.first} ${user.name.last}`}</p>
          </>
        ) : null}
      </div>
      <div className='counter'>
        <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        <p>{counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      </div>
      <form className='text-form'>
        <input
          type='text'
          placeholder='Tutaj wpisz tekst...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <Link to='/info'>
        <button>Dalej</button>
      </Link>
    </>
  );
};

export default UserScreen;
