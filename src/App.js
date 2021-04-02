import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfoScreen from './components/InfoScreen/InfoScreen.jsx';
import UserScreen from './components/UserScreen/UserScreen';
import './css/global.css';
import useRandomUser from './hooks/useRandomUser';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [randomUser, isLoading] = useRandomUser();

  return (
    <div className='app'>
      <div className='container'>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/'
              component={() =>
                isLoading ? (
                  <CircularProgress />
                ) : (
                  <UserScreen
                    user={randomUser}
                    counter={counter}
                    setCounter={setCounter}
                    setText={setText}
                    text={text}
                  />
                )
              }
              key='user-route'
            />
            <Route
              exact
              path='/info'
              component={() => <InfoScreen counter={counter} text={text} />}
              key='info-route'
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
