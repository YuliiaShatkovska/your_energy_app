import { useMediaQuery } from "@mui/material";

import { HeroMainImg } from "components/Hero/HeroMainImg/HeroMainImg";
import { Hashtags } from "./Hashtags/Hashtags";
import sprite from "../../images/sprite.svg";
import heroLegsImgJpg from "../../images/hero/hero-legs-desk.jpg";
import heroLegsImg from "../../images/hero/hero-legs-desk.webp";
import heroLegsImg2x from "../../images/hero/hero-legs-desk2x.webp";

import {
  HeroContainer,
  HeroIcon,
  HeroImageLegs,
  HeroText,
  HeroTitle,
  HeroTopContainer,
} from "./Hero.styled";

export const Hero = () => {
  const matches = useMediaQuery("(min-width:1440px)");

  return (
    <HeroContainer>
      <HeroTopContainer>
        <div>
          <HeroTitle>
            <HeroIcon width={38} height={38}>
              <use href={`${sprite}#sun`}></use>
            </HeroIcon>
            Get <span style={{ fontStyle: "italic" }}> Body</span> in <br />
            shape, Stay healthy
          </HeroTitle>

          <HeroText>
            Transform your physique and embrace a healthier lifestyle with our
            comprehensive fitness and nutrition support.
          </HeroText>
        </div>

        {matches && (
          <div>
            <HeroImageLegs
              src={heroLegsImgJpg}
              srcSet={`${heroLegsImg} 1x, ${heroLegsImg2x} 2x`}
              alt="women jogging together"
            />

            <Hashtags />
          </div>
        )}
      </HeroTopContainer>

      <HeroMainImg />

      {!matches && <Hashtags />}
    </HeroContainer>
  );
};
