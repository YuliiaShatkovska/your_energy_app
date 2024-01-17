import styled from "styled-components";

export const HashtagsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 8px;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    width: 200px;
    margin-top: 30px;
  }
`;

export const HashtagsItem = styled.li`
  border: 1px solid #242424;
  padding: 4px 8px;
  border-radius: 30px;

  @media screen and (min-width: 375px) {
    padding: 4px 14px;
  }

  @media screen and (min-width: 1440px) {
    /* width: calc((100% - 8px) / 2); */
    padding: 4px 16px;
  }
`;

export const HashtagsText = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
