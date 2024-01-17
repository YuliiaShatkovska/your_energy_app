import { nanoid } from "nanoid";
import {
  ExercisesItem,
  ExercisesItemBox,
  ExercisesItemSubtitle,
  ExercisesItemTitle,
  ExercisesListBox,
} from "./ExersisesList.styled";
import { capitalizeFirstLetter } from "helpers/helpers";

export const ExercisesList = ({ exercises }) => {
  return (
    <ExercisesListBox>
      {exercises.map(({ name, filter, imgURL }) => (
        <ExercisesItem key={nanoid()}>
          <ExercisesItemBox
            style={{
              background: `linear-gradient(0deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.50) 100%), url(${imgURL})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <ExercisesItemTitle>
              {capitalizeFirstLetter(name)}
            </ExercisesItemTitle>
            <ExercisesItemSubtitle>{filter}</ExercisesItemSubtitle>
          </ExercisesItemBox>
        </ExercisesItem>
      ))}
    </ExercisesListBox>
  );
};
