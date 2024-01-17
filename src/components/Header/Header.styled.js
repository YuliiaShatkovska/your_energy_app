import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;
