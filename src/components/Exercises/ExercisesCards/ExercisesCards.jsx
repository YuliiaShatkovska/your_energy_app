import { NavLink } from "react-router-dom";
import {
  ExercisesFilterBox,
  ExercisesFilterBtn,
} from "../ExercisesCards/ExercisesCards.styled";
import { GetExercises } from "services/api";
import { useEffect, useState } from "react";
import { ExercisesList } from "./ExercisesList/ExercisesList";

// GetExercises("Muscles", 1, 12);

export const ExercisesCards = () => {
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getAll = async () => {
      try {
        const { data } = await GetExercises(filter, page, limit);
        console.log(data.results);
        setExercises(data.results);
      } catch (err) {}
    };
    getAll();
  }, [filter, page, limit]);

  const click = (e) => {
    setFilter(e.target.innerText);
  };

  return (
    <>
      <ExercisesFilterBox>
        <li>
          <ExercisesFilterBtn type="button" onClick={click}>
            Body parts
          </ExercisesFilterBtn>
        </li>
        <li>
          <ExercisesFilterBtn type="button" onClick={click}>
            Muscles
          </ExercisesFilterBtn>
        </li>
        <li>
          <ExercisesFilterBtn type="button" onClick={click}>
            Equipment
          </ExercisesFilterBtn>
        </li>
      </ExercisesFilterBox>

      <ExercisesList exercises={exercises} />
    </>
  );
};
