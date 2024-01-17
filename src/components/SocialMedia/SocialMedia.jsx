import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { SocItem, SocLink, SocList } from "./SocialMedia.styled";

export const SocialMedia = ({ variant }) => {
  return (
    <SocList $variant={variant}>
      <SocItem $variant={variant}>
        <SocLink
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noopener noreferrer"
          $variant={variant}
        >
          <FaFacebookF size={24} />
        </SocLink>
      </SocItem>
      <SocItem $variant={variant}>
        <SocLink
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noopener noreferrer"
          $variant={variant}
        >
          <FaInstagram size={24} />
        </SocLink>
      </SocItem>
      <SocItem $variant={variant}>
        <SocLink
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noopener noreferrer"
          $variant={variant}
        >
          <FaYoutube size={24} />
        </SocLink>
      </SocItem>
    </SocList>
  );
};
