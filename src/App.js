import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoScreen from './components/InfoScreen';
import UserScreen from './components/UserScreen';
import './css/global.css';

const App = () => {
  const [isUserScreen, setIsUserScreen] = useState(true);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const user = await response.json();
        setUser(user.results[0]);

        // just for demo purpose
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (ex) {
        alert(ex);
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <div style={appStyles}>
      <div style={containerStyles}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {isUserScreen ? (
              <UserScreen
                user={user}
                setIsUserScreen={setIsUserScreen}
                counter={counter}
                setCounter={setCounter}
                setText={setText}
                text={text}
              />
            ) : (
              <InfoScreen
                setIsUserScreen={setIsUserScreen}
                counter={counter}
                text={text}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const appStyles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '400px',
  backgroundColor: '#fafafa',
};

export default App;
