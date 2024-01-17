import styled from "styled-components";

export const ExercisesFilterBtn = styled.button`
  color: rgba(36, 36, 36, 0.6);
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ExercisesFilterBox = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
