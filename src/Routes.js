import React from 'react';
import { Route, Switch } from 'react-router';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import Language from './components/Language';
import Recipe from './components/Recipe'
import Music from './components/Music';
import Forum from './components/Forum'



export default (
  <Switch>
    <Route path="/welcome" component={LandingPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/language" component={Language} />
    <Route path="/recipe" component={Recipe} />
    <Route path="/music" component={Music} />
    <Route path="/forum" component={Forum} />
  </Switch>
);
