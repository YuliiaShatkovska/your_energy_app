
import styled from "styled-components";

export const MobMenuContainer = styled.div`
  background-color: #242424;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  z-index: 99;
  opacity: 1;
`;

export const MobMenuBtn = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  color: #f4f4f4;
  background-color: transparent;
  margin-left: auto;
`;

export const MobMenuNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const MobMenuLink = styled.a`
  color: #f4f4f4;
  display: flex;
  justify-content: center;
`;
