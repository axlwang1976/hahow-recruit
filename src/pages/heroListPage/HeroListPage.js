import React from 'react';
import PropTypes from 'prop-types';
import HeroList from '../../components/heroList/HeroList';
import { PageContainer } from './HeroListPage.styles';

export default function HeroListPage({ heroes }) {
  return (
    <PageContainer>
      <HeroList heroes={heroes} />
    </PageContainer>
  );
}

HeroListPage.propTypes = {
  heroes: PropTypes.array,
};
