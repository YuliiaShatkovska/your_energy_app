import { IoCloseOutline } from "react-icons/io5";

import { SocialMedia } from "components/SocialMedia/SocialMedia";

import {
  MobMenuBtn,
  MobMenuContainer,
  MobMenuLink,
  MobMenuNavContainer,
} from "./MobMenu.styled";

export const MobMenu = ({ isOpened, isOpening }) => {
  return (
    <>
      {isOpened && (
        <MobMenuContainer open={isOpened}>
          <MobMenuBtn type="button" onClick={() => isOpening((prev) => !prev)}>
            <IoCloseOutline size={32} />
          </MobMenuBtn>
          <MobMenuNavContainer>
            <li>
              <MobMenuLink href="/your_energy_app">Home</MobMenuLink>
            </li>
            <li>
              <MobMenuLink href="/your_energy_app/favourites">
                Favoutites
              </MobMenuLink>
            </li>

            {/* <MobMenuLink to="favourites">Favoutites</MobMenuLink> */}
          </MobMenuNavContainer>
          <SocialMedia variant="footer" />
        </MobMenuContainer>
      )}
    </>
  );
};
