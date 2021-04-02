import { useState } from 'react';
import { DataContextProvider } from './context/data.js';
import useRandomUser from './hooks/useRandomUser';
import { UserScreen, InfoScreen } from './views';
import { Container } from './components';
import CircularProgress from '@material-ui/core/CircularProgress';
import './css/global.css';

const App = () => {
  const [randomUser, isLoading] = useRandomUser();
  const [isUserScreen, setIsUserScreen] = useState(true);

  return (
    <DataContextProvider>
      <div className='app'>
        <Container>
          {isUserScreen ? (
            isLoading ? (
              <CircularProgress />
            ) : (
              <UserScreen setIsUserScreen={setIsUserScreen} user={randomUser} />
            )
          ) : (
            <InfoScreen setIsUserScreen={setIsUserScreen} />
          )}
        </Container>
      </div>
    </DataContextProvider>
  );
};

export default App;
