import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "@mui/material";

import { Navigation } from "components/Navigation/Navigation";
import { MobMenu } from "components/MobMenu/MobMenu";

import { HeaderContainer } from "./Header.styled";
import { Container } from "components/App/App.styled";
import { SocialMedia } from "components/SocialMedia/SocialMedia";
import { MainLogo } from "components/MainLogo/MainLogo";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Container>
        <HeaderContainer>
          <MainLogo />

          <Navigation />

          <SocialMedia variant="header" />

          {matches && (
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={28}
              duration={0.8}
            />
          )}
        </HeaderContainer>

        <MobMenu isOpened={isOpen} isOpening={setIsOpen} />
      </Container>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
