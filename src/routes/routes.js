import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import AuthenticatePage from '../pages/AuthenticatePage'
import LandingPage from '../pages/LandingPage'
import WantToBuy from '../pages/WantToBuy'
import WantToSell from '../pages/WantToSell'

const routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/welcome'>
        <AuthenticatePage />
      </Route>
      <Route exact path='/want-to-buy'>
        <WantToBuy />
      </Route>
      <Route exact path='/want-to-sell'>
        <WantToSell />
      </Route>
      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
  </Router>
)

export default routes
