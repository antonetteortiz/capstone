import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './components/HomePage'
import Music from './components/Music';



export default (
    <Route path="/music" component={Music} />
    <Route path="/home" component={HomePage} />
);
