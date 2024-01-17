import styled from "styled-components";

export const ExercisesTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.36;
  letter-spacing: -0.56px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.88px;
    margin-bottom: 32px;
  }
`;

export const ExercisesTopBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
