import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import HeroListPage from '../pages/heroListPage/HeroListPage';

export default function router() {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/heroes" render={() => <HeroListPage />} />
    </Switch>
  );
}
