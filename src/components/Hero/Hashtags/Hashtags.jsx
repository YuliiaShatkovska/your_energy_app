import { HashtagsItem, HashtagsList, HashtagsText } from "./Hashtags.styled";

export const Hashtags = () => {
  return (
    <HashtagsList>
      <HashtagsItem>
        <HashtagsText>#Sport</HashtagsText>
      </HashtagsItem>
      <HashtagsItem>
        <HashtagsText>#Healthy</HashtagsText>
      </HashtagsItem>
      <HashtagsItem>
        <HashtagsText>#Workout</HashtagsText>
      </HashtagsItem>
      <HashtagsItem>
        <HashtagsText>#Diet</HashtagsText>
      </HashtagsItem>
    </HashtagsList>
  );
};
