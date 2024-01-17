import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 233px;
    padding: 8px 48px;
    background-color: #242424;
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 265px;
    padding: 8px 52px;
  }
`;

export const NavLinkHeader = styled(NavLink)`
  color: #f4f4f4;
  font-size: 16px;
  line-height: 1.5;
  padding: 6px 12px;

  &:current {
    background-color: #f4f4f4;
    color: #242424;
  }

  &:hover,
  &:focus {
    background-color: #f4f4f4;
    color: #242424;
    border-radius: 30px;
  }
`;
