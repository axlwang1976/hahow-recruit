import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner/Spinner';
import HeroCard from './HeroCard';
import { fetchHeroesAsync } from '../../redux/actions/heroesActions';
import { HeroListContainer } from './HeroList.styles';

function HeroList({ heroes, heroId, fetchHeroesAsyncConnect }) {
  useEffect(() => {
    fetchHeroesAsyncConnect();
  }, [fetchHeroesAsyncConnect]);

  if (heroes.length) {
    return (
      <HeroListContainer>
        {heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} heroId={heroId} />
        ))}
      </HeroListContainer>
    );
  }

  return <Spinner />;
}

const mapStateToProps = state => ({
  heroes: state.heroes.heroes,
});

HeroList.propTypes = {
  heroes: PropTypes.array,
  heroId: PropTypes.string,
  fetchHeroesAsyncConnect: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { fetchHeroesAsyncConnect: fetchHeroesAsync }
)(HeroList);
