import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import HeroList from '../../components/heroList/HeroList';
import HeroProfile from '../../components/heroProfile/HeroProfile';
import { PageContainer } from '../heroListPage/HeroListPage.styles';

function HeroProfilePage({ match }) {
  const { heroId } = match.params;
  return (
    <PageContainer>
      <HeroList heroId={heroId} />
      <HeroProfile />
    </PageContainer>
  );
}

HeroProfilePage.propTypes = {
  match: PropTypes.object,
};

export default withRouter(HeroProfilePage);
