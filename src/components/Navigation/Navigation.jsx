import { NavContainer, NavLinkHeader } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <NavContainer>
        <NavLinkHeader to="/">Home</NavLinkHeader>
        <NavLinkHeader to="favourites">Favoutites</NavLinkHeader>
      </NavContainer>
    </nav>
  );
};
