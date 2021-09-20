import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import AuthenticatePage from '../pages/AuthenticatePage'
import LandingPage from '../pages/LandingPage'

const routes = () => (
  <Router>
    <Navbar />
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
