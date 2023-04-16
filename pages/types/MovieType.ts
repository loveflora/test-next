export interface MovieTypes {
  // map 도 타입을 지정해줘야 하나 ?
  // map(arg0: (v: MovieTypes) => JSX.Element): import("react").ReactNode;
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: [number];
}
