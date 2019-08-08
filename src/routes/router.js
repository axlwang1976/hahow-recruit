import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import HeroListPage from '../pages/heroListPage/HeroListPage';
import HeroProfilePage from '../pages/heroProfilePage/HeroProfilePage';

export default function router({ heroes }) {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route
        exact
        path="/heroes"
        render={() => <HeroListPage heroes={heroes} />}
      />
      <Route
        exact
        path="/heroes/:heroId"
        render={() => <HeroProfilePage heroes={heroes} />}
      />
    </Switch>
  );
}

router.propTypes = {
  heroes: PropTypes.array,
};
