import styled from "styled-components";

export const SocList = styled.ul`
  @media screen and (max-width: 767px) {
    display: ${({ $variant }) => ($variant === "header" ? "none" : "flex")};
  }

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const SocItem = styled.li`
  border: ${({ $variant }) =>
    `1px solid ${
      $variant === "footer"
        ? "rgba(244, 244, 244, 0.10)"
        : "rgba(36, 36, 36, 0.10)"
    }`};
  padding: 8px;
  border-radius: 10px;

  &:hover,
  &:focus {
    animation-name: hvr-pulse;
    animation-duration: 1s;
    animation-delay: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    filter: drop-shadow(-1px 1px 1px #57da0c);
  }
`;

export const SocLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $variant }) => ($variant === "footer" ? "#f4f4f4" : "#242424")};
`;
