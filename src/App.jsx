import React, { useContext } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Switch as MaterialSwitch } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import useRandomUser from './hooks/useRandomUser'
import { ThemeContext } from './context/theme'
import { UserScreen, InfoScreen } from './views'
import { Container } from './components'

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const StyledSwitch = styled(MaterialSwitch)`
  &.MuiSwitch-root {
    position: absolute;
    top: 0;
  }
`

const App = () => {
  const [randomUser, isLoading] = useRandomUser()
  const [themeState, switchTheme] = useContext(ThemeContext)

  const handleSwitchChange = () => {
    switchTheme()
  }

  return (
    <StyledApp>
      <Container>
        <StyledSwitch
          checked={themeState === 'lightTheme'}
          onChange={handleSwitchChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <UserScreen user={randomUser} />}
              />
              <Route exact path="/info" component={() => <InfoScreen />} />
            </Switch>
          </BrowserRouter>
        )}
      </Container>
    </StyledApp>
  )
}

export default App
