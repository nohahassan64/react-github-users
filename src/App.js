import React from 'react'
import  { AuthWrapper , Dashboard , Error , Login , PrivateRoute } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact={true}>
              <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" component={Login} exact />
          <Route path="*" component={Error} exact />
        </Switch> 
      </BrowserRouter>
    </AuthWrapper>
  )
}

export default App
