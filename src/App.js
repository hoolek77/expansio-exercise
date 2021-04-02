import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoScreen from './components/InfoScreen/InfoScreen.jsx';
import UserScreen from './components/UserScreen/UserScreen';
import './css/global.css';
import useRandomUser from './hooks/useRandomUser';

const App = () => {
  const [randomUser, isLoading] = useRandomUser();
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [isUserScreen, setIsUserScreen] = useState(true);

  return (
    <div className='app'>
      <div className='container'>
        {isUserScreen ? (
          isLoading ? (
            <CircularProgress />
          ) : (
            <UserScreen
              setIsUserScreen={setIsUserScreen}
              setCounter={setCounter}
              counter={counter}
              text={text}
              setText={setText}
              user={randomUser}
            />
          )
        ) : (
          <InfoScreen
            counter={counter}
            text={text}
            setIsUserScreen={setIsUserScreen}
          />
        )}
      </div>
    </div>
  );
};

export default App;
