import styled from "styled-components";

export const Logo = styled.svg`
  &:hover,
  &:focus {
    animation-name: hvr-pulse;
    animation-duration: 1s;
    animation-delay: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    filter: drop-shadow(-1px 1px 5px #57da0c);
  }
`;
