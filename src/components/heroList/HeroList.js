import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import HeroCard from './HeroCard';
import { HeroListContainer } from './HeroList.styles';

export default function HeroList({ heroes }) {
  if (heroes.length) {
    return (
      <HeroListContainer>
        {heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </HeroListContainer>
    );
  }

  return <Spinner />;
}

HeroList.propTypes = {
  heroes: PropTypes.array,
};
