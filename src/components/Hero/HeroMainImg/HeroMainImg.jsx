import heroMainImageDesk from "../../../images/hero/hero-women-desk.webp";
import heroMainImageDesk2x from "../../../images/hero/hero-women-desk2x.webp";
import heroMainImageTab from "../../../images/hero/hero-women-tab.webp";
import heroMainImageTab2x from "../../../images/hero/hero-women-tab2x.webp";
import heroMainImageMob from "../../../images/hero/hero-women-mob.webp";
import heroMainImageMob2x from "../../../images/hero/hero-women-mob2x.webp";
import heroMainImageMobJpg from "../../../images/hero/hero-women-mob.jpg";
import heroMainImageMobJpg2x from "../../../images/hero/hero-women-mob2x.jpg";
import { HeroImage } from "./HeroMainImg.styled";

export const HeroMainImg = () => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        type="image/webp"
        srcSet={`${heroMainImageDesk} 1x,
       ${heroMainImageDesk2x} 2x
      `}
      />

      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet={`${heroMainImageTab} 1x,
        ${heroMainImageTab2x} 2x
       `}
      />

      <source
        media="(max-width: 767px)"
        type="image/webp"
        srcSet={`${heroMainImageMob} 1x,
        ${heroMainImageMob2x} 2x
       `}
      />

      <HeroImage
        src={heroMainImageMobJpg}
        srcSet={`${heroMainImageMobJpg} 1x,
        ${heroMainImageMobJpg2x} 2x
       `}
        alt="women working out"
        loading="lazy"
      />
    </picture>
  );
};
