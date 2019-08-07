import React from 'react';
import PropTypes from 'prop-types';
import {
  HeroCardContainer,
  HeroCardImg,
  HeroCardName,
} from './HeroCard.styles';

export default function HeroCard({ image, name }) {
  return (
    <HeroCardContainer>
      <HeroCardImg>
        <img src={image} alt={name} />
      </HeroCardImg>
      <HeroCardName>{name}</HeroCardName>
    </HeroCardContainer>
  );
}

HeroCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
