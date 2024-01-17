import axios from "axios";

axios.defaults.baseURL = "https://your-energy.b.goit.study/api";

export const GetExercises = async (filter, page = 1, limit) => {
  const response = await axios.get(
    `/filters?filter=${filter}&page=${page}&limit=${limit}`
  );
  //   console.log(response);
  return response;
};
