import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieTypes } from "../types/MovieType";

const getMovieData = async (): Promise<MovieTypes[]> => {
  const response = await axios.get("/api/movies");
  return response.data.results;
};

export const useMovieData = (): MovieTypes[] => {
  // 방법 1
  // const { data } = useQuery(["movie"], getMovieData);

  // 방법 2
  const result = useQuery({
    queryKey: ["movie"],
    queryFn: getMovieData,
  });

  return result.data as MovieTypes[];
};
