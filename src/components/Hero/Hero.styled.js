import styled from "styled-components";

export const HeroContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 64px;
  }
`;

export const HeroIcon = styled.svg`
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2; /* 120% */
  letter-spacing: -0.8px;
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    width: 340px;
  }

  @media screen and (min-width: 768px) {
    width: 628px;
    font-size: 74px;
    letter-spacing: -1.48px;
    line-height: 74px;
  }
`;

export const HeroText = styled.p`
  font-size: 13px;
  letter-spacing: -0.28px;
  width: 280px;
  margin-bottom: 32px;

  @media screen and (min-width: 375px) {
    width: 340px;
  }

  @media screen and (min-width: 768px) {
    width: 528px;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
  }
`;

export const HeroTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroImageLegs = styled.img`
  border-radius: 20px;
  margin-left: auto;
`;
