import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { HomeContainer, HomeTitle } from './HomePage.styles';

export default function HomePage() {
  return (
    <HomeContainer>
      <HomeTitle>Hahow Recruit Project</HomeTitle>
      <Link to="/heroes">
        <Button variant="contained" color="primary">
          See All Heroes
        </Button>
      </Link>
    </HomeContainer>
  );
}
