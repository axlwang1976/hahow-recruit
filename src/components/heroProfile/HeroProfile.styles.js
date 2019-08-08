import styled from 'styled-components';

export const HeroProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
`;

export const HeroProfileDetail = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroProfileDetailTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #0f0f0f;
  margin-bottom: 20px;
`;

export const HeroProfileDetailValue = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #0f0f0f;
  margin: 0 10px;
`;

export const HeroProfileAp = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const HeroProfileApValue = styled.p`
  font-size: 24px;
  color: #0f0f0f;
  margin: 30px 0;
`;
