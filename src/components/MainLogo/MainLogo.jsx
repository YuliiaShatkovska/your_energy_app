import sprite from "../../images/sprite.svg";

import { Logo } from "./MainLogo.styled";

export const MainLogo = () => {
  return (
    <a href="/your_energy_app">
      <Logo width="132" height="24">
        <use href={`${sprite}#logo`}></use>
      </Logo>
    </a>
  );
};
