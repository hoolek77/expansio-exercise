import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DataContextProvider } from './context/data.js';
import useRandomUser from './hooks/useRandomUser';
import { UserScreen, InfoScreen } from './views';
import { Container } from './components';
import CircularProgress from '@material-ui/core/CircularProgress';
import './css/global.css';

const App = () => {
  const [randomUser, isLoading] = useRandomUser();

  return (
    <DataContextProvider>
      <div className='app'>
        <Container>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={() => <UserScreen user={randomUser} />}
                />
                <Route exact path='/info' component={() => <InfoScreen />} />
              </Switch>
            </BrowserRouter>
          )}
        </Container>
      </div>
    </DataContextProvider>
  );
};

export default App;
