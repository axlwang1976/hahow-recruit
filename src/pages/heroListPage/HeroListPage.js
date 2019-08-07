import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import HeroList from '../../components/heroList/HeroList';
import { HeroListPageContainer } from './HeroListPage.styles';

export default function HeroListPage() {
  const [heroes, setHeroes] = useState([]);

  const getHeroes = useCallback(async () => {
    const response = await axios('http://hahow-recruit.herokuapp.com/heroes');
    const data = await response.data;
    setHeroes(data);
  }, []);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  return (
    <HeroListPageContainer>
      <HeroList heroes={heroes} />
    </HeroListPageContainer>
  );
}
