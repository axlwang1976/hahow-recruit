import styled from 'styled-components';

export const HeroCardContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border: 2px solid #0f0f0f;
  border-radius: 5px;
  transition: all 0.2s;
  margin-bottom: 20px;
  background-color: #fff;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: none;
  }
`;

export const HeroCardImg = styled.div`
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
`;

export const HeroCardName = styled.div`
  font-size: 20px;
  color: #0f0f0f;
`;

export const HeroCardContainerSelected = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border: 5px solid red;
  border-radius: 5px;
  transition: all 0.2s;
  margin-bottom: 20px;
  background-color: #fff;
  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: none;
  }
`;
