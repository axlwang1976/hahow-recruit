import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import HeroList from '../../components/heroList/HeroList';
import HeroProfile from '../../components/heroProfile/HeroProfile';
import { PageContainer } from '../heroListPage/HeroListPage.styles';

function HeroProfilePage({ heroes, match }) {
  const { heroId } = match.params;
  return (
    <PageContainer>
      <HeroList heroes={heroes} heroId={heroId} />
      <HeroProfile heroId={heroId} />
    </PageContainer>
  );
}

HeroProfilePage.propTypes = {
  heroes: PropTypes.array,
  match: PropTypes.object,
};

export default withRouter(HeroProfilePage);
