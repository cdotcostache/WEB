import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../layout/Nav'
import AuthenticatePage from '../pages/AuthenticatePage'
import LandingPage from '../pages/LandingPage'

const routes = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path='/welcome'>
        <AuthenticatePage />
      </Route>
      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
  </Router>
)

export default routes
