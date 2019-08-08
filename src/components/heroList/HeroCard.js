import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HeroCardContainer,
  HeroCardImg,
  HeroCardName,
  HeroCardContainerSelected,
} from './HeroCard.styles';

export default function HeroCard({ id, image, name, heroId }) {
  return (
    <Link to={`/heroes/${id}`}>
      {id !== heroId ? (
        <HeroCardContainer>
          <HeroCardImg>
            <img src={image} alt={name} />
          </HeroCardImg>
          <HeroCardName>{name}</HeroCardName>
        </HeroCardContainer>
      ) : (
        <HeroCardContainerSelected>
          <HeroCardImg>
            <img src={image} alt={name} />
          </HeroCardImg>
          <HeroCardName>{name}</HeroCardName>
        </HeroCardContainerSelected>
      )}
    </Link>
  );
}

HeroCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  heroId: PropTypes.string,
};
