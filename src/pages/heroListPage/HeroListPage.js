import React from 'react';
import HeroList from '../../components/heroList/HeroList';
import { PageContainer } from './HeroListPage.styles';

export default function HeroListPage() {
  return (
    <PageContainer>
      <HeroList />
    </PageContainer>
  );
}
