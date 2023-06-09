import { useRouter } from "next/router";
import styled from "styled-components";
import Seo from "./components/Seo";
import Image from "next/image";
import { MovieTypes } from "./types/MovieType";
import { useMovieData } from "./hooks/useMovieData";

export default function Home() {
  // export default function Home({ results }: { results: MovieTypes[] }) {
  const router = useRouter();

  const onClick = (
    id: number,
    title: string,
    path: string,
    vote: number,
    date: string,
    overview: string
  ) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: { id, title, path, vote, date, overview },
        // 쿼리 꼭 안써도 되나...?
      },
      // 표시하고 싶은 형식
      `/movies/${title}/${id}`
    );
  };

  // useEffect(() => {
  //   (async () => {
  //     const { results } = await // 구조분해할당으로 인해 results의 값이 나옴
  //     (await fetch(`/api/movies`)).json();
  //     setMovies(results);
  //   })();
  // }, []);

  const myLoader = ({ src }: { src: string }) => {
    return `https://image.tmdb.org/${src}`;
  };

  const results = useMovieData();

  console.log(results);

  return (
    <Container className="container">
      <Seo title="Home" />
      {results?.map((v: MovieTypes) => (
        <div
          onClick={() =>
            onClick(
              v.id,
              v.original_title,
              v.poster_path,
              v.vote_average,
              v.release_date,
              v.overview
            )
          }
          className="movie"
          key={v.id}
        >
          <Wrapper>
            <Image
              src={`t/p/w500${v.poster_path}`}
              // src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}
              alt=""
              width={500}
              height={500}
              loader={myLoader}
              className="img"
            />
            <div className="cover">
              <Title className="title">{v.original_title}</Title>
            </div>
          </Wrapper>
        </div>
      ))}
    </Container>
  );
}

// 2) SSR (데이터가 유효할 때, 화면이 보여지게 됨) => loading 화면 없이 API가 완료되도록 기다린 후에 모든 정보를 보여줌
// 더이상 페이지에 loading은 없고, 영화정보는 전부 reactJS가 아닌 HTML로 보여줌.
// nextJS가 자동으로 props들을 넣어주고, reactJS가 props를 받아다가 흡수(hydrate) !
//? getServerSideProps 에서 API를 fetch 해옴.
// export async function getServerSideProps() {
//   //   // 오직 벡엔드에서만 실행됨
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();

//   return {
//     props: {
//       results,
//     },
//   };
// }

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
  gap: 40px;
  width: 580px;

  .movie {
    cursor: pointer;
  }

  .movie .img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    position: relative;
  }

  .movie:hover .img {
    transform: scale(1.05) translateY(-10px);
  }

  .movie:hover .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    transform: scale(1.05) translateY(-10px);
  }

  .movie:hover .title {
    display: flex;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
  color: white;
  display: none;
`;
