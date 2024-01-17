import { Exercises } from "components/Exercises/Exercises";
import { Hero } from "components/Hero/Hero";

import { Container } from "components/App/App.styled";

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <Exercises />
    </Container>
  );
};

export default HomePage;
