import styled from "styled-components";

export const ExercisesListBox = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 15px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ExercisesItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 3);
  }
`;

export const ExercisesItemBox = styled.div`
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
`;

export const ExercisesItemTitle = styled.p`
  color: #f4f4f4;
  text-align: center;
  font-size: 20px;
  line-height: 1;
  opacity: 0.8;
  padding-bottom: 2px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ExercisesItemSubtitle = styled.p`
  color: rgba(244, 244, 244, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;
